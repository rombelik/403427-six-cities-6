import React from 'react';
import cardPropTypes from "../../proptypes/card-proptypes";
import FavoriteCard from "../favorite-card/favorite-card";

const FavoritesByCity = ({cards, city}) => {
  return (
    <>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cards.map((card) => {
          return <FavoriteCard key={card.id} card={card} />;
        })}
      </div>
    </>
  );
};

FavoritesByCity.propTypes = cardPropTypes;

export default FavoritesByCity;
