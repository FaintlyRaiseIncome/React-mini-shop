import React, { Component } from 'react';
import { CardItem } from './CardItem';

export default class CardItems extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product_count: [],
        }
    }

    render() {
        return (
            this.props.product.map(function(x, i){
                return <CardItem key={i} data={x} />
            })
        )
    }
}