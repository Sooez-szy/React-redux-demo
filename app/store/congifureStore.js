/**
 * Created by sooszy on 2016/12/20.
 */
import {createStore, compose} from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore(initialState){
    const store = createStore(rootReducer, initialState, compose(window.devToolsExtension ? window.devToolsExtension() : f=>f));
    if (module.hot) {
        module.hot.accept('../reducers/index', () => {
            const nextReducer = require('../reducers/index');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}