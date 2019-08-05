import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increament, decreament, resetCounter } from '../redux/modules/counter';
import { Button } from "../components/kit/Button/Button";

class ReduxCounter extends Component {
    render() {
        console.log(this.props);
        const {
            count,
            increament,
            decreament,
            resetCounter
        } = this.props;
        return (
            <div>
                <h4>counter</h4>
                <p>{count}</p>
                <Button
                    title="+"
                    onClick={increament}
                />
                <Button
                    title="-"
                    onClick={decreament}
                />
                <Button
                    title="RESET"
                    onClick={resetCounter}
                />
            </div>
        )
    }
}

export default connect(state => ({
    count: state.counter.count,
}), {
    increament,
    decreament,
    resetCounter
})(ReduxCounter);