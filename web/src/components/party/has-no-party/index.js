import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import HostParty from '../host/HostPartyContainer';
import JoinParty from '../join/JoinPartyContainer';
import './styles.css';

const HasNoParty = ({ member }) => {

    const [choice, setChoice] = useState();
    const hostParty = () => setChoice('host');
    const joinParty = () => setChoice('join');

    if(!choice) 
        return(
            <div className='hnp-wrapper content section'>

                <h4 className='title has-text-light'>What do you want to do?</h4>
                <div className='hnp-button-group'>
                    <Button style={{border: "none", backgroundColor: "#1DB954", padding: "10px"}} size="lg" 
                        onClick={hostParty} variant='primary'>Host Party</Button>

                    <Button style={{border: "none", backgroundColor: "#1DB954", padding: "10px"}} size="lg"
                        onClick={joinParty} variant='primary'>Join Party</Button>
                </div>

            </div>
        )
    
    if(choice === 'host')
        return <HostParty member={member} />
    
    return <JoinParty member={member} />
    
}
 
export default HasNoParty;