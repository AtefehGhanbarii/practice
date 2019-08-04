import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadComments } from '../redux/modules/comments';

class Comments extends Component {
    componentDidMount() {
        this.props.loadComments();
    }

    render() {
        const { comments, loading, loaded, error } = this.props;
        console.log(comments, 'this is meeeeee');
        return (
            <div>
                <h4>COMMENTS</h4>
                {
                    loading && !loaded ? 'loadingggggggggggg' : null
                }
                {
                    comments && comments.length ? comments.map((comment, index) => {
                        console.log(comments);
                        return <div key={index}>
                            <p>{comment.name}</p>

                        </div>
                    }) : null
                }
            </div>
        );
    }
}

export default connect(state => ({
    comments: state.comments.comments,
    loading: state.comments.loading,
    loaded: state.comments.loaded,
    error: state.comments.error
}), {
    loadComments
})(Comments)













