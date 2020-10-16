import React from 'react';
import './styles.css';
import useWindowSize from 'hooks/useWindowSize';

const Result = ({ song, addSong }) => {
    const isMobile = useWindowSize().width < 768;

    return(
        <div className='result bordered has-background-white' 
                onClick={() => addSong(song)}>
            
            <img src={song.album.images[0].url} width={isMobile ? "100%" : "200px"} alt="song" />
            <h4>{song.name} by {song.artists[0].name}</h4>
    
        </div>
    )
}
 
export default Result;