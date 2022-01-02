import { combineReducers } from 'redux';
import policyReducers from './policyReducers';
// import alertReducer from "./alertReducer";
// // import profileReducer from "./profileReducer";
// import productReducer from "./productReducer";

const rootReducer = combineReducers({
  // auth: authReducer,
  // alerts: alertReducer,
  policyData: policyReducers,
});

export default rootReducer;
