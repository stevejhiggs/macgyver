'use strict';
import React from 'react';
import Comment from './Comment.jsx';

export default class CommentList extends React.Component {
    render() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment key={comment.id} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}