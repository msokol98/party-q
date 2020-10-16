package io.sokol.partyq.controller;

import io.sokol.partyq.dto.MemberDTO;
import io.sokol.partyq.entity.Member;
import io.sokol.partyq.exceptions.NoSuchPartyException;
import io.sokol.partyq.exceptions.NoSuchUserException;
import io.sokol.partyq.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/api/members")
    public MemberDTO patchMember(@RequestBody Member member) {
        MemberDTO dto =  memberService.patchMember(member);
        return dto;
    }

    @GetMapping("/api/members/leave")
    public ResponseEntity<Void> leaveParty(@RequestParam long memberId, @RequestParam long partyId) throws NoSuchUserException, NoSuchPartyException {
        return memberService.leaveParty(memberId, partyId);
    }

}
