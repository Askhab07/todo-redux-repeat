import './app.css';
import React from 'react';
import Main from './page/Main';
import Header from './layouts/Header';

const App = () => {
  return (
    <div className="font-['Inter']">
      <Header />
      <Main />
    </div>
  );
};

export default App;