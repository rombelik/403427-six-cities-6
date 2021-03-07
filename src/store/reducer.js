import {ActionType} from './actions';
import OFFERS from '../mocks/offers';
import {CITIES} from "../helpers/constants";

const initialState = {
  currentCityName: CITIES.PARIS,
  offers: OFFERS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        currentCityName: action.payload,
      };
    case ActionType.SET_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
