import types from './types';
import {ReduxAction} from '@constants/interfaces';

const initialState = {
  selectedImage: '',
  userActions: [],
};

const images = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case types.SET_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: action.payload,
      };

    case types.UPDATE_USER_ACTIONS:
      return {
        ...state,
        userActions: action.payload,
      };

    case types.WIPE_IMAGE_STATE:
      return state;

    default:
      return state;
  }
};

export default images;
