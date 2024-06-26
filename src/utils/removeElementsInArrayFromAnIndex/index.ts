import {isArray} from '..';

const removeElementsInArrayFromAnIndex = (arr: any[], indexFrom: number) => {
  if (!arr || !isArray(arr) || !arr.length) return [];
  return arr.slice(0, indexFrom + 1);
};

export default removeElementsInArrayFromAnIndex;
