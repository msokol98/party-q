package io.sokol.partyq.service;

import io.sokol.partyq.dto.PartyDTO;
import io.sokol.partyq.entity.Member;
import io.sokol.partyq.exceptions.NoSuchPartyException;
import io.sokol.partyq.exceptions.NoSuchUserException;
import io.sokol.partyq.exceptions.UserHasNoPartyException;

public interface PartyService {
    PartyDTO getPartyByMemberId(long memberId) throws NoSuchUserException, UserHasNoPartyException;
    PartyDTO addMember(long memberId, String entryCode) throws NoSuchUserException, NoSuchPartyException;
    PartyDTO createParty(Member member) throws NoSuchUserException;
    boolean isMemberInParty(long memberId) throws NoSuchUserException;
}
