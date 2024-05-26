import getColor from '@utils/getColor';
import styled from 'styled-components/native';

interface WrapperProps {
  typeStyle: any;
}

const Wrapper = styled.TouchableHighlight<WrapperProps>`
  background-color: ${getColor('main', 'primary')};
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 5px;
  ${({typeStyle}) => typeStyle}
`;

interface LabelProps {
  fontSize: number;
}

const Label = styled.Text<LabelProps>`
  color: ${getColor('base', 'white')};
  ${({fontSize}) => `font-size: ${fontSize}px`};
`;

export default {Wrapper, Label};
