import * as React from 'react';
import Counter from '../components/Counter';

const home = () => (
  <div className="view">
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
