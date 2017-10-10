import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Sidebar = () => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
        <NavLink  activeClassName="active" to="/albums" >ALBUMS</NavLink>
        </h4>
        <h4>
        <NavLink  activeClassName="active" to="/artists" >ARTISTS</NavLink>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
