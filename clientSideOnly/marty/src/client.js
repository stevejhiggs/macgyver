import React from 'react';
import Application from './reactApp/app.js';
import Counter from './reactApp/components/counter';

const app = new Application();
const { ApplicationContainer } = require('marty');

React.render((
    <ApplicationContainer app={app}>
        <Counter count={123} />
    </ApplicationContainer>
), document.getElementById('App'));
