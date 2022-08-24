import axios from 'axios';
import React, { Component } from 'react';
import { render } from 'react-dom';

class Basket extends Component {
    render() {
        return (
            <button className="basket d-flex">
                <span className='m-auto'>Корзина (0) Итого: руб.</span>
            </button>
        );
    }
}

export default Basket;