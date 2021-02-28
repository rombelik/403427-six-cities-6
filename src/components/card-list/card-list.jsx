import React, {useState} from 'react';
import Card from "../card/card";
import cardListPropTypes from "../../proptypes/card-list-prop-types";

const CardList = ({cards}) => {
  const setCurrentCardId = useState(0)[1];

  const mouseHandler = (id) => {
    setCurrentCardId(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((item) => <Card
        id={item.id}
        rating={item.rating}
        description={item.description}
        type={item.type}
        isPremium={item.isPremium}
        key={item.id}
        mouseHandler={mouseHandler}/>)}
    </div>
  );
};

CardList.propTypes = {
  cards: cardListPropTypes
};


export default CardList;
