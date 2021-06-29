import * as types from './types';

const initialState = {
  getUser: [],
  userdatademo: [],
  ownerdata: []
};

export default function clientsReducer(state = initialState, action) {
  switch (action.type) {
  case types.USER_DATA_SUCCESS: {
    return {
      ...state,
      userdatademo: action.payload
    };
  }
  case types.USER_DATA__FAILURE:
    return { ...state, error: action.payload };

  case types.POST_OWNER_DATA_SUCCESS: {
    return {
      ...state,
      ownerdata: action.payload
    };
  }
  case types.POST_OWNER_DATA_FAILURE:
    return { ...state, error: action.payload };

  default:
    return state;
  }
}
