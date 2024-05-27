import types from './types';
import {ReduxAction} from '@constants/interfaces';

const initialState = {
  selectedImage: '',
};

const images = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case types.SET_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: action.payload,
      };

    case types.WIPE_IMAGE_STATE:
      return initialState;

    default:
      return state;
  }
};

export default images;
