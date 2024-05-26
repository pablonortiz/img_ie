import React from 'react';
import Styles from './styles';
import {ButtonInterface, ButtonType} from '@components/atoms/Button';
import {isArray} from '@utils/index';
import {ListRenderItem} from 'react-native';

export interface ButtonRowInterface {
  buttons: ButtonInterface;
  type?: ButtonType;
  styles?: any;
  fontSize?: number;
}

const ButtonRow = ({buttons, type, fontSize, ...props}: ButtonRowInterface) => {
  if (!buttons || !isArray(buttons) || !buttons.length) {
    return null;
  }

  const renderItem: ListRenderItem<ButtonInterface> = ({item}) => {
    const {label, onPress} = item;

    return (
      <Styles.ButtonWrapper>
        <Styles.Button label={label} type={type} onPress={onPress} fontSize={fontSize} {...props} />
      </Styles.ButtonWrapper>
    );
  };

  return <Styles.ButtonsList data={buttons} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />;
};

export default ButtonRow;
