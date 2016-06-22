import { createStore, compose, applyMiddleware } from 'redux';

import middleware from '../middleware';
import reducers from '../reducers';
import { isDevelopment } from '../utils';

export const configureStore = (initialState) => {
    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(...middleware),
            isDevelopment && window.devToolsExtension ?
                window.devToolsExtension() :
                (func) => func
        )
    );

    if (isDevelopment && module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducers = require('../reducers').default;
            store.replaceReducer(nextReducers);
        });
    }

    return store;
};
