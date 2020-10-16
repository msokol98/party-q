package io.sokol.partyq.service;

import io.sokol.partyq.dto.MemberDTO;
import io.sokol.partyq.entity.Member;
import io.sokol.partyq.exceptions.NoSuchPartyException;
import io.sokol.partyq.exceptions.NoSuchUserException;
import org.springframework.http.ResponseEntity;

public interface MemberService {
    MemberDTO patchMember(Member member);

    ResponseEntity<Void> leaveParty(long memberId, long partyId) throws NoSuchUserException, NoSuchPartyException;
}
