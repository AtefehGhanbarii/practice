import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts, createPost } from '../redux/modules/posts';
import { Link } from 'react-router-dom';
import { Button } from "../components/kit/Button/Button";
import Modal from '../components/kit/modal/Modal';
import { Input } from "../components/kit/Input/Input";
import handleChange from '../components/utils/onChange';

class PostData extends Component {
    state = {
        showAddPostModal: false,
        posts: [],
        titleValue: ''
    };

    componentDidMount() {
        this.props.loadPosts();
    }

    toggleShowPostModal = () => {
        this.setState({ showAddPostModal: !this.state.showAddPostModal })
    };

    handleAddNewPost = () => {
        const newPost = {
            title: this.state.titleValue
        };
        this.props.createPost(newPost)
    };

    render() {
        const { posts, loading, loaded, error } = this.props;
        console.log(posts, 'this is post');
        return (
            <div>
                <Button
                    onClick={this.toggleShowPostModal}
                    title="ADD NEW POST"
                />
                {/*modal add post*/}
                <Modal show={this.state.showAddPostModal} modalClosed={this.toggleShowPostModal}>
                    <span onClick={this.toggleShowPostModal}>close</span>
                    <h4>Add Posts</h4>
                    <Input
                        title="title"
                        name='titleValue'
                        value={this.state.titleValue}
                        onChange={(event) => handleChange(this, event)}
                    />
                    <Button
                        title="ADD"
                        onClick={this.handleAddNewPost}
                    />
                </Modal>
                <h4>POSTS</h4>
                {/*<p>{posts.name}</p>*/}
                {
                    posts && posts.length ? posts.map((post, index) => {
                        return <div key={index}>
                            {/*<p>{post.title}</p>*/}
                            <Link to={`/postss/${post.id}`}>{post.title}</Link>
                        </div>
                    }) : null
                }
            </div>
        );
    }
}

export default connect(state => ({
    posts: state.posts.posts.posts,
    loading: state.posts.posts.loading,
    loaded: state.posts.posts.loaded,
    error: state.posts.posts.error
}), {
    loadPosts,
    createPost
})(PostData);