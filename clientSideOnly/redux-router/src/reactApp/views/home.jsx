import React from 'react';
import { Link } from 'react-router';
import Counter from '../components/counter';

export default class AboutView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="view view--home">
                <h1>This is the home view</h1>
                <Link to="/about">about</Link>
                <Counter/>
            </div>
        );
    }
}