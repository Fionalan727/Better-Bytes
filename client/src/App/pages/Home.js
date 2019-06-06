import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Rellax from 'rellax';
import '../App.css';

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
        <button className="getStarted btn btn-outline-info " variant="raised">
            Let's Get Started
        </button>

      </Link>
      
      <section>
        <h1> Better Bytes </h1>
        <p> Better Bytes, Better Life. DERP</p>
        <img src="/image/parallax/chipmunk.png" alt="" className="chipmunk rellax" data-rellax-percentage="2.6" data-rellax-speed="10"></img>
        <img src="/image/parallax/path.png" alt="" className="path rellax" data-rellax-speed="-2" data-rellax-percentage="-.3"></img>
        <img src="/image/parallax/clearing.png" alt="" className="clearing rellax" data-rellax-speed="6" data-rellax-percentage="0.7"></img>
      </section>
      
      <section className="section2">
        <h2> Save on time. Save on money. Save on waste</h2>
        <p> Discover new recipes, impress your friends.</p>
      </section>

    </div>
    );
  }
}
export default Home;