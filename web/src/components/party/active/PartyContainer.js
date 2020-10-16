import React, { Component } from 'react';
import Mobile from './mobile';
import axios from 'axios';
import { apiHost } from 'config';
import useFormatSong from 'hooks/useFormatSong';
import { Redirect } from 'react-router-dom';

class PartyContainer extends Component {

    state = {currentSong: JSON.parse(localStorage.getItem('currentSong')), queue: []};

    getCurrentSong = () => {

        const { party } = this.props;
        const { currentSong } = this.state;

        if(!party || !party.host) return;

        axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
            headers: {
                'Authorization': 'Bearer ' + party.host.token
            }
        }).then(response => {
            const song = response.data.item;
            song && (!currentSong || song.id !== currentSong.id) && this.changeCurrentSong(song);
        })
    }

    changeCurrentSong = song => {
        const { party } = this.props;
        this.setState({currentSong: song}, () => song && localStorage.setItem('currentSong', JSON.stringify(song)));
        axios.post(`${apiHost}/api/songs/current?partyId=${party.id}`, useFormatSong(song));
    }

    getQueue = () => {
        axios.get(`${apiHost}/api/songs/all`, { params: {partyId : this.props.party.id} })
            .then(response => this.setState({queue: response.data}));
    }

    leaveParty = () => {
        const { party, member } = this.props;
        axios.get(`${apiHost}/api/members/leave`, {
            params: {
                memberId: member.id,
                partyId: party.id
            }
        }).then(() => {
            alert("You have left the party.");
            this.setState({leftParty: true});
        })
    }

    componentDidMount() {
        const { party, member } = this.props;

        if(member.id === party.host.id);
            setInterval(this.getCurrentSong, 1000);

        setInterval(this.getQueue, 1000);
    }
      
    render() {
        if(this.state.leftParty)
            return <Redirect to="/" />

        const { party, member } = this.props;
        let { queue } = this.state;

        queue.currentSongIdx = party.currentSongIdx;

        return(
            <div>
                <Mobile party={{...party, queue}} member={member} leaveParty={this.leaveParty}  />
            </div>
        )
    }
}
 
export default PartyContainer;