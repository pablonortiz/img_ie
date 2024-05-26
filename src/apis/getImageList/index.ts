import rejectWithReason from '@utils/rejectWithReason';
import axios from 'axios';

const defaultUrl = 'https://us-central1-prueba-front-280718.cloudfunctions.net/challenge-fe';

/**
 * @description returns a list of images from
 * a default url.
 * @returns an array representing a list of images.
 * @example getImageList() // [{name: 'apple', url: 'https://...'}]
 */
const getImageList = async () => {
  try {
    const {data} = await axios.get(defaultUrl);

    return data;
  } catch (err: any) {
    return rejectWithReason(err);
  }
};

export default getImageList;
