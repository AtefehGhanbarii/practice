import React, { Component } from 'react';

class Tab extends Component {
    render(){
        const {children} = this.props;
        return (
            <div>
              {children}
            </div>
        );
    }
}

export default Tab;
















