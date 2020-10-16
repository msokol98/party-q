package io.sokol.partyq.exceptions;

public class UserHasNoPartyException extends Exception {
    public UserHasNoPartyException() {
        super("The user is not in a party.");
    }
}
