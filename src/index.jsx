import React from 'react';
import { render } from 'react-dom';
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
    <AppContainer>
        <Root store={ store } />
    </AppContainer>,
    root
);

if (isDevelopment && module.hot) {
    module.hot.accept('./components/Root', () => {
        const NextRoot = require('./components/Root').default;
        render(
            <AppContainer>
                <NextRoot store={ store } />
            </AppContainer>,
            root
        );
    });
}
