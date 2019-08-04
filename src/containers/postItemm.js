import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadPost } from '../redux/modules/posts';

class PostItem extends Component {
    componentDidMount() {
        this.props.loadPost(this.props.match.params.id);
    }

    render() {
        console.log(this.props.post);
        return (
            <div>
                <h4>Post Item</h4>
                <p>{this.props.post.name}</p>
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    post: state.posts.post.post,
    loading: state.posts.post.loading,
    loaded: state.posts.post.loaded,
    error: state.posts.post.error
}), {
    loadPost
})(PostItem));