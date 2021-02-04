import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES: 3155
};

ReactDOM.render(
    <App places={Setting.PLACES}/>,
    document.querySelector(`#root`)
);
