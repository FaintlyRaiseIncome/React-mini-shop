import React, { Component } from 'react';
import CardGroupItem from './CardGroupItem';

class CardGroup extends Component {
    constructor(props) {
        super(props);
    }

    makeSwiperSlide = () => (
        this.props.category.map((str, idx) => {
            let callback = () => this.props.onClickArrayItem(str.type);
            return <button onClick={callback} className="button_category" key={idx}>{str.type}</button>
        })
    )

    render() {
        return (
            <div className="">
                {this.makeSwiperSlide()}
            </div>
        )
    }
}

export default CardGroup;