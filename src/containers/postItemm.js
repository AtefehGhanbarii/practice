import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadPost, deletePost } from '../redux/modules/posts';
import { Button } from "../components/kit/Button/Button";

class PostItem extends Component {
    state = {
        delItem: []
    };

    componentDidMount() {
        this.props.loadPost(this.props.match.params.id);
    }

    handleDelete = () => {
        this.props.deletePost(this.props.match.params.id);
    };

    render() {
        console.log(this.props, 'this is props of post item');
        return (
            <div>
                <Button
                    onClick={this.handleDelete}
                    title="Delete"
                />
                <Button
                    onClick={this.handleEdit}
                    title="Edit"
                />
                <h4>Post Item Data</h4>
                <p>{this.props.post.title}</p>
            </div>
        );
    }
}


export default withRouter(connect(state => ({
    post: state.posts.post.postData,
    loading: state.posts.post.loading,
    loaded: state.posts.post.loaded,
    error: state.posts.post.error
}), {
    loadPost,
    deletePost
})(PostItem));