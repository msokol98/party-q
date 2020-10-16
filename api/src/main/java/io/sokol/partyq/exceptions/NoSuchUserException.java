package io.sokol.partyq.exceptions;

public class NoSuchUserException extends Exception {
    public NoSuchUserException() {
        super("Could not find user by given params");
    }
}
