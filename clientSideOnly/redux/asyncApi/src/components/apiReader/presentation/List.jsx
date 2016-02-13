import React, { PropTypes } from 'react';

// simple presentational components can just use the simple function syntax
// for components
const apiListView = (props) => (
  <div>
    <ul>
      {props.animals.animals.map((animal, i) =>
        <li key={animal.id}>{animal.name}</li>
      )}
    </ul>
    <p>
      <button onClick={ props.fetchAnimals }>get animals</button>
    </p>
  </div>
);

apiListView.propTypes = {
  fetchAnimals: PropTypes.func.isRequired,
  animals: PropTypes.object.isRequired
};

export default apiListView;
