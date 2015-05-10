import React from 'react';
import Counter from './Counter';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Counter count="55" />
            </div>
        );
    }
}

export default Home;