import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';

import App from './components/App';

const root = document.querySelector('#root');

ReactDOM.render(
    <StyleRoot>
        <AppContainer>
            <App />
        </AppContainer>
    </StyleRoot>,
    root
);

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <StyleRoot>
                <AppContainer>
                    <NextApp />
                </AppContainer>
            </StyleRoot>,
            root
        );
    });
}
