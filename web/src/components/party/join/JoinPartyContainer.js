import React, { useState } from 'react';
import JoinParty from './JoinParty';
import axios from 'axios';
import { apiHost } from 'config';
import Party from "../active/PartyContainer";

const JoinPartyContainer = ({ member }) => {

    const [error, setError] = useState(false);
    const [party, setParty] = useState();
    
    const joinGroup = entryCode => {
        axios.get(`${apiHost}/api/parties/join`, {
            params: {memberId: member.id, entryCode}
        })
            .then(response => setParty(response.data))
            .catch(() => setError(true))
    }

    if(!party)
        return <JoinParty joinGroup={joinGroup} error={error} />

    return <Party member={member} party={party} />
}
 
export default JoinPartyContainer;