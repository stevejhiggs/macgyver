import React from 'react';
import PropTypes from 'prop-types';

// simple presentational components can just use the simple function syntax
// for components
const apiListView = props => (
  <div>
    <ul>
      {props.animals.animals.map(animal =>
        <li key={animal.id}>{animal.name}</li>
      )}
    </ul>
    <p>
      <button onClick={props.fetchAnimals}>get animals</button>
    </p>
  </div>
);

apiListView.propTypes = {
  fetchAnimals: PropTypes.func.isRequired,
  animals: PropTypes.shape({
    animals: PropTypes.arrayOf({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  })
};

export default apiListView;
