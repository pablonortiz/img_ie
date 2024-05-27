import React from 'react';
import Styles from './styles';
import ButtonRow from '@components/molecules/ButtonRow';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@constants/interfaces';
import selectActionsHistory from '@redux/userActions/selectors/selectActionsHistory';
import {actSetSelectedImage} from '@redux/images/actions';
import useActionsHistory from '@hooks/useActionsHistory';

const ActionsHistory = () => {
  const dispatch = useDispatch();
  const actionsHistory = useSelector((state: State) => selectActionsHistory(state));
  const {setAction} = useActionsHistory();

  const onPressButton = (id: string, url: string) => {
    setAction(id);
    return dispatch(actSetSelectedImage(url));
  };

  const buttons = actionsHistory.map((data, index) => {
    const {id, url} = data;

    return {label: (index + 1).toString(), onPress: () => onPressButton(id, url)};
  });

  return (
    <Styles.Wrapper>
      <ButtonRow buttons={buttons} type="circular" />
    </Styles.Wrapper>
  );
};

export default ActionsHistory;
