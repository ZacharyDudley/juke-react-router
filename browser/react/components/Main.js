import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import AllArtists from './AllArtists';
import SingleAlbum from './SingleAlbum';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route, Switch } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import NotFound from './NotFound';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/" component={StatefulAlbums} />
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Player />
        </div>
      </HashRouter>
    );
  }
}
