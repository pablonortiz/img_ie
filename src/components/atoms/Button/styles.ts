import getColor from '@utils/getColor';
import styled from 'styled-components/native';
import IconComponent from 'react-native-vector-icons/MaterialIcons';

interface WrapperProps {
  typeStyle: any;
  isSelected: boolean;
}

const Wrapper = styled.TouchableHighlight<WrapperProps>`
  background-color: ${getColor('main', 'primary')};
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 5px;
  border-color: ${getColor('base', 'white')};
  ${({isSelected}) =>
    isSelected &&
    `border-width: 2px;
  `}
  ${({typeStyle}) => typeStyle};
`;

interface LabelProps {
  fontSize: number;
}

const Label = styled.Text<LabelProps>`
  color: ${getColor('base', 'white')};
  ${({fontSize}) => `font-size: ${fontSize}px`};
`;

const Icon = styled(IconComponent)`
  align-self: center;
`;

export default {Wrapper, Label, Icon};
