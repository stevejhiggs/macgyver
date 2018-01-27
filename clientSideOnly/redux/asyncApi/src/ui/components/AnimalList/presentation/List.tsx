import * as React from 'react';
import { Animal } from '../../../../state/animals/reducer';
import { loadAnimalAction } from '../../../../state/animals/actions';

export interface Props { 
  animals: Animal[];
  loadAnimals: typeof loadAnimalAction;
}

export const AnimalListView: React.SFC<Props> = (props: Props) =>
(
  <div>
    <ul>
      {props.animals.map(animal =>
        <li key={animal.id}>{animal.name}</li>
      )}
    </ul>
    <p>
      <button onClick={() => { props.loadAnimals(); }}>get animals</button>
    </p>
  </div>
);
