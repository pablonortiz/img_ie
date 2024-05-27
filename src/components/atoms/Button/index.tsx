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
  isSelected?: boolean;
  fontSize?: number;
  onPress?: () => void;
}

const Button = ({label, iconData = {}, type, isSelected = false, onPress = () => {}, fontSize = 20, ...props}: ButtonInterface) => {
  const isValidLabel = !!label && isString(label);

  const {name: iconName, orientation = 'left'} = iconData as IconData;
  const isValidIcon = !!iconName && isString(iconName);

  if (!isValidLabel && !isValidIcon) {
    return null;
  }

  const isIconToLeft = isValidIcon && orientation === 'left';
  const isIconToRight = isValidIcon && orientation === 'right';

  const typeStyle = getStyleByType(type, fontSize);
  const iconSize = fontSize * 1.2;

  return (
    <Styles.Wrapper typeStyle={typeStyle} onPress={onPress} underlayColor={getColor('main', 'secondary')} isSelected={isSelected} {...props}>
      <>
        {isIconToLeft && <Styles.Icon name={iconName} size={iconSize} color={getColor('base', 'white')} />}
        {isValidLabel && <Styles.Label fontSize={fontSize}>{label}</Styles.Label>}
        {isIconToRight && <Styles.Icon name={iconName} size={iconSize} color={getColor('base', 'white')} />}
      </>
    </Styles.Wrapper>
  );
};

export default Button;
