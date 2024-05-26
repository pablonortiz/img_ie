import palette, {ColorKey, ColorType} from '@constants/palette';
import {isObject, isString} from '@utils/index';

const defaultColor = palette.base.grey;

/**
 * @description returns a color hex from the palette depending
 * on the arguments provided.
 * @param {ColorType} type
 * @param {ColorKey} color
 * @returns {string} a color hex.
 * @example getColor('main', 'primary') // #57B0F2
 */
const getColor = (type: ColorType, color: ColorKey): string => {
  if (!color || !isString(color)) {
    return defaultColor;
  }
  if (!type || !isString(type)) {
    return defaultColor;
  }
  const colorGroup = palette[type as keyof typeof palette];

  if (!colorGroup || !isObject(colorGroup) || !Object.keys(colorGroup).length) {
    return defaultColor;
  }
  const colorValue = (colorGroup as any)[color];

  if (!colorValue || !isString(colorValue)) {
    return defaultColor;
  }
  return colorValue;
};

export default getColor;
