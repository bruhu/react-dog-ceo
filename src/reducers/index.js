//here we start using Redux for real
//import actions we defined:
import {
  API_CALL_REQUEST,
  API_CALL_REQUEST,
  API_CALL_FAILURE,
  API_CALL_SUCCESS
} from "../actions/actionTypes";

//define an initial state
const initialState = {
  dog: null,
  fetching: false,
  error: null
};

//the reducer - we will use the constants here to avoid typos
function reducer(state, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}
