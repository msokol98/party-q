import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bulma/css/bulma.css'

import Navbar from 'components/navbar';
import Landing from 'components/landing';
import Party from 'components/party/PartyContainer';

import { apiHost } from 'config';
import queryString from 'query-string';
import axios from 'axios';
import ProtectedRoute from 'hoc/ProtectedRoute';

class App extends Component {

  state = {
    token: queryString.parse(window.location.search).access_token,
    user: JSON.parse(localStorage.getItem('user'))
  }

  fetchUser = () => {
    const { token, user } = this.state;

    !user && token && axios.get('https://api.spotify.com/v1/me',
          { headers: { 'Authorization': 'Bearer ' + token} }
      ).then(response => this.storeUser(response.data))
  }

  storeUser = user => {
    const { token } = this.state;
 
    axios.post(`${apiHost}/api/members`, {
      name: user.display_name, email: user.email, token: token
    })
      .then(response => {
        const theUser = response.data;
        this.setState({user: theUser});
        localStorage.setItem('user', JSON.stringify(theUser)) 
      })
  }

  componentDidMount() {
    this.fetchUser();
  }

  logout = () => {
    localStorage.removeItem('user');
    this.setState({user: null})
  }
  
  render() {
    const { user } = this.state;
    return (
      <div className="App has-text-light has-background-dark">

        <Navbar user={user} logout={this.logout} />

        <div style={{minHeight: '100vh', paddingTop: '70px'}}>
            <Router>
              <Switch>
                <Route exact={true} path='/' component={Landing} />
                <ProtectedRoute user={user} exact={true} path='/party' component={Party} />
              </Switch>
            </Router>
          </div>
      </div>
    );
  }
}

export default App;
