package io.sokol.partyq.dto;

import io.sokol.partyq.entity.Party;

import java.util.Set;
import java.util.stream.Collectors;

public class PartyDTO {

    private Party party;

    public PartyDTO(Party party) {
        this.party = party;
    }

    public long getId() {
        return party.getId();
    }

    public String getEntryCode() {
        return party.getEntryCode();
    }

    public MemberDTO getHost() {
        return new MemberDTO(party.getHost());
    }

    public Set<MemberDTO> getMembers() {
        return party.getMembers().stream().map(member -> new MemberDTO(member)).collect(Collectors.toSet());
    }

}
