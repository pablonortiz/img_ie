import ImageComponent from '@components/atoms/Image';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  margin-top: 5px;
`;

const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-horizontal: 20px;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
  border-width: 1px;
`;

const Image = styled(ImageComponent)`
  width: 350px;
  height: 350px;
`;

export default {Wrapper, ButtonsWrapper, ImageWrapper, Image};
