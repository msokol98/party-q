package io.sokol.partyq.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Song {

    public enum Status {PAST, CURRENT, NEXT, UPCOMING};

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String artist;
    private String imageURI;
    private Status status;

    @ManyToOne
    private Party party;

    private String picker;

}