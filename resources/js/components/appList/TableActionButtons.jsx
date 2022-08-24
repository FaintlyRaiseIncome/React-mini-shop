import React, { Component } from 'react';

class TableActionButtons extends Component {

    constructor(props) {
        super(props);
    }

    state = { value: 0 };

    increment = () => {
        this.setState(prevState => ({
            value: prevState.value + 1
        }));
    };

    decrement = () => {
        this.setState(prevState => ({
            value: Math.max(prevState.value - 1, 0)
        }));
    };

    render() {
        return (
            <div className="card_button mt-2 d-flex w-100">
                <div className="btn-group w-100" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-danger w-25" onClick={this.decrement}>-</button>
                    <button className="btn btn-default w-50" disabled>{this.state.value}</button>
                    <button type="button" className="btn btn-success w-25" onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default TableActionButtons;