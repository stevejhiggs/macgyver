import React from 'react';
import Counter from './Counter';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Counter count="55" />
            </div>
        );
    }
}