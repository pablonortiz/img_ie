import React from 'react';
import {Picker as PickerComponent, PickerProps} from '@react-native-picker/picker';

export interface PickerInterface extends PickerProps {
  values: string[];
}

const Picker = ({values, ...props}: PickerInterface) => {
  const renderItem = (item: string) => {
    return <PickerComponent.Item label={item} value={item} />;
  };

  return <PickerComponent {...props}>{values.map(item => renderItem(item))}</PickerComponent>;
};

export default Picker;
