import React from 'react';
import './App.css';
import Counter from './components/Counter';

// as this component does not have state or actions it can be written as a pure function
const app = () => (
  <div className="App">
    <div className="App-header">
      <h2>MacGyver in the house</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      <Counter startVal={5} />
    </p>
  </div>
);

export default app;
