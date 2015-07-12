import React from 'react';
import {NavLink} from 'fluxible-router';

export default class Nav extends React.Component {
    render() {
        return (
            <ul className="pure-menu pure-menu-open pure-menu-horizontal">
                <li><NavLink routeName="home" activeStyle={{backgroundColor: '#ccc'}}>Home</NavLink></li>
                <li><NavLink routeName="about" activeStyle={{backgroundColor: '#ccc'}}>About</NavLink></li>
                <li><NavLink routeName="apiExample" activeStyle={{backgroundColor: '#ccc'}}>Api Example</NavLink></li>
            </ul>
        );
    }
}