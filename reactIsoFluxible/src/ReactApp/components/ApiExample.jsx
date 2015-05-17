import React from 'react';
import Stories from './Stories';

export default class ApiExample extends React.Component {
    render() {
        return (
            <div>
                <h1>I'm an example of getting data from an api</h1>
                <Stories/>
            </div>
        );
    }
}