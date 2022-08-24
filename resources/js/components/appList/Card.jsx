import axios from 'axios';
import React, { Component, useState } from 'react';
//import CardGroup from './filters/CardGroup';
import CardItems from './CardItems';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            categories: [],
            filter: [],
        }

        this.onClickArrayItem = this.onClickArrayItem.bind(this);
    }

    componentDidMount() {
        this.getTableList();
    }

    getTableList = () => {
        let self = this;

        axios.get('/get/table/list').then(function (response) {
            self.setState({
                products: response.data,
                filter: response.data,
            });
        });

        axios.get('/get/table/list/group').then(function (response) {
            console.log(response.data);
            self.setState({
                categories: response.data,
            });
        });
    }

    onClickArrayItem = (type) => {
        this.setState({
            filter: this.state.products.filter(el => el.type === type),
        });
    }

    genMatrix = () =>
        this.state.categories.map((x, i) => {
            let callback = () => this.onClickArrayItem(x.type);
            let autocompleted = i == 0 ? "on" : 'off';
            let classActive = i == 0 ? "btn active_radio" : "btn no_active_radio";
            return <div className="swiper-slide"><label id={i} className={classActive} autoComplete={autocompleted} onClick={callback} htmlFor={i}>{x.type}</label></div >;
        });

    render() {
        return (
            <div className="container">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {this.genMatrix()}
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className="row">
                    <CardItems product={this.state.filter} />
                </div>
            </div>
        );
    }
}

export default Card;