import {isArray, isObject} from '..';

/**
 * @description updates an element in an array by its id
 * @param {object} updatedElement
 * @param {array} elements
 * @return {array} with updated elements data
 * @example updateElementInArrayById({id: '123', selected: true}, [{id: '12'}, {id:'123'}]) // [{id: '12'}, {id:'123', selected: true}]
 */
const updateElementInArrayById = (updatedElement: {id: string}, elements: {id: string}[]) => {
  if (!elements || !isArray(elements) || !elements.length) return [];
  if (!updatedElement || !isObject(updatedElement) || !Object.keys(updatedElement).length) return elements;

  const newElements = [...elements];
  const selectedUpdatedElement = newElements.findIndex(element => element.id === updatedElement.id);

  newElements.splice(selectedUpdatedElement, 1);
  newElements.splice(selectedUpdatedElement, 0, updatedElement);

  return newElements;
};

export default updateElementInArrayById;
