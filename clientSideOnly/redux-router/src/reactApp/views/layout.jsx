import React from 'react';

class CoreLayout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="page-container">
                <h1>I am the container</h1>
                <div className="view-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

CoreLayout.propTypes = {
    children: React.PropTypes.node.isRequired
};

export default CoreLayout;