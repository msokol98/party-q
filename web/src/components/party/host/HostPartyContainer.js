import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiHost } from 'config';
import Party from '../active/PartyContainer';

const HostPartyContainer = ({ member }) => {

    const [party, setParty] = useState();

    useEffect(() => {
        axios.post(`${apiHost}/api/parties/new`, member)
            .then(response => setParty(response.data))
    }, []);

    if(!party) return <></>

    return <Party member={member} party={party} />
}
 
export default HostPartyContainer;