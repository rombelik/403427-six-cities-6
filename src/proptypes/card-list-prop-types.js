import PropTypes from "prop-types";
import cardPropTypes from "./card-prop-types";

const cardListPropTypes = PropTypes.arrayOf(
    cardPropTypes
).isRequired;

export default cardListPropTypes;
