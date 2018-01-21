import actionCreatorFactory from 'typescript-fsa';
import wrapAsyncWorker from '../wrapAsyncWorker';
import { Animal } from './reducer';

const actionCreator = actionCreatorFactory();

export const loadAnimals = actionCreator.async<{}, Animal[], {}>('ANIMALS_LOADING');
export const loadAnimalWorker = wrapAsyncWorker(loadAnimals, async(): Promise<Animal[]> => {
  const res = await fetch('/api/animals');
  if (res.status >= 400) {
    throw new Error(`Server error: ${res.status} ${res.statusText}`);
  }
 
  return await res.json();
});
