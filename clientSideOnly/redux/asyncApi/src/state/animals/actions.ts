import actionCreatorFactory from 'typescript-fsa';
import { bindThunkAction, thunkToAction } from 'typescript-fsa-redux-thunk';
import { Animal } from './reducer';

const actionCreator = actionCreatorFactory();

export interface LoadAnimalsParams {
  name: string;
}

export const loadAnimals = actionCreator.async<LoadAnimalsParams, Animal[], {}>('ANIMALS_LOADING');
export const loadAnimalAction = thunkToAction(bindThunkAction(
  loadAnimals,
  async(params): Promise<Animal[]> => {
    const res = await fetch('/api/animals');
    if (res.status >= 400) {
      throw new Error(`Server error: ${res.status} ${res.statusText}`);
    }
  
    return await res.json() as Animal[];
  }
));
