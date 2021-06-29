import * as types  from './types';
import apiRequest from './actions';
import { mockStoreForAction } from '../../utils/test-helper';

describe('action > apiRequest', () => {
  it('should create an action to make api request so that loader can be displayed', () => {
    const expectedAction = [{
      type: types.API_REQUEST
    }];

    const store = mockStoreForAction();
    store.dispatch(apiRequest());

    expect(store.getActions()).toEqual(expectedAction);
  });
});
