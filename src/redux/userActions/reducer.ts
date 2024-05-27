import types from './types';
import {ReduxAction} from '@constants/interfaces';

const initialState = {
  selectedAction: '',
  history: [],
};

const userActions = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case types.SET_SELECTED_ACTION:
      return {
        ...state,
        selectedAction: action.payload,
      };

    case types.UPDATE_ACTIONS_HISTORY:
      return {
        ...state,
        history: action.payload,
      };

    case types.WIPE_ACTIONS_HISTORY:
      return initialState;

    default:
      return state;
  }
};

export default userActions;
