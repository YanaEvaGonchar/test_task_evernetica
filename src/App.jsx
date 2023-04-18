import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import { CountryDetails } from './components/CountryDetails';
import MainPage from './components/MainPage';

export default function App() {

  return (
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/country/:countryId"  element={<CountryDetails />} />
      </Routes>
  );
};
