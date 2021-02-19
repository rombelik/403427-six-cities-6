import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import OFFERS from '/src/mocks/offers';

ReactDOM.render(
    <App cards={OFFERS}/>,
    document.querySelector(`#root`)
);
