import {isString} from '@utils/index';
import {ButtonType} from '../..';

const squaredStyle = `
 
`;

const roundedStyle = `
  border-radius: 5px;
`;

const circularStyle = (fontSize: number) => {
  const size = fontSize * 1.8;

  return `
  border-radius: ${size}px;
  width: ${size}px;
  height: ${size}px;
`;
};

const getStyleByType = (type: ButtonType | any, fontSize: number): {} => {
  if (!type || !isString(type)) {
    return {};
  }

  const styles = {
    squared: squaredStyle,
    rounded: roundedStyle,
    circular: () => circularStyle(fontSize),
  };

  const validButtonTypes: string[] = ['squared', 'rounded', 'circular'];

  const validType = validButtonTypes.includes(type) ? type : 'squared';

  return styles[validType as keyof typeof styles];
};

export default getStyleByType;
