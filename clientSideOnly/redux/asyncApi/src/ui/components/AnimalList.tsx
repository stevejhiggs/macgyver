import * as React from 'react';
import { Animal } from '../../state/animals/reducer';
import { loadAnimals } from '../../state/animals/actions';
import { connect, RootState, Dispatch } from '../../state';

interface PropsFromState {
  animals: Animal[];
}

interface PropsFromDispatch {
  loadAnimals: () => void;
}

const AnimalList: React.SFC<PropsFromState & PropsFromDispatch> = (props) =>
(
  <div>
    <ul>
      {props.animals.map(animal =>
        <li key={animal.id}>{animal.name}</li>
      )}
    </ul>
    <p>
      <button onClick={props.loadAnimals}>get animals</button>
    </p>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  animals: state.animals
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadAnimals: () => { 
    return dispatch(loadAnimals({ name: 'bob' })); 
  }
});

// connects the component to the flux store
export default connect<PropsFromState, PropsFromDispatch>(mapStateToProps, mapDispatchToProps)(AnimalList);
