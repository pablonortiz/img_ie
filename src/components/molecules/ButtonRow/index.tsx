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
  isSelectedCb?: (data: any) => void;
}

const ButtonRow = ({buttons, type, fontSize, isSelectedCb = () => {}, ...props}: ButtonRowInterface) => {
  if (!buttons || !isArray(buttons) || !buttons.length) {
    return null;
  }

  const renderItem: ListRenderItem<ButtonInterface> = ({item}) => {
    const {label, onPress} = item;

    const isSelected = isSelectedCb(item);

    return (
      <Styles.ButtonWrapper>
        <Styles.Button label={label} type={type} onPress={onPress} fontSize={fontSize} isSelected={isSelected} {...props} />
      </Styles.ButtonWrapper>
    );
  };

  return <Styles.ButtonsList data={buttons} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />;
};

export default ButtonRow;
