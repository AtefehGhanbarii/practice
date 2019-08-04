import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../redux/modules/users';
import { Link } from 'react-router-dom';

class Users extends Component {
    componentDidMount() {
        this.props.loadUsers();
    }

    render() {
        const { users, loading, loaded, error } = this.props;
        console.log(users, 'this is error');
        return (
            <div>
                <h4>USERS</h4>
                {
                    users && users.length ? users.map((user, index) => {
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
    users: state.users.users.users,
    loading: state.users.users.loading,
    loaded: state.users.users.loaded,
    error: state.users.users.error
}), {
    loadUsers
})(Users);