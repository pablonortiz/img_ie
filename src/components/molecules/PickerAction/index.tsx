import React, {useState} from 'react';
import Styles from './styles';
import {isString} from '@utils/index';
import Picker, {PickerInterface} from '@components/atoms/Picker';

export interface PickerActionInterface extends PickerInterface {
  title: string;
  onChange: (value: string) => void;
}

const PickerAction = ({title, values, onChange}: PickerActionInterface) => {
  const [selectedValue, setSelectedValue] = useState('');

  if (!title || !isString(title)) {
    return null;
  }

  const onValueChange = (value: string) => {
    onChange(value);
    setSelectedValue(value);
  };

  return (
    <Styles.Wrapper>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Picker values={values} selectedValue={selectedValue} onValueChange={onValueChange} />
    </Styles.Wrapper>
  );
};

export default PickerAction;
