import React from 'react';
import FavoritesByCity from "../favorites-by-city/favorites-by-city";
import Footer from "../footer/footer";
import cardListPropTypes from "../../proptypes/card-list-prop-types";

const Favorites = ({cards}) => {
  const favoritesCards = cards.filter((card) => card.isFavorite);
  const cities = [...new Set(favoritesCards.map((card) => card.city.name))];
  return (
    <div>
      <div className="page">
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city) => {
                  return <li key={city} className="favorites__locations-items">{
                    <FavoritesByCity cards={favoritesCards.filter((card) => card.city.name === city)} city={city}/>
                  }</li>;
                })}
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

Favorites.propTypes = cardListPropTypes;

export default Favorites;
