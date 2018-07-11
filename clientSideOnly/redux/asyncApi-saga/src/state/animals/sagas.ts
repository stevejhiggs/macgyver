import { takeLatest, call } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga-extended';
import { loadAnimals, LoadAnimalsParams } from './actions';
import axios from 'axios';
import { Action } from 'typescript-fsa';

const fetchAnimals = bindAsyncAction(loadAnimals)(
  function* (action: Action<LoadAnimalsParams>) {
    // tslint:disable-next-line:no-console
    console.log(action.payload.name);
    const response = yield call(() => {
      // tslint:disable-next-line:no-console
      return axios({
        method: 'get',
        url: '/api/animals'
      });
    });
    return response.data;
  }
); 

export function* animalWatcherSaga() {
  // tslint:disable-next-line:no-any
  yield takeLatest(loadAnimals.started, fetchAnimals);
}
