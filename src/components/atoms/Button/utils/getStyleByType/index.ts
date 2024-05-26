import {isString} from '@utils/index';
import {ButtonType} from '../..';

const squaredStyle = `
 
`;

const roundedStyle = `
  border-radius: 5px;
`;

const circularStyle = `
  border-radius: 15px;
`;

const getStyleByType = (type: ButtonType | any): {} => {
  if (!type || !isString(type)) {
    return {};
  }

  const styles = {
    squared: squaredStyle,
    rounded: roundedStyle,
    circular: circularStyle,
  };

  const validButtonTypes: string[] = ['squared', 'rounded', 'circular'];

  const validType = validButtonTypes.includes(type) ? type : 'squared';

  return styles[validType as keyof typeof styles];
};

export default getStyleByType;
