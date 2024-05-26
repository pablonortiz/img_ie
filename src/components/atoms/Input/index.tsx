import React from 'react';
import Styles from './styles';

export interface InputInterface {
  value: string;
  onChange: (value: string) => void;
}

const Input = ({value = '', onChange, ...props}: InputInterface) => {
  return <Styles.Input value={value} onChangeText={onChange} {...props} />;
};

export default Input;
