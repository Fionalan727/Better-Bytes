import React, { Component } from 'react';




class Nav extends Component {


  render() {
    return (
    <div className="Nav">
      <div>
      <button id="search" variant="raised">Search</button>
      </div>
      <div>
        <input placeholder='Enter the name of the item'/>
      </div>
    </div>
    );
  }
}

export default Nav;

