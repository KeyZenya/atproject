import { createStore, combineReducers } from 'redux';

import rootReducer from './reducers/root';

const rootReduxer = combineReducers({
    root: rootReducer
});

const confiureStore = () => {
    return createStore(rootReducer);
}

export default confiureStore;