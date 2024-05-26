import React from 'react';
import {SliderInterface} from '@components/atoms/Slider';
import {isString} from '@utils/index';
import Styles from './styles';

export interface SlideActionInterface extends SliderInterface {
  title: string;
}

const SlideAction = ({title, values, onSlide}: SlideActionInterface) => {
  if (!title || !isString(title)) {
    return null;
  }

  return (
    <Styles.Wrapper>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Slider values={values} onSlide={onSlide} />
    </Styles.Wrapper>
  );
};

export default SlideAction;
