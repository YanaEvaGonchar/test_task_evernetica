import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { SearchBar } from './SearchBar';
import { CountryList } from './CountryList';
import { getAllCountries, searchCountry } from '../redux/actions/countriesActions';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const timeout = useRef(null);
  const {filteredCountries, selectedCountries, allCountries } = useSelector(({ countries }) => countries);

  useEffect(() => {
    if (allCountries?.length > 0) return 

    dispatch(getAllCountries());
  }, [dispatch, allCountries]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    dispatch(searchCountry(event.target.value))

    clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
      dispatch(searchCountry(event.target.value))
    }, 500);
  };

  const handleReset = () => {
    setSearchValue('');
    dispatch(searchCountry(''));
  };

  return (
    <>
      <SearchBar value={searchValue} onChange={handleSearchChange} onReset={handleReset} />
      <CountryList countries={filteredCountries} selectedCountries={selectedCountries} />
    </>
  );
};

export default MainPage;