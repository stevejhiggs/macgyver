import * as React from 'react';
import './home.css';
import Counter from '../../components/Counter';

const home = () => (
  <div className="App">
    <div className="App-header">
      <h2>Split component with redux state</h2>
    </div>
    <Counter startVal={5}/>
  </div>
);

export default home;
