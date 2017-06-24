import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import configureStore from '../configureStore';

const store = configureStore();

const app = () => (
  <Provider store={store}>
  <div className="App">
    <div className="App-header">
      <h2>Split component with redux state</h2>
    </div>
    <Counter/>
  </div>
  </Provider>
);


export default app;
