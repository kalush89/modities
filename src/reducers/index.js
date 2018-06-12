import { combineReducers } from 'redux'
import * as Actions from '../actions';

const initialState = {
  commodities: {},
  isFetching: true, // Default to fetching..
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_REQUEST_COMMODITIES:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_SUCCESS_COMMODITIES:
      return {
        ...state,
        commodities: action.payload.results,
        isFetching: false
      };
    case Actions.GET_FAILURE_COMMODITIES:
      console.log('Error: ', action.error);
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
};