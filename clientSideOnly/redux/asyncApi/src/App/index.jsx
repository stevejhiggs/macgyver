import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ApiReader from './components/ApiReader';
import configureStore from '../configureStore';

const store = configureStore();

const app = () => (
  <Provider store={store}>
  <div className="App">
    <div className="App-header">
      <h2>redux app that calls an async api</h2>
    </div>
    <ApiReader/>
  </div>
  </Provider>
);


export default app;
