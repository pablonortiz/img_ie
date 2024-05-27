import {State} from '@constants/interfaces';
import {isArray, isObject} from '@utils/index';

const selectActionsHistory = (state: State) => {
  if (!state || !isObject(state) || !Object.keys(state).length) return [];
  const {userActions} = state;

  if (!userActions || !isObject(userActions) || !Object.keys(userActions).length) return [];
  const {history} = userActions;

  if (!history || !isArray(history) || !history.length) return [];
  return history;
};

export default selectActionsHistory;
