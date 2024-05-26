import React from 'react';
import Styles from './styles';
import {IconData} from '@constants/interfaces';
import {isString} from '@utils/index';
import getStyleByType from './utils/getStyleByType';
import getColor from '@utils/getColor';

export type ButtonType = 'squared' | 'rounded' | 'circular';

export interface ButtonInterface {
  label?: string;
  iconData?: IconData | {};
  type?: ButtonType;
  fontSize?: number;
  onPress?: () => void;
}

const Button = ({label, iconData = {}, type, onPress = () => {}, fontSize = 20, ...props}: ButtonInterface) => {
  const isValidLabel = !!label && isString(label);

  const {name: iconName, orientation} = iconData as IconData;
  const isValidIcon = !!iconName && isString(iconName);

  if (!isValidLabel && !isValidIcon) {
    return null;
  }

  const isIconToLeft = isValidIcon && orientation === 'left';
  const isIconToRight = isValidIcon && orientation === 'right';

  const typeStyle = getStyleByType(type);

  return (
    <Styles.Wrapper typeStyle={typeStyle} onPress={onPress} underlayColor={getColor('main', 'secondary')} {...props}>
      {/* {isIconToLeft && }  */}
      {isValidLabel && <Styles.Label fontSize={fontSize}>{label}</Styles.Label>}
      {/* {isIconToRight && } */}
    </Styles.Wrapper>
  );
};

export default Button;
