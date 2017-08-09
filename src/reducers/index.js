import {combineReducers} from 'redux';
import ui from './ui';
import user from './user';
import match from './match';
import broadcast from './broadcast';

export default combineReducers({
    ui,
    user,
    match,
    broadcast,
});
