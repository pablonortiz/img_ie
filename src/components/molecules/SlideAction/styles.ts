import SliderComponent from '@components/atoms/Slider';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
`;

const Slider = styled(SliderComponent)`
  width: 80%;
`;

export default {Wrapper, Title, Slider};
