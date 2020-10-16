package io.sokol.partyq.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class PartyCodeGenerator {

    private static PartyCodeGenerator theCodeGenerator;
    private static List<String> usedCodes;

    private PartyCodeGenerator() {}

    public static PartyCodeGenerator getInstance() {

        if(theCodeGenerator == null) {
            theCodeGenerator = new PartyCodeGenerator();
            usedCodes = new ArrayList<String>();
        }

        return theCodeGenerator;
    }

    public String run() {

        if(usedCodes.size() == 1000000)
            usedCodes = new ArrayList<String>();

        String entryCode;
        Random r = new Random();

        do {
            int number = r.nextInt(999999);
            entryCode = String.format("%06d", number);
        }
        while(isDuplicateCode(entryCode));

        usedCodes.add(entryCode);
        return entryCode;
    }

    private boolean isDuplicateCode(String code) {
        for(String c : usedCodes) {
            if(c.contentEquals(code)) {
                return true;
            }
        }
        return false;
    }

}
