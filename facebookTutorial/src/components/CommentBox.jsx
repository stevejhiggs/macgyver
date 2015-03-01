'use strict';
import React from 'react';
import Request from 'browser-request';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

export default React.createClass({
    loadCommentsFromServer: function() {
        Request({
            url: this.props.url,
            json:true
        }, function(err, response, body) {
            if(err) {
                console.error(err.toString());
            } else {
                this.setState({data: body});
            }
        }.bind(this));
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
});