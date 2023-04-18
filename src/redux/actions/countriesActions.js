import { COUNTRIES, SELECTED_COUNTRY, DELETED_COUNTRY, DRAG_DROP_COUNTRY, SEARCH_COUNTRY } from "../types";
import axios from "axios";
import { actionCreator } from "../actionCreator";

export const getAllCountriesAction = actionCreator(
  COUNTRIES.GET_ALL_COUNTRIES
);

export const getAllCountries = () => {
  return async dispatch => {
    dispatch(getAllCountriesAction.started());
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        dispatch(getAllCountriesAction.done(res.data));
      })
      .catch(error => dispatch(getAllCountriesAction.failed(error)));
  };
};

export const selectedCountry = (data) => ({
  type: SELECTED_COUNTRY, 
  payload: data,
});

export const deletedCountry = (data) => ({
  type: DELETED_COUNTRY, 
  payload: data,
});

export const dragDropCountry = (data) => ({
  type: DRAG_DROP_COUNTRY, 
  payload: data,
});

export const searchCountry = (data) => ({
  type: SEARCH_COUNTRY, 
  payload: data,
});
