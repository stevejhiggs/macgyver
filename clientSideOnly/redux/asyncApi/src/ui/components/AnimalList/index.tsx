import { loadAnimalAction } from '../../../state/animals/actions';
import { State } from '../../../state/animals/reducer';
import { AnimalListView } from './presentation/List';
import { bindActionCreators, connect, RootState, Dispatch } from '../../../state';

interface StateFromProps {
  animals: State;
}

interface DispatchFromProps {
  loadAnimals: () => void;
}

const mapStateToProps = (state: RootState) => ({
  animals: state.animals
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    loadAnimals: loadAnimalAction
  }, 
  dispatch
);

// connects the component to the flux store
export default connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(AnimalListView);
