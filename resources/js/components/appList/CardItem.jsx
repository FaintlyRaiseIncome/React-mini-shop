import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';

export class CardItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='col-xl-2 col-md-3 col-4 d-flex flex-column align-items-center mt-4'>
                <div className="card_image"><img src={this.props.data.image}></img></div>
                <div className="card_title my-2">{this.props.data.title}</div>
                <div className="card_pay m-auto">{this.props.data.pay}руб.</div>
                <TableActionButtons eachRowId={this.props.data.id} />
            </div>
        )
    }
}