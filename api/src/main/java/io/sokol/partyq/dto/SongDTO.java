package io.sokol.partyq.dto;

import io.sokol.partyq.entity.Member;
import io.sokol.partyq.entity.Song;

public class SongDTO {

    private Song song;

    public SongDTO(Song song) {
        this.song = song;
    }

    public String getName() {
        String name = song.getName();
        String[] parts = name.split(" ");

        if(parts.length > 3)
            name = parts[0] + " "  + parts[1]  + " " + parts[2] + "...";

        return name;
    }

    public String getArtist() {
        return song.getArtist();
    }

    public String getImageURI() {
        return song.getImageURI();
    }

    public Song.Status getStatus() {
        return song.getStatus();
    }

    public String getPicker() {

        String picker = song.getPicker();

        if(picker == null || picker.contentEquals(""))   {
            return "";
        }

        String name = picker;

        if(name.contains(" ")) {
            String[] parts = name.split(" ");
            return parts[0];
        }

        return name;
    }

}
