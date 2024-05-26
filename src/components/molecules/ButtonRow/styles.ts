import styled from 'styled-components/native';
import ButtonComponent, {ButtonInterface} from '@components/atoms/Button';
import {FlatListProps} from 'react-native';

const ButtonsList = styled.FlatList<FlatListProps<ButtonInterface>>``;

const ButtonWrapper = styled.View`
  margin-horizontal: 5px;
`;

const Button = styled(ButtonComponent)`
  font-size: 20px;
`;

export default {ButtonsList, ButtonWrapper, Button};
