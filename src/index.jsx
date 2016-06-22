import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';

import Root from './components/Root';
import { configureStore } from './store';
import { isDevelopment } from './utils';

const root = document.querySelector('#root');
const store = configureStore();

ReactDOM.render(
    <StyleRoot>
        <Provider store={ store }>
            <AppContainer>
                <Root store={ store } />
            </AppContainer>
        </Provider>
    </StyleRoot>,
    root
);

if (isDevelopment && module.hot) {
    module.hot.accept('./components/Root', () => {
        const NextRoot = require('./components/Root').default;
        ReactDOM.render(
            <StyleRoot>
                <Provider store={ store }>
                    <AppContainer>
                        <NextRoot store={ store } />
                    </AppContainer>
                </Provider>
            </StyleRoot>,
            root
        );
    });
}
