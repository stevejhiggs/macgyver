import * as React from 'react';
import { Subscribe } from 'unstated';
import AnimalContainer from '../../state/AnimalContainer';

interface Props {
  message: string;
}

const AnimalList: React.SFC<Props> = (props) => (
  <Subscribe to={[AnimalContainer]}>
    {(animalState: AnimalContainer) => (
      <div>
      <div>{props.message}</div>
      <ul>
        {animalState.state.animals.map(animal =>
          <li key={animal.id}>{animal.name}</li>
        )}
      </ul>
      <p>
        <button onClick={animalState.loadAnimals}>get animals</button>
      </p>
    </div>
    )}
  </Subscribe>
);

export default AnimalList;
