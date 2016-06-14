import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';

import App from './App';

const root = document.querySelector('#root');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    root
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            root
        );
    });
}
