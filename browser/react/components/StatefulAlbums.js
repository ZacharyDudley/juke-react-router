import React, {Component} from 'react';
import {AllAlbums} from './AllAlbums';
import axios from 'axios';

export default class StatefulAlbums extends Component {
  constructor() {
    super();

    this.state = {
      albums: []
    }
  }

  componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums })
      })
      .catch(error => this.props.history.push("/NotFound"));
  }

  render() {
    return <AllAlbums albums={this.state.albums} />
  }

}

