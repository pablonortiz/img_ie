import {State, UserAction} from '@constants/interfaces';
import {actSetSelectedAction, actUpdateActionsHistory} from '@redux/userActions/actions';
import selectSelectedAction from '@redux/userActions/selectSelectedAction';
import selectActionsHistory from '@redux/userActions/selectors/selectActionsHistory';
import {isObject} from '@utils/index';
import removeElementsInArrayFromAnIndex from '@utils/removeElementsInArrayFromAnIndex';
import {useDispatch, useSelector} from 'react-redux';

const useActionsHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector((state: State) => selectActionsHistory(state));
  const selectedAction = useSelector((state: State) => selectSelectedAction(state));

  const addAction = (action: UserAction) => {
    if (!action || !isObject(action) || !Object.keys(action).length) return null;
    const {id: actionId} = action;

    if (!selectedAction || !isObject(selectedAction) || !Object.keys(selectedAction).length) {
      dispatch(actSetSelectedAction(actionId));
      return dispatch(actUpdateActionsHistory([action]));
    }

    const selectedActionOnHistoryIndex = history.findIndex(historyAction => historyAction.id === selectedAction.id);

    const updatedHistory = removeElementsInArrayFromAnIndex(history, selectedActionOnHistoryIndex);
    updatedHistory.push(action);

    dispatch(actSetSelectedAction(actionId));
    return dispatch(actUpdateActionsHistory(updatedHistory));
  };

  const setAction = (actionId: string) => {
    dispatch(actSetSelectedAction(actionId));
  };

  return {history, selectedAction, addAction, setAction};
};

export default useActionsHistory;
