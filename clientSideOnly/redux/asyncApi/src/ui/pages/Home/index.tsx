import * as React from 'react';
import './home.css';
import AnimalList from '../../components/AnimalList';

const home = () => (
  <div className="App">
    <h2>Async load with redux</h2>
    <AnimalList/>
  </div>
);

export default home;
