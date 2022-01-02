import { ADD_POLICY, FIND_ALL_POLICY } from '../actions/types';

const initialState = {
  policies: null,
  policy: null,
  status: null,
  loadingPolicies: false,
  loadingPolicy: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_ALL_POLICY:
      return {
        ...state,
        status: action.payload.status,
        policies: action.payload.content,
      };

    case ADD_POLICY:
      return {
        ...state,
        status: action.payload.status,
      };

    default:
      return state;
  }
};
