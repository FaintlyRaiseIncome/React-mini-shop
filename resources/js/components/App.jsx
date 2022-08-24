import React from 'react';
import Card from './appList/Card';
import Basket from './shop/Basket';

function App() {

    return (

        <div className="container">
            <div className="row justify-content-center margin_for_shop">
                <Card />
            </div>
            <Basket />
        </div>
    );
}

export default App;