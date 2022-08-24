import React, { Component } from 'react';

class CardGroupItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="swiper-slide"><button onClick={() => { this.props.onClickArrayItem(this.props.data.type) }} >{this.props.data.type}</button></div>
        )
    }
}

export default CardGroupItem;