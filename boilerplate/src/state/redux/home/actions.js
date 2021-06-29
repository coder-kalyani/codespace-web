import { GET_USER, POST_OWNER_REGISTRATION } from '@config/api-config';
import { asyncRequest } from '@config/http-config';
import * as types from './types';

export const getUserData = () => (dispatch, getState) => asyncRequest({
  url: GET_USER(),
  successAction: data => ({
    type: types.USER_DATA_SUCCESS,
    async: true,
    payload: data,
    state: getState()
  }),
  failureAction: error => ({
    type: types.USER_DATA__FAILURE,
    payload: error
  }),
  dispatch
});

export const ownerdata = bodyObject => (dispatch, getState) => asyncRequest({
  url: POST_OWNER_REGISTRATION(),
  data: bodyObject,
  method: 'POST',
  successAction: data => ({
    type: types.POST_OWNER_DATA_SUCCESS,
    async: true,
    payload: data,
    state: getState()
  }),
  failureAction: error => ({
    type: types.POST_OWNER_DATA_FAILURE,
    payload: error
  }),
  dispatch
  // token: authToken
});
