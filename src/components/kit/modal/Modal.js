import React, { Component } from 'react';
import Backdrop from '../backdrop/backdrop';
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    border-radius: 10px;
    transition: all 0.3s ease-out;
    
@media (min-width: 600px) {
        width: 480px;
        left: calc(50% - 250px);
        padding: 24px 17px;
}
`;

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    render() {
        return (
            <div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <Div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </Div>
            </div>
        )
    }
}


export default Modal;