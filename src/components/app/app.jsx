import React from 'react';
import Main from "../main/main";
import PropTypes from 'prop-types';

const App = ({places}) => {
  return (
    <React.Fragment>
      <Main places={places}/>
    </React.Fragment>
  );
};

App.propTypes = {
  places: PropTypes.number.isRequired,
};

export default App;
