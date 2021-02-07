import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES: 3155,
  CARDS: [
    {
      id: 1,
      type: `Apartment`,
      rating: 80,
      price: 1500,
      isPremium: true,
      description: `Canal View Prinsengracht`,
      img: {
        src: `img/apartment-01.jpg`,
        width: 260,
        height: 200,
        alt: `Place image`
      }
    }, {
      id: 2,
      type: `Apartment`,
      rating: 60,
      price: 1500,
      isPremium: true,
      description: `Canal View Prinsengracht`,
      img: {
        src: `img/apartment-01.jpg`,
        width: 260,
        height: 200,
        alt: `Place image`
      }
    }, {
      id: 3,
      type: `Apartment`,
      rating: 40,
      price: 100,
      isPremium: false,
      description: `Canal View Prinsengracht`,
      img: {
        src: `img/apartment-01.jpg`,
        width: 260,
        height: 200,
        alt: `Place image`
      }
    }, {
      id: 4,
      type: `Apartment`,
      rating: 80,
      price: 1500,
      isPremium: false,
      description: `Canal View Prinsengracht`,
      img: {
        src: `img/apartment-01.jpg`,
        width: 260,
        height: 200,
        alt: `Place image`
      }
    }, {
      id: 5,
      type: `Apartment`,
      rating: 80,
      price: 1500,
      isPremium: true,
      description: `Canal View Prinsengracht`,
      img: {
        src: `img/apartment-01.jpg`,
        width: 260,
        height: 200,
        alt: `Place image`
      }
    }, {
      id: 6,
      type: `Apartment`,
      rating: 80,
      price: 1500,
      isPremium: true,
      description: `Canal View Prinsengracht`,
      img: {
        src: `img/apartment-01.jpg`,
        width: 260,
        height: 200,
        alt: `Place image`
      }
    }
  ]
};

ReactDOM.render(
    <App places={Setting.PLACES} cards={Setting.CARDS}/>,
    document.querySelector(`#root`)
);
