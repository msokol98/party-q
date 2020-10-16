package io.sokol.partyq.service;

import io.sokol.partyq.dto.MemberDTO;
import io.sokol.partyq.entity.Member;
import io.sokol.partyq.entity.Party;
import io.sokol.partyq.exceptions.NoSuchPartyException;
import io.sokol.partyq.exceptions.NoSuchUserException;
import io.sokol.partyq.repository.MemberRepository;
import io.sokol.partyq.repository.PartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("memberService")
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberRepository memberRepo;

    @Autowired
    private PartyRepository partyRepo;

    @Override
    public MemberDTO patchMember(Member m) {
        Optional<Member> optionalMember = memberRepo.findByEmail(m.getEmail());
        Member member;

        if(optionalMember.isEmpty())
            member = m;
        else {
            member = optionalMember.get();
            member.setToken(m.getToken());
        }
        memberRepo.save(member);
        return new MemberDTO(member);
    }

    @Override
    public ResponseEntity<Void> leaveParty(long memberId, long partyId) throws NoSuchUserException, NoSuchPartyException {
         Member member = getMember(memberId);
         Optional<Party> optParty = partyRepo.findById(partyId);
         optParty.orElseThrow(NoSuchPartyException::new);

         member.setParty(null);

         Party party = optParty.get();

         if(party.getHost().getId() == memberId || party.getMembers().size() == 1) {
             partyRepo.delete(party);
             memberRepo.save(member);
             return ResponseEntity.noContent().build();
         }

         party.removeMember(member);
         memberRepo.save(member);
         partyRepo.save(party);
         return ResponseEntity.noContent().build();
    }

    private Member getMember(long id) throws NoSuchUserException {
        Optional<Member> optMember = memberRepo.findById(id);
        optMember.orElseThrow(NoSuchUserException::new);
        return optMember.get();
    }
}
