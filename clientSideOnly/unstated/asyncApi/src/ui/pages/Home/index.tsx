import * as React from 'react';
import './home.css';
import AnimalList from '../../components/AnimalList';

const home = () => (
  <div className="App">
    <h2>Async load with unstated</h2>
    <AnimalList message="bob" />
  </div>
);

export default home;
