import React from 'react';
import PropTypes from "prop-types";

const Article = ({card}) => {
  return (
    <div>
      <article className="cities__place-card place-card">
        {card.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src="img/apartment-01.jpg" width={260} height={200} alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{card.price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${card.rating}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{card.description}</a>
          </h2>
          <p className="place-card__type">{card.type}</p>
        </div>
      </article>
    </div>
  );
};

Article.propTypes = {
  card: PropTypes.shape({
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
  }).isRequired
};

export default Article;
