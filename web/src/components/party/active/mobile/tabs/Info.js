import React from 'react';
import Button from 'react-bootstrap/Button';

const Info = ({ entryCode, host, isHost, leaveParty }) => (
    <div>
        <h4 className='title has-text-light'>Party Info</h4>
        <h4 className='has-text-light'>Party hosted by {host}</h4>
        <h4 className='has-text-light'>Entry code is {entryCode}</h4>

        <br />

        <Button style={{backgroundColor: "#1DB954", color: "#ffffff", border: 'none', padding: '10px', fontSize: '1.05rem'}}
                    onClick={leaveParty}>{getOutput(isHost)}
        </Button>    
    </div>
)

const getOutput = isHost => isHost ? "Delete Party" : "Leave Party";

export default Info;