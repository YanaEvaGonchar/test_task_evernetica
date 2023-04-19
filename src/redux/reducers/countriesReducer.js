import { 
  COUNTRIES, 
  SELECTED_COUNTRY, 
  DELETED_COUNTRY, 
  DRAG_DROP_COUNTRY, 
  SEARCH_COUNTRY,
  DRAG_DROP_SELECTED_COUNTRY,
} from "../types";

export default function countries(
  state = {
    allCountries: [],
    filteredCountries: [],
    selectedCountries: [],
    currentCountries: [],
    error: null,
  },
  action
) {
  switch (action.type) {
    case COUNTRIES.GET_ALL_COUNTRIES.REQUEST:
      return { ...state, error: null };
    
    case SELECTED_COUNTRY:
      const newFilteredCountries = state.filteredCountries.filter((country) => 
        country.cca2 !== action.payload.cca2
      ) 
      const newCurrentCountries = state.currentCountries.filter((country) => 
        country.cca2 !== action.payload.cca2
      )
      const selectedCountry = { ...action.payload, checked: true};

      return { 
        ...state, 
        filteredCountries: newFilteredCountries, 
        currentCountries: newCurrentCountries, 
        selectedCountries: [...state.selectedCountries, selectedCountry]
      };

    case DELETED_COUNTRY:
      return { 
        ...state, 
        selectedCountries: state.selectedCountries.filter((country) => country.cca2 !== action.payload.cca2), 
        currentCountries: state.currentCountries.filter((country) => country.cca2 !== action.payload.cca2), 
        filteredCountries: state.filteredCountries.filter((country) => country.cca2 !== action.payload.cca2) 
      };

    case DRAG_DROP_COUNTRY:
      const newOrder = Array.from(state.filteredCountries);
      const [removed] = newOrder.splice(action.payload.source.index, 1);
      newOrder.splice(action.payload.destination.index, 0, removed);

      const newCurrentOrder = Array.from(state.currentCountries);
      const [removedCurrent] = newCurrentOrder.splice(action.payload.source.index, 1);
      newCurrentOrder.splice(action.payload.destination.index, 0, removedCurrent);

      return { 
        ...state, 
        currentCountries: newCurrentOrder, 
        filteredCountries: newOrder
      };

    case DRAG_DROP_SELECTED_COUNTRY:
      const newSelectedOrder = Array.from(state.selectedCountries);
      const [removedSelected] = newSelectedOrder.splice(action.payload.source.index, 1);
      newSelectedOrder.splice(action.payload.destination.index, 0, removedSelected);

      return { 
        ...state, 
        selectedCountries: newSelectedOrder
      };

    case SEARCH_COUNTRY: 
      if (!action.payload) return { ...state, filteredCountries: state.currentCountries }
      return { 
        ...state, 
        filteredCountries: state.currentCountries.filter((country) => 
        JSON.stringify(country.name.common).toUpperCase().includes(action.payload.toUpperCase())
      )};

    case COUNTRIES.GET_ALL_COUNTRIES.SUCCESS:
      return { 
        ...state, 
        allCountries: action.payload, 
        filteredCountries: action.payload, 
        currentCountries: action.payload 
      };

    case COUNTRIES.GET_ALL_COUNTRIES.FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
