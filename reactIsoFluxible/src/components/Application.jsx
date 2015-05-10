import React from 'react';
import Nav from './Nav';
import ApplicationStore from '../stores/ApplicationStore';
import {connectToStores, provideContext} from 'fluxible/addons';
import {handleHistory} from 'fluxible-router';

class Application extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidUpdate(prevProps) {
        let newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }
    render() {
        var Handler = this.props.currentRoute.get('handler');
        //render content
        return (
            <div>
                <Nav />
                <Handler />
            </div>
        );
    }
}

Application.contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
};

Application = connectToStores(Application, [ApplicationStore], function (stores, props) {
    return {
        ApplicationStore: stores.ApplicationStore.getState()
    };
});

Application = handleHistory(Application, {enableScroll: false});

Application = provideContext(Application);

export default Application;