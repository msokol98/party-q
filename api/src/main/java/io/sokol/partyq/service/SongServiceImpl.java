package io.sokol.partyq.service;

import io.sokol.partyq.dto.PartyDTO;
import io.sokol.partyq.dto.SongDTO;
import io.sokol.partyq.entity.Party;
import io.sokol.partyq.entity.Song;
import io.sokol.partyq.exceptions.NoSuchPartyException;
import io.sokol.partyq.repository.PartyRepository;
import io.sokol.partyq.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service("songService")
public class SongServiceImpl implements SongService {

    @Autowired
    private SongRepository songRepo;

    @Autowired
    private PartyRepository partyRepo;

    @Override
    public List<SongDTO> getSongs(long partyId) throws NoSuchPartyException {
        return getParty(partyId).getQueue().stream().map(SongDTO::new).collect(Collectors.toList());
    }

    @Override
    public ResponseEntity<Void> addSong(long partyId, Song song) throws NoSuchPartyException {
        Party party = getParty(partyId);
        List<Song> queue = party.getQueue();

        if(party.getCurrentSongIdx() == queue.size()-1)
            song.setStatus(Song.Status.NEXT);
        else
            song.setStatus(Song.Status.UPCOMING);

        song.setParty(party);
        songRepo.save(song);
        queue.add(song);
        partyRepo.save(party);
        return ResponseEntity.noContent().build();
    }

    @Override
    public ResponseEntity<Void> changeCurrentSong(long partyId, Song song) throws NoSuchPartyException {

        Party party = getParty(partyId);
        List<Song> queue = party.getQueue();

        int currentSongIdx = party.getCurrentSongIdx();

        if(currentSongIdx == queue.size()) {
            song.setStatus(Song.Status.CURRENT);
            song.setParty(party);
            songRepo.save(song);
            queue.add(song);
            partyRepo.save(party);
            return ResponseEntity.noContent().build();
        }

        if(!isUpcoming(queue, currentSongIdx, song))
            addSong(partyId, song);

        Song currentSong = queue.get(currentSongIdx);
        currentSong.setStatus(Song.Status.PAST);
        song.setParty(party);
        songRepo.save(currentSong);

        Song newCurrentSong;
        if(inBounds(queue, currentSongIdx+1)) {
            newCurrentSong = queue.get(currentSongIdx+1);
            newCurrentSong.setStatus(Song.Status.CURRENT);
            songRepo.save(newCurrentSong);
        }

        Song newNextSong;
        if(inBounds(queue, currentSongIdx+2)) {
            newNextSong = queue.get(currentSongIdx+2);
            newNextSong.setStatus(Song.Status.NEXT);
            songRepo.save(newNextSong);
        }

        party.setCurrentSongIdx(++currentSongIdx);
        partyRepo.save(party);

        return ResponseEntity.noContent().build();
    }

    @Override
    public boolean skipCurrentSong(long partyId, String memberEmail, boolean isVotingToSkip) {
        return false;
    }

    private Party getParty(long id) throws NoSuchPartyException {
        Optional<Party> optParty = partyRepo.findById(id);
        optParty.orElseThrow(NoSuchPartyException::new);
        return optParty.get();
    }

    private boolean inBounds(List<Song> queue, int idx) {
        return idx < queue.size();
    }

    private boolean isUpcoming(List<Song> queue, int currentSongIdx, Song song) {
        for(int i = currentSongIdx+1; i < queue.size(); i++) {
            if(queue.get(i).getName().contentEquals(song.getName()))
                return true;
        }
        return false;
    }

}
