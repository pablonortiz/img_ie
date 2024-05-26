import ImageComponent from '@components/atoms/Image';
import styled from 'styled-components/native';

const TouchableWrapper = styled.TouchableOpacity`
  width: 50%;
  height: 200px;
`;

const Image = styled(ImageComponent)`
  width: 100%;
  height: 100%;
`;

export default {TouchableWrapper, Image};
