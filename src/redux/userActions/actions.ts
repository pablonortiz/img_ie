import {UserAction} from '@constants/interfaces';
import types from './types';

export const actSetSelectedAction = (payload: string) => ({
  type: types.SET_SELECTED_ACTION,
  payload,
});

export const actUpdateActionsHistory = (payload: UserAction[] | []) => ({
  type: types.UPDATE_ACTIONS_HISTORY,
  payload,
});

export const actWipeActionsHistory = () => ({
  type: types.WIPE_ACTIONS_HISTORY,
});
