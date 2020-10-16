import React, { Component } from 'react';
import AddSong from './AddSong';
import axios from 'axios';
import { apiHost } from 'config';
import useFormatSong from 'hooks/useFormatSong';

class AddSongContainer extends Component {

    state = {results: [], addedSong: false}

    getResults = query => {
        const { member } = this.props;

        if(query === "") {
            this.setState({results: []});
            return;
        }

        axios.get("https://api.spotify.com/v1/search", {
            headers: {
                'Authorization': 'Bearer ' + member.token
            }, 
            params: {
                q: query,
                type: "track,album,artist",
                market: "US",
                limit: 5
            }
        }).then(response => this.setState({results: response.data.tracks.items}))

    }

    addSong = song => {
        this.setState({addedSong: true});

        const { partyId, hostToken, member } = this.props;
        this.addSongToHostPlaylist(song, hostToken);
        this.addSongToServerQueue(song, partyId, member.name);
    }

    addSongToHostPlaylist = (song, hostToken) => {
        axios.post("https://api.spotify.com/v1/me/player/queue", {}, {
            headers: {
                'Authorization': 'Bearer ' + hostToken
            }, 
            params: {
                uri: song.uri
            }
        });
    }

    addSongToServerQueue = (song, partyId, picker) => { 
        const obj = {picker, ...useFormatSong(song)};
        console.log(obj);
        axios.post(`${apiHost}/api/songs/add?partyId=${partyId}`, obj);
    }

    render() {
        const { addedSong, results } = this.state;

        if(addedSong) this.props.resetTab(); 
        

        return(
            <div className="add-song-wrapper">
                <AddSong addSong={this.addSong} results={results} getResults={this.getResults} />
            </div>
        )
    }
}
 
export default AddSongContainer;