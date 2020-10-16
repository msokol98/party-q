package io.sokol.partyq.repository;

import io.sokol.partyq.entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository extends JpaRepository<Song, Long> {
}
