import React, { Component } from 'react';
import { Button } from '../components/kit/Button/Button.js';
import styled from 'styled-components';

const Div = styled.div`
      background-color: #eee;
     text-align: center;
     padding: 92px 10px;
    `;

class Counter extends Component {
    state = {
        count: 0,
        showOption: false,
        selectedOption: null,
    };

    handleMultiIncrease = () => {
        const length = this.state.count.toString().length;
        console.log(length);
        let stepper = '1';
        for (let i = 1; i <= length - 1; i++) {
            stepper = `${stepper}0`;
        }
        console.log(stepper, 'this is stepper');
        return Number(stepper);
    };

    handleIncrease = () => {
        this.setState({
            count: this.state.count + Number(this.handleMultiIncrease())
        });
    };

    handleDecrease = () => {
        this.setState({
            count: this.state.count - Number(this.handleMultiIncrease())
        })
    };

    render() {
        return (
            <Div>
                <h4>Current count: {this.state.count}</h4>
                <hr/>
                <Button
                    title="+"
                    type="primary"
                    loading
                    onClick={this.handleIncrease}
                />
                <Button title="-"
                        onClick={this.handleDecrease}
                        disabled={this.state.count === 0}
                />
            </Div>
        );
    }
}


export default Counter;
