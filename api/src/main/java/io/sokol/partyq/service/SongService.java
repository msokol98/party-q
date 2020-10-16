package io.sokol.partyq.service;

import java.util.List;

import io.sokol.partyq.exceptions.NoSuchPartyException;
import org.springframework.http.ResponseEntity;

import io.sokol.partyq.entity.Song;
import io.sokol.partyq.dto.SongDTO;

public interface SongService {

    List<SongDTO> getSongs(long partyId) throws NoSuchPartyException;
    ResponseEntity<Void> addSong(long partyId, Song song) throws NoSuchPartyException;
    ResponseEntity<Void> changeCurrentSong(long partyId, Song song) throws NoSuchPartyException;
    boolean skipCurrentSong(long partyId, String memberEmail, boolean isVotingToSkip);

}