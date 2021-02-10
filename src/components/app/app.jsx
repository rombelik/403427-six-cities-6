import React from 'react';
import Main from "../main/main";
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import NotFound from "../not-found/not-found";
import SignIn from "../sign-in/sign-in";

const App = ({places, cards}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main places={places} cards={cards}/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
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
