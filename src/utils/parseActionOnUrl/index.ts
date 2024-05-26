import {URLActionData} from '@constants/interfaces';
import {isObject} from '..';

/**
 * @description inserts actions for modifying images
 * on the provided url params.
 * @param {URLActionData} data
 * @param {string} data.url
 * @param {string} data.action
 * @param {string} data.value
 * @returns {string} an updated url.
 * @example parseActionOnUrl({url: 'https://assets.imgix.net/unsplash/umbrella.jpg', action: 'rot', value: 'h'}) // https://assets.imgix.net/unsplash/umbrella.jpg?rot=h
 */
const parseActionOnUrl = (data: URLActionData): string => {
  if (!data || !isObject(data) || !Object.keys(data).length) return '';
  const {url, action, value} = data;

  let [baseUrl, queryString] = url.split('?');
  let params: {[key: string]: string} = {};

  // Parse existing query string into a params object
  if (queryString) {
    queryString.split('&').forEach((param: any) => {
      const [key, val] = param.split('=');
      params[key] = val;
    });
  }

  // Update or add the action with the new value
  params[action] = value;

  // Convert params object back to query string
  const updatedQueryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');

  return `${baseUrl}?${updatedQueryString}`;
};

export default parseActionOnUrl;
