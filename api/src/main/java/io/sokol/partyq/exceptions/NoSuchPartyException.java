package io.sokol.partyq.exceptions;

public class NoSuchPartyException extends Exception {
    public NoSuchPartyException() {
        super("Could not find party  by given params");
    }
}
