import React from 'react';
import PropTypes from 'prop-types';
import {CITIES} from '../../helpers/constants';

export const CitiesList = (props) => {
  const {currentCityName, onSetCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {Object.keys(CITIES).map((key) => (
        <li onClick={() => onSetCity(CITIES[key])} className="locations__item" key={CITIES[key]}>
          <a className={`locations__item-link tabs__item${CITIES[key] === currentCityName ? ` tabs__item--active` : ``}`}>
            <span>{CITIES[key]}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  currentCityName: PropTypes.string.isRequired,
  onSetCity: PropTypes.func.isRequired,
};

export default CitiesList;
