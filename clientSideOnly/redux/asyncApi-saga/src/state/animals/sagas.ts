import { takeLatest, call } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { loadAnimals } from './actions';
import axios from 'axios';

export interface Animal {
  id: number;
  name: string;
}

export interface LoadAnimalsParams {
  name: string;
}

const fetchAnimals = bindAsyncAction(loadAnimals)(
  function* () {
    const response = yield call(() => {
      return axios({
        method: 'get',
        url: '/api/animals'
      });
    });
    return response.data;
  }
); 

export function* animalWatcherSaga() {
  yield takeLatest(loadAnimals.type, fetchAnimals);
}
