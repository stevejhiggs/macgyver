
import { promiseAction } from '../actionCreator';
import { Animal } from './reducer';

export interface LoadAnimalsParams {
  name: string;
}

export const loadAnimals = promiseAction('ANIMALS2_LOADING', async (params: LoadAnimalsParams): Promise<Animal[]> => {
  const res = await fetch('/api/animals');
  if (res.status >= 400) {
    throw new Error(`Server error: ${res.status} ${res.statusText}`);
  }
  
  return await res.json() as Animal[];
});
