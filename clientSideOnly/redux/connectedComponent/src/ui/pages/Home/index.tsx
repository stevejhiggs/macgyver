import * as React from 'react';
import './home.css';
import Counter from '../../components/Counter';

const home = () => (
  <div className="App">
    <div className="App-header">
      <h2>Split component with redux state</h2>
    </div>
    <h3>increment by 1</h3>
    <Counter incrementBy={1}/>
    <p> 
      we can add another counter and they both work because they are linked to global state
    </p>
    <h3>increment by 5</h3>
    <Counter incrementBy={5}/>
  </div>
);

export default home;
