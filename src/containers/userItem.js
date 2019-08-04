import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadUser } from '../redux/modules/users';

class UserItem extends Component {
    componentDidMount() {
        this.props.loadUser(this.props.match.params.id);
    }

    render() {
        console.log(this.props.user);
        return (
            <div>
                <h4>Post Item</h4>
            <p>{this.props.user.name}</p>
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    user: state.users.user.user,
    loading: state.users.user.loading,
    loaded: state.users.user.loaded,
    error: state.users.user.error
}), {
    loadUser
})(UserItem));