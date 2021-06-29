import * as types from './types';

const initialState = {
  apiCallCount: 0,
  isLoading: false
};

export default function apiRequestReducer(state = initialState, action) {
  const { type } = action;
  const isApiStarted = type === types.API_REQUEST;
  const isApiEnded = /(.*)_(SUCCESS|FAILURE)/.test(type);

  if (isApiStarted) {
    const apiCallCount = state.apiCallCount + 1;

    return Object.assign({}, state, {
      apiCallCount,
      isLoading: apiCallCount > 0
    });
  }

  if (isApiEnded && state.apiCallCount !== 0) {
    const apiCallCount = state.apiCallCount - 1;

    return Object.assign({}, state, {
      apiCallCount,
      isLoading: apiCallCount !== 0
    });
  }

  return state;
}
