import React from 'react';
import {Route, Routes as Router } from 'react-router-dom';
import Main from '../views/Main';


const AppRoutes = () => {
  return (
    <Router>
      <Route path="/" element={<Main />} />
    </Router>
  );
};

export default AppRoutes;
