import {UserAction} from '@constants/interfaces';
import types from './types';

export const actSetSelectedImage = (payload: string) => ({
  type: types.SET_SELECTED_IMAGE,
  payload,
});

export const actUpdateActions = (payload: UserAction[]) => ({
  type: types.UPDATE_USER_ACTIONS,
  payload,
});

export const actWipeImageState = () => ({
  type: types.WIPE_IMAGE_STATE,
});
