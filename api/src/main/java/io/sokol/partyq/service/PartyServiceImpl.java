package io.sokol.partyq.service;

import io.sokol.partyq.dto.PartyDTO;
import io.sokol.partyq.entity.Member;
import io.sokol.partyq.entity.Party;
import io.sokol.partyq.exceptions.NoSuchPartyException;
import io.sokol.partyq.exceptions.NoSuchUserException;
import io.sokol.partyq.exceptions.UserHasNoPartyException;
import io.sokol.partyq.repository.MemberRepository;
import io.sokol.partyq.repository.PartyRepository;
import io.sokol.partyq.util.PartyCodeGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("partyService")
public class PartyServiceImpl implements PartyService {

    @Autowired
    private PartyRepository partyRepo;

    @Autowired
    private MemberRepository memberRepo;

    @Override
    public PartyDTO getPartyByMemberId(long memberId) throws NoSuchUserException, UserHasNoPartyException {
         Member member = getMember(memberId);
         Party party = member.getParty();

         if(party == null)
             throw new UserHasNoPartyException();

         return new PartyDTO(party);
    }

    @Override
    public boolean isMemberInParty(long memberId) throws NoSuchUserException {
        Member member = getMember(memberId);
        return member.getParty() != null;
    }

    @Override
    public PartyDTO addMember(long memberId, String entryCode) throws NoSuchUserException, NoSuchPartyException {
        Member member = getMember(memberId);
        Optional<Party> optParty = partyRepo.findByEntryCode(entryCode);

        optParty.orElseThrow(NoSuchPartyException::new);
        Party party = optParty.get();

        party.addMember(member);
        member.setParty(party);

        memberRepo.save(member);
        return new PartyDTO(party);
    }

    @Override
    public PartyDTO createParty(Member m) throws NoSuchUserException {
        Member host = getMember(m.getId());

        Party party = new Party();
        party.setHost(host);
        party.addMember(host);
        party.setEntryCode(PartyCodeGenerator.getInstance().run());

        partyRepo.save(party);

        host.setParty(party);
        memberRepo.save(host);

        return new PartyDTO(party);
    }

    private Member getMember(long id) throws NoSuchUserException {
        Optional<Member> optMember = memberRepo.findById(id);
        optMember.orElseThrow(NoSuchUserException::new);
        return optMember.get();
    }
}
