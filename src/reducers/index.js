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
  error: false
};

//the reducer - we will use the constants here to avoid typos
function reducer(state, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: false };
    case API_CALL_SUCCESS:
      return;
    case API_CALL_FAILURE:
      return;
    default:
      return;
  }
}
