import React from 'react';
import Styles from './styles';
import {isString} from '@utils/index';
import Input, {InputInterface} from '@components/atoms/Input';

export interface InputActionInterface extends InputInterface {
  title: string;
}

const InputAction = ({title, value, onChange}: InputActionInterface) => {
  if (!title || !isString(title)) {
    return null;
  }

  return (
    <Styles.Wrapper>
      <Styles.Title>{title}</Styles.Title>
      <Input value={value} onChange={onChange} />
    </Styles.Wrapper>
  );
};

export default InputAction;
