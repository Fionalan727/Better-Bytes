import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rellax from 'rellax';

class Home extends Component {

  componentDidMount (){
    this.rellax = new Rellax('.rellax')
  }

  render() {
    
    // var rellax = new Rellax('.rellax');
    
    return (
      <div className="App"> 
      {/* Link to List.js */}
      <Link to={'./recipe'}>
        <button className="getStarted" variant="raised">
            Let's Get Started
        </button>
      </Link>

      <section>
        <img src="/image/parallax/chipmunk.png" className="chipmunk rellax" data-rellax-percentage="2.5" data-rellax-speed="10"></img>
        <img src="/image/parallax/path.png" className="path rellax" data-rellax-speed="-2" data-rellax-percentage="-.3"></img>
        <img src="/image/parallax/clearing.png" className="clearing rellax" data-rellax-speed="6" data-rellax-percentage="0.7"></img>
      </section>
      
    </div>
    );
  }
}
export default Home;