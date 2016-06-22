import { createStore } from 'redux';

import reducers from '../reducers';
import { isDevelopment } from '../utils';

export const configureStore = (initialState) => {
    const store = createStore(
        reducers,
        initialState,
        isDevelopment && window.devToolsExtension ?
            window.devToolsExtension() :
            (fn) => fn
    );

    if (isDevelopment && module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducers = require('../reducers').default;
            store.replaceReducer(nextReducers);
        });
    }

    return store;
};
