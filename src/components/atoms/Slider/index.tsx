import React from 'react';
import Styles from './styles';
import {isArray, isNumber} from '@utils/index';

export interface SliderInterface {
  values: number[];
  onSlide: () => {};
}

const Slider = ({values, onSlide, ...props}: SliderInterface) => {
  if (!values || !isArray(values) || !values.length) {
    return null;
  }

  const [minValue, maxValue] = values;

  if (!isNumber(minValue) || !isNumber(maxValue)) {
    return null;
  }

  return (
    <Styles.Wrapper>
      <Styles.Text>{minValue.toString()}</Styles.Text>
      <Styles.Slider onSlidingComplete={onSlide} minimumValue={minValue} maximumValue={maxValue} {...props} />
      <Styles.Text>{maxValue.toString()}</Styles.Text>
    </Styles.Wrapper>
  );
};

export default Slider;
