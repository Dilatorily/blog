import React from 'react';
import { render } from 'react-dom';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'raleway-webfont/raleway.css';
import 'roboto-mono-webfont/roboto-mono.css';

import Root from './components/Root';
import { configureStore } from './store';
import { isDevelopment } from './utils';

const root = document.getElementById('root');
const store = configureStore();

render(
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
        render(
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
