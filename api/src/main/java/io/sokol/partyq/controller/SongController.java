package io.sokol.partyq.controller;

import io.sokol.partyq.dto.SongDTO;
import io.sokol.partyq.entity.Song;
import io.sokol.partyq.exceptions.NoSuchPartyException;
import io.sokol.partyq.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SongController {

    @Autowired
    private SongService songService;

    @PostMapping("/api/songs/current")
    public ResponseEntity<Void> changeCurrentSong(@RequestParam long partyId, @RequestBody Song song) throws NoSuchPartyException {
        return songService.changeCurrentSong(partyId, song);
    }

    @PostMapping("/api/songs/add")
    public ResponseEntity<Void> addSong(@RequestParam long partyId, @RequestBody Song song) throws NoSuchPartyException {
        return songService.addSong(partyId, song);
    }

    @GetMapping("/api/songs/all")
    public List<SongDTO> addSong(@RequestParam long partyId) throws NoSuchPartyException {
        return songService.getSongs(partyId);
    }

}
