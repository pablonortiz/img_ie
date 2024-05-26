import {isString, isUrl} from '..';

const removeUrlParams = (url: string) => {
  if (!url || !isString(url) || !isUrl(url)) {
    return '';
  }
  const queryIndex = url.indexOf('?');

  if (queryIndex === -1) {
    return url;
  }

  return url.substring(0, queryIndex);
};

export default removeUrlParams;
