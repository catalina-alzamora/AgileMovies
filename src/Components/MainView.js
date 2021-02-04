import React, { Component } from 'react';
import Movie from '../Components/movieUnit.js';
import Navbar from '../Components/navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";


class MainView extends Component {
  render() {
    return (
      <div className='mainV'>  
      <Navbar/>     
        <div className='filmsSection'>
          <h1>Películas de estreno</h1>
          <Movie/>         
          <h1>Películas más populares</h1>
        </div>

      </div>
    )

  }
}
export default MainView;

