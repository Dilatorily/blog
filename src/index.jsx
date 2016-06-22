import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';

import App from './components/App';
import { configureStore } from './store';
import { isDevelopment } from './utils';

const root = document.querySelector('#root');
const store = configureStore();

ReactDOM.render(
    <StyleRoot>
        <Provider store={ store }>
            <AppContainer>
                <App />
            </AppContainer>
        </Provider>
    </StyleRoot>,
    root
);

if (isDevelopment && module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <StyleRoot>
                <Provider store={ store }>
                    <AppContainer>
                        <NextApp />
                    </AppContainer>
                </Provider>
            </StyleRoot>,
            root
        );
    });
}
