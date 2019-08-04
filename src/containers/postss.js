import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../redux/modules/posts';
import { Link } from 'react-router-dom';

class Posts extends Component {
    componentDidMount() {
        this.props.loadPosts();
    }

    render() {
        const { posts, loading, loaded, error } = this.props;
        console.log(posts, 'this is error');
        return (
            <div>
                <h4>POSTS</h4>
                {
                    posts && posts.length ? posts.map((user, index) => {
                        console.log(user, 'this is user');
                        return <div key={index}>
                            <p>{user.name}</p>
                            <Link to={`/api/${user.id}`}>{user.name}</Link>
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
    loadPosts
})(Posts);