package io.sokol.partyq.repository;

import io.sokol.partyq.entity.Party;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PartyRepository extends JpaRepository<Party, Long> {
    Optional<Party> findByEntryCode(String entryCode);
}
