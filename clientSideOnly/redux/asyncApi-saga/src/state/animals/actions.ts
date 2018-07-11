
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export interface Animal {
  id: number;
  name: string;
}

export interface LoadAnimalsParams {
  name: string;
}

// tslint:disable-next-line:no-any
export const loadAnimals = actionCreator.async<LoadAnimalsParams, Animal[]>('FETCHANIMALS');
