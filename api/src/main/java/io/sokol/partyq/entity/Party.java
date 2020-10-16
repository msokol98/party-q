package io.sokol.partyq.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Party {

    @Id
    @GeneratedValue
    private long id;

    private String entryCode;

    @OneToOne
    private Member host;

    @OneToMany(mappedBy = "party")
    private List<Member> members = new ArrayList<>();

    @OneToMany(cascade = CascadeType.REMOVE)
    @OrderColumn
    private List<Song> queue = new ArrayList<>();

    private int currentSongIdx;

    public void addMember(Member member) {
        members.add(member);
    }
    public void removeMember(Member member) {
        members.remove(member);
    }

    public void addSong(Song song) {
        queue.add(song);
    }
    public void removeSong(Song song) {
        queue.remove(song);
    }
}
