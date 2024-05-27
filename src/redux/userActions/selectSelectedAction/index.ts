import {State} from '@constants/interfaces';
import {isArray, isObject, isString} from '@utils/index';

const selectSelectedAction = (state: State) => {
  if (!state || !isObject(state) || !Object.keys(state).length) return [];
  const {userActions} = state;

  if (!userActions || !isObject(userActions) || !Object.keys(userActions).length) return [];
  const {selectedAction, history} = userActions;

  if (!selectedAction || !isString(selectedAction)) return;
  if (!history || !isArray(history) || !history.length) return [];
  const action = history.find(historyAction => historyAction.id === selectedAction);

  return action;
};

export default selectSelectedAction;
