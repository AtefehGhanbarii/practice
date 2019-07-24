import React, { Component } from 'react';

export default class Tab extends Component {
    componentWillUnmount() {
        console.log('this is componnetWillUnmount');
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                {children}
            </div>
        );
    }
}
