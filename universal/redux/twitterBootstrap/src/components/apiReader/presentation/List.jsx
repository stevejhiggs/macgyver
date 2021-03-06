import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

// simple presentational components can just use the simple function syntax
// for components
const apiListView = props => (
  <div>
    <ListGroup>
      {props.animals.animals.map(animal =>
        <ListGroupItem key={animal.id}>{animal.name}</ListGroupItem>
      )}
    </ListGroup>
    <p>
      <Button bsStyle="primary" onClick={props.fetchAnimals}>get animals</Button>
    </p>
  </div>
);

apiListView.propTypes = {
  fetchAnimals: PropTypes.func.isRequired,
  animals: React.PropTypes.shape({
    animals: React.PropTypes.array({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired
    })
  })
};

export default apiListView;
