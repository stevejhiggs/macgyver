
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export interface Animal {
  id: number;
  name: string;
}

// tslint:disable-next-line:no-any
export const loadAnimals = actionCreator.async<any, Animal[]>('FETCHANIMALS');
