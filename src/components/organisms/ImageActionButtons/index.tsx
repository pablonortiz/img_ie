import React, {useState} from 'react';
import Styles from './styles';
import ButtonRow from '@components/molecules/ButtonRow';
import {isArray, isString} from '@utils/index';
import {ActionButton} from '@constants/interfaces';
import Animated, {useSharedValue, useAnimatedStyle, withTiming, Easing} from 'react-native-reanimated';
import Button from '@components/atoms/Button';
import SlideAction from '@components/molecules/SlideAction';
import useActionOnImage from '@hooks/useActionOnImage';
import PickerAction from '@components/molecules/PickerAction';

export interface ImageActionButtonsInterface {
  selectedActionData: {};
  actionButtonsData: ActionButton[];
  onPressButton: (url: string) => void;
}

const ImageActionButtons = ({selectedActionData, actionButtonsData, onPressButton}: ImageActionButtonsInterface) => {
  const [showFirst, setShowFirst] = useState(true);
  const {processImage} = useActionOnImage();

  const firstComponentHeight = useSharedValue(1);
  const secondComponentHeight = useSharedValue(0);

  // Animation logic
  const firstComponentStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(firstComponentHeight.value * 150, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      }),
      opacity: withTiming(firstComponentHeight.value, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      }),
    };
  });

  const secondComponentStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(secondComponentHeight.value * 150, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      }),
      opacity: withTiming(secondComponentHeight.value, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      }),
    };
  });

  const toggleComponents = () => {
    if (showFirst) {
      firstComponentHeight.value = 0;
      secondComponentHeight.value = 1;
    } else {
      firstComponentHeight.value = 1;
      secondComponentHeight.value = 0;
    }
    setShowFirst(!showFirst);
  };

  if (!actionButtonsData || !isArray(actionButtonsData) || !actionButtonsData.length) {
    return null;
  }

  // Rest of logic
  const handlePressButton = (label: string) => {
    onPressButton(label);
    return toggleComponents();
  };

  const updatedButtons = actionButtonsData.map(actionButtonData => {
    return {
      ...actionButtonData,
      onPress: () => handlePressButton(actionButtonData),
    };
  });

  const onAction = (value: string | number) => {
    const validValue: string = isString(value) ? value : Math.round(value).toString();

    processImage({
      action: selectedActionData?.action,
      value: validValue,
    });
  };

  const renderPicker = () => <PickerAction title={selectedActionData?.label} values={selectedActionData?.values} onChange={onAction} />;

  const renderSlider = () => <SlideAction title={selectedActionData?.label} values={selectedActionData?.values} onSlide={onAction} />;

  const actionComponentsToRender = {
    picker: renderPicker(),
    slider: renderSlider(),
  };

  return (
    <Styles.Wrapper>
      <Animated.View style={[firstComponentStyle]}>
        <ButtonRow buttons={updatedButtons} type="rounded" />
      </Animated.View>
      <Animated.View style={[secondComponentStyle]}>
        <Button label="<-" type="circular" onPress={() => handlePressButton('')} />
        {actionComponentsToRender[selectedActionData?.type]}
      </Animated.View>
    </Styles.Wrapper>
  );
};

export default ImageActionButtons;
