import React, { useState } from 'react';
import Result from './Result';
import "./styles.css";

const AddSong = ({ addSong, results, getResults}) => {

    const [query, setQuery] = useState({
        value: ''
    });

    const handleChange = e => {
        e.preventDefault();
        setQuery({ value: e.target.value });
        getResults(query.value);
    }

    return(
        <div className='add-song'>
            <div className="search-input-wrapper">
                
                <input 
                    type="text"
                    value={query.value}                    
                    className="search-input"
                    placeholder="Add a song to the queue..."
                    onChange={handleChange} 
                />
            </div>

            {results && results.map(result => <Result addSong={addSong} key={result.id} song={result} />)}
        </div>
    )
}
 
export default AddSong;