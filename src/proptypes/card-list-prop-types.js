import PropTypes from "prop-types";
import cardPropTypes from "./card-prop-types";

const cardListPropTypes = {
  cards: PropTypes.arrayOf(
      PropTypes.arrayOf(cardPropTypes)
  ).isRequired,
  img: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string
  }),
};

export default cardListPropTypes;
