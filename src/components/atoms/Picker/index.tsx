import React from 'react';
import {Picker as PickerComponent, PickerProps} from '@react-native-picker/picker';
import {ActionOnImage} from '@constants/interfaces';

export interface PickerInterface extends PickerProps {
  values: ActionOnImage[];
}

const Picker = ({values, selectedValue, onValueChange, ...props}: PickerInterface) => {
  const renderItem = (item: ActionOnImage) => {
    const {label} = item;

    return <PickerComponent.Item label={label} value={label} />;
  };

  return (
    <PickerComponent selectedValue={selectedValue} onValueChange={onValueChange} {...props}>
      {values.map(item => renderItem(item))}
    </PickerComponent>
  );
};

export default Picker;
