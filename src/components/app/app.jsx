import React from 'react';
import Main from "../main/main";
import PropTypes from 'prop-types';

const App = ({places, cards}) => {
  return (
    <React.Fragment>
      <Main places={places} cards={cards}/>
    </React.Fragment>
  );
};

App.propTypes = {
  places: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
    description: PropTypes.string.isRequired,
    img: PropTypes.shape({
      src: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      alt: PropTypes.string
    })
  })).isRequired,
};

export default App;
