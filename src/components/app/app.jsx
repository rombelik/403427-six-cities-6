import React from 'react';
import Main from "../main/main";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import NotFound from "../not-found/not-found";
import SignIn from "../sign-in/sign-in";
import cardListPropTypes from "../../proptypes/card-list-prop-types";

const App = ({cards}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main cards={cards}/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites cards={cards}/>
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
  cards: cardListPropTypes
};

export default App;
