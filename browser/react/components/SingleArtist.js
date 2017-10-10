import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import Songs from './Songs';
import { AllAlbums } from './AllAlbums';
import NotFound from './NotFound';

export default class SingleArtists extends Component {
  constructor() {
    super();
    this.state = {
      artist: {},
      artistAlbums: [],
      artistSongs: []
    }
  }

  componentDidMount() {
    Promise.all([
      axios.get(`/api/artists/${this.props.match.params.artistId}`),
      axios.get(`/api/artists/${this.props.match.params.artistId}/albums`),
      axios.get(`/api/artists/${this.props.match.params.artistId}/songs`)])
      .then(res => {
        return res.map(result => result.data)
      })
      .then(data => {
        this.setState({ artist: data[0], artistAlbums: data[1], artistSongs: data[2] })
      })
      .catch(error => this.props.history.push("/NotFound"));
  }

  //   render() {
  //     return (
  //     <div>
  //     <h3>{this.state.artist.name}</h3>
  //     <h4>ALBUMS</h4>
  //     <AllAlbums albums={this.state.artistAlbums} />
  //     <h4>SONGS</h4>
  //     <Songs songs={this.state.artistSongs} />
  //   </div>
  //   )
  // }
  render() {

    const artist = this.state.artist; // or however you've named it

    return (
      <HashRouter>
        <div>
          <h3>{artist.name}</h3>

          <ul className="nav nav-tabs">
            <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
            <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
          </ul>

          <Switch>

            <Route exact path="/artists/:artistId/albums" render={() => <AllAlbums albums={this.state.artistAlbums} />} />
            <Route exact path={`/artists/:artistId/songs`} render={() => <Songs songs={this.state.artistSongs} />} />

          </Switch>


        </div>
      </HashRouter>
    );
  }
}
