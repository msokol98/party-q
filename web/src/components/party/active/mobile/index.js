import React, { useState } from 'react';
import BottomNav from './BottomNav';
import Queue from './tabs/Queue';
import AddSong from './tabs/AddSong/AddSongContainer';
import Members from './tabs/Members';
import Info from './tabs/Info';
import './styles.css';

const MobileParty = ({ member, party, leaveParty }) => {

    const [visibleTab, setVisibleTab] = useState("Queue");

    const resetTab = () => setVisibleTab("Queue");

    return(
        <div className='party-container'>
            <div className='five-percent-padding'>
                {visibleTab === "Queue" && <Queue queue={party.queue} hostName={formatName(party.host.name)} /> }
                {visibleTab === "Add Song" && <AddSong resetTab={resetTab} member={member} hostToken={party.host.token} partyId={party.id} />}
                {visibleTab === "Members" && <Members members={party.members} host={party.host} />}
                {visibleTab === "Info" && <Info entryCode={party.entryCode} host={party.host.name} 
                                                    leaveParty={leaveParty} isHost={member.id === party.host.id}/>}
            </div>

            <BottomNav setVisible={setVisibleTab} />
        </div>

    )
}

const formatName = name => {
    if(name.includes(" ")) {
        const parts = name.split(" ");
        return parts[0];
    }
}
 
export default MobileParty;