import fetch from 'isomorphic-fetch';

export const REQUEST_ANIMALS = 'REQUEST_ANIMALS';
export const RECEIVE_ANIMALS = 'RECEIVE_ANIMALS';

function requestAnimals() {
  return {
    type: REQUEST_ANIMALS
  };
}

function receiveAnimals(response) {
  return {
    type: RECEIVE_ANIMALS,
    animals: response,
    receivedAt: Date.now()
  };
}

export function fetchAnimals() {
  return dispatch => {
    dispatch(requestAnimals());
    return fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(json => dispatch(receiveAnimals(json)));
  };
}
