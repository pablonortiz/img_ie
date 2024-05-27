import {combineReducers} from 'redux';
import images from './images';
import userActions from './userActions';

export default combineReducers({
  images,
  userActions,
});
