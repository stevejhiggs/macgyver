import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class CoreLayout extends React.Component {
    constructor() {
        super();
    }

    render() {
        const links = [
            '/',
            '/about'
        ].map(l => <p><Link to={l}>{l}</Link></p>);

        return (
            <div className="page-container">
                <h1>I am the container</h1>
                { links }
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

// connects the component to the flux store
export default connect(state => ({routerState: state.router}))(CoreLayout);
