import { combineReducers } from 'redux';
import counter from './modules/counter';
import shop from './modules/shop';
import users from './modules/users';
import comments from './modules/comments';

export default combineReducers({
    counter,
    shop,
    users,
    comments
});