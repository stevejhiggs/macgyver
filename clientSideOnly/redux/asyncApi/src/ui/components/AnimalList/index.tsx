import * as AnimalActions from '../../../state/animals/actions';
import { AnimalListView } from './presentation/List';
import { bindActionCreators, connect, RootState, Dispatch } from '../../../state';

type ConnectedProps = {}; 

const mapStateToProps = (state: RootState, ownProps: ConnectedProps) => ({
  animals: state.animals
});

const loadAnimals = () => {
  return (dispatch: Dispatch) => AnimalActions.loadAnimalWorker(dispatch, {})
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  loadAnimals: loadAnimals
}, dispatch);

// connects the component to the flux store
export default connect(mapStateToProps, mapDispatchToProps)(AnimalListView);
