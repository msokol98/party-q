package io.sokol.partyq.controller;

import io.sokol.partyq.dto.PartyDTO;
import io.sokol.partyq.entity.Member;
import io.sokol.partyq.exceptions.NoSuchPartyException;
import io.sokol.partyq.exceptions.NoSuchUserException;
import io.sokol.partyq.exceptions.UserHasNoPartyException;
import io.sokol.partyq.service.PartyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PartyController {

    @Autowired
    private PartyService partyService;

    @GetMapping("/api/parties")
    public PartyDTO getPartyByMemberId(@RequestParam("memberId") long memberId) throws NoSuchUserException, UserHasNoPartyException {
        return partyService.getPartyByMemberId(memberId);
    }

    @PostMapping("/api/parties/new")
    public PartyDTO createParty(@RequestBody Member member) throws NoSuchUserException {
        return partyService.createParty(member);
    }

    @GetMapping("/api/parties/join")
    public PartyDTO joinParty(@RequestParam("memberId") long memberId,
                              @RequestParam("entryCode") String entryCode) throws NoSuchUserException, NoSuchPartyException {
        return partyService.addMember(memberId, entryCode);
    }

    @GetMapping("/api/parties/exists")
    public boolean isMemberInParty(@RequestParam("memberId") long memberId) throws NoSuchUserException {
        return partyService.isMemberInParty(memberId);
    }
}
