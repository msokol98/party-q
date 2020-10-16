package io.sokol.partyq.dto;

import io.sokol.partyq.entity.Member;

public class MemberDTO {

    private Member member;

    public MemberDTO(Member member) {
        this.member = member;
    }

    public long getId() {
        return member.getId();
    }

    public String getName() {
        return member.getName();
    }

    public String getEmail() {
        return member.getEmail();
    }

    public String getToken() {
        return member.getToken();
    }
}
