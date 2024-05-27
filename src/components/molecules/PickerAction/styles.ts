import PickerComponent from '@components/atoms/Picker';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
`;

const Picker = styled(PickerComponent)`
  width: 50%;
`;

export default {Wrapper, Title, Picker};
