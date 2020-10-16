import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import useWindowSize from 'hooks/useWindowSize';
import './styles.css';

const getCurrentSongIdx = (queue) => {
    var idx = -1;

    queue && queue.forEach((song, index) => {
        if(song.status === "CURRENT") {
            idx = index;
        }
    });

    return idx;
}


const Queue = ({ queue, hostName }) => {

        const isMobile = useWindowSize().width < 768, currentSongIdx = getCurrentSongIdx(queue);

        return(
                <div>
                    <h2 className='title has-text-light queue-header'>The Queue</h2>
                    <br />

                    {!queue || queue.length === 0 && <h3 style={{textAlign: "center"}}>Host, play a song to get started.</h3>}

                    {queue && 

                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={queue.length}
                        visibleSlides={isMobile ? 1 : 3}
                        currentSlide={isMobile ? currentSongIdx: currentSongIdx-1}>

                        <Slider>
                            {queue.map((song, index) => {
                                const isCurrentSong = index === currentSongIdx
                                
                                const statusColor = (song.status === "CURRENT" || song.status === "NEXT") ?
                                "#1DB954" : "#F0F0F0"

                                let imgWidth;

                                if(isMobile || !isCurrentSong)
                                    imgWidth = isMobile ? "90%" : "40%";
                                else if(!isMobile)
                                    imgWidth = "60%";

                                return(

                                    <Slide key={index} className='song' style={{fontSize: isCurrentSong ? '1.2rem' : '1rem'}}>
                                        <h5>{song.name}</h5>
                                        <h5>By {song.artist}</h5>

                                        <img src={song.imageURI} width={imgWidth} alt="song"></img>

                                        <h5 style={{color: statusColor}}>{song.status}</h5>
                                        <h5>Picked by {song.picker ==  "" ? hostName : song.picker}</h5>

                                        {/*{song.status === "CURRENT" && this.props.isMobile && !this.state.isVotingToSkip && 
                                            <Button onClick={() => this.props.enterSkipVote(true)}>Vote to Skip Song</Button>}

                                        {song.status === "CURRENT" && this.props.isMobile && this.state.isVotingToSkip && 
                                            <Button onClick={() => this.props.enterSkipVote(false)}>Undo Skip Vote</Button>}*/}

                                    </Slide>

                                )
                            })}
                        </Slider>
                        
                        

                    </CarouselProvider>}
                </div>
        )

}
 
export default Queue;

