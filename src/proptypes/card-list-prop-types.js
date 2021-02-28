import PropTypes from "prop-types";
import cardPropTypes from "./card-prop-types";

const cardListPropTypes = PropTypes.arrayOf(
    PropTypes.shape(cardPropTypes)
).isRequired;

export default cardListPropTypes;
