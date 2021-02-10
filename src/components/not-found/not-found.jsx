import React from 'react';
import Header from '../header/header';

const NotFound = () => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1>Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </main>
    </div>
  );
};

export default NotFound;
