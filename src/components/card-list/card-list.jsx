import React, {useState} from 'react';
import Card from "../card/card";
import cardPropTypes from "../../proptypes/card-proptypes";

const CardList = ({cards}) => {
  const [currentCardId, setCurrentCardId] = useState(0);

  const mouseHandler = (id) => {
    setCurrentCardId(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((item) => <Card card={item} key={item.id} mouseHandler={mouseHandler}/>)}
    </div>
  );
};

CardList.propTypes = cardPropTypes;


export default CardList;
