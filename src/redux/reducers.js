import { combineReducers } from 'redux';
import counter from './modules/counter';
import shop from './modules/shop';
import users from './modules/users';
import comments from './modules/comments';
import posts from './modules/posts';

export default combineReducers({
    counter,
    shop,
    users,
    comments,
    posts
});