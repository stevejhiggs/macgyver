import * as AnimalActions from '../../../state/animals/actions';
import { AnimalListView } from './presentation/List';
import { bindActionCreators, connect, RootState, Dispatch } from '../../../state';

type ConnectedProps = {}; 

const mapStateToProps = (state: RootState, ownProps: ConnectedProps) => ({
  animals: state.animals
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  loadAnimals: () => AnimalActions.loadAnimalWorker(dispatch, {})
}, dispatch);

// connects the component to the flux store
export default connect(mapStateToProps, mapDispatchToProps)(AnimalListView);
