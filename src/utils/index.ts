/**
 * @description return true whether the argument is a valid string
 * @param {string} str
 * @returns bool
 * @example isString('') // false
 * @example isString('one') // true
 */
export const isString = (str: unknown): str is string => {
  return typeof str === 'string';
};

/**
 * @description return true whether the argument is a valid number
 * @param {number} num
 * @example isValidNumber('image') // false
 * @example isValidNumber(12) // true
 */
export const isNumber = (num: unknown): num is number => {
  return typeof num === 'number' && !Number.isNaN(Number(num));
};

/**
 * @param {object} obj
 * @description return true whether the argument is a valid object
 * @example isObject('test') // false
 * @example isObject({image: {}}) // true
 * @returns bool
 */
export const isObject = (obj: unknown): obj is object => {
  return !!obj && typeof obj === 'object' && obj.constructor === Object;
};

/**
 * @description return true whether the argument is a valid array
 * @param {array} arr
 * @example isArray({}) // false
 * @example isArray([]) // true
 * @returns bool
 */
export const isArray = (arr: unknown): arr is any[] => {
  return Array.isArray(arr);
};

/**
 * @description return true whether the argument is a valid function
 * @param {function} fn
 * @example isFunction({}) // false
 * @example isFunction(() => {}) // true
 * @returns bool
 */
export const isFunction = (fn: unknown): fn is Function => {
  return typeof fn === 'function';
};

/**
 * @description return true whether the argument fulfills an url pattern
 * @param {string} url
 * @example isValidNumber('bear') // false
 * @example isValidNumber(12) // true
 */
export const isUrl = (url: unknown) => {
  if (!isString(url)) {
    return false;
  }
  const regexRelative = new RegExp('^(http:|www.|https:|//)');
  return regexRelative.test(url);
};

/**
 * @param {function} fn
 * @description wrapper to execute promise and return tuple with data and error
 * @returns {array<data, error>}
 * @example const [data, error] = await promiseWrapper(promise())
 */
const promiseWrapper = (promise: Promise<any>) => promise.then(data => [data, null]).catch((error: Error) => Promise.resolve([null, error]));

export default promiseWrapper;
