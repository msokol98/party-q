import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const JoinParty = ({ joinGroup, error }) => {

    const [entryCode, setEntryCode] = useState({
        value: ''
    });

    const handleChange = e => {
        const regex = /^[0-9\b]+$/, val = e.target.val;

        if (e.target.value === '' || regex.test(e.target.value)) 
            setEntryCode({value: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        joinGroup(entryCode.value);
    }
    
    return(
        <form onSubmit={handleSubmit} className='hnp-wrapper content section'>
            <h4 className='title has-text-light'>Please enter your party's entry code.</h4>

            <input type='text' maxLength="6" value={entryCode.value} onChange={handleChange} 
                style={{maxWidth: "500px", width: "100%", padding: "10px", marginBottom: "20px"}}/>

            <Button style={{maxWidth: "500px", border: "none", backgroundColor: "#1DB954", padding: "10px"}} size="block" type='submit'>Submit</Button>

            <br /><br />

            {error && <h6 style={{color: "red", textAlign: "center"}}>Could not find a party with the given entry code.</h6>}
        </form>

    )
}

export default JoinParty;