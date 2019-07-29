import { combineReducers } from 'redux';

import counter from './modules/counter';
import shop from './modules/shop';

export default combineReducers({
    counter,
    shop
});