import { generateActionTypes } from "./generateActionTypes";

export const COUNTRIES = {
  GET_ALL_COUNTRIES: generateActionTypes("GET_ALL_COUNTRIES")
};

export const SELECTED_COUNTRY = "SELECTED_COUNTRY";

export const DELETED_COUNTRY = "DELETED_COUNTRY";

export const DRAG_DROP_COUNTRY = "DRAG_DROP_COUNTRY";

export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
