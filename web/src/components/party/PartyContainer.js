import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiHost } from 'config';
import HasNoParty from './has-no-party';
import Party from './active/PartyContainer';
import Loading from 'components/Loading';

const PartyContainer = ({ member }) => {

    const [loading, setLoading] = useState(true);
    const [hasParty, setHasParty] = useState();
    const [party, setParty] = useState();

    const fetchHasParty = () => {
        axios.get(`${apiHost}/api/parties/exists`, {
            params: {memberId: member.id}
        }).then(response => { setHasParty(response.data); setLoading(false) })
    }

    const fetchParty = () => {
        hasParty && axios.get(`${apiHost}/api/parties`, {
            params: {memberId: member.id}
        }).then(response => setParty(response.data))
    }

    useEffect(fetchHasParty, []);
    useEffect(fetchParty, [hasParty]);

    if(loading) return <Loading />;

    if(!hasParty) return <HasNoParty member={member} />

    if(!party) return <Loading />;

    return <Party member={member} party={party} />

}
 
export default PartyContainer;