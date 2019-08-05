import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadPost } from '../redux/modules/posts';
import { Button } from "../components/kit/Button/Button";

class PostItem extends Component {
    componentDidMount() {
        this.props.loadPost(this.props.match.params.id);
    }

    deletePost = () => {

    };

    editPost = () => {

    };

    render() {
        console.log(this.props);
        return (
            <div>
                <Button
                    onClick={this.deletePost}
                    title="DELET"
                />
                <Button
                    onClick={this.editPost}
                    title="EDIT"
                />
                <h4>Post Item

                <p>{this.props.post.title}</p>
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    post: state.posts.post.postData,
    loading: state.posts.post.loading,
    loaded: state.posts.post.loaded,
    error: state.posts.post.error
}), {
    loadPost
})(PostItem));