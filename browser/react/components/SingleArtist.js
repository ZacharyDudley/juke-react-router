import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class SingleArtists extends Component {
  constructor() {
    super();
    this.state = {
      artist: {},
      artistAlbums: [],
      artistSongs: []
    }
  }

  componentDidMount () {
    Promise.all([
    axios.get(`/api/artists/${this.props.match.params.artistId}`),
    axios.get(`/api/artists/${this.props.match.params.artistId}/albums`),
    axios.get(`/api/artists/${this.props.match.params.artistId}/songs`)])
      .then(res => {
        return res.map(result => result.data)
      })
      .then(data => {
        this.setState({ artist: data[0], artistAlbums: data[1], artistSongs: data[2] })
      });
    }

    render() {
      return (
      <div>
      <h3>{this.state.artist.name}</h3>
      <h4>{this.state.artistAlbums.join(' ')}</h4>
      <h4>SONGS</h4>
    </div>
    )
  }
}
