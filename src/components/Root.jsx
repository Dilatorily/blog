import React from 'react';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';
import RootRouter from './RootRouter';

const Root = (props) => (
    <StyleRoot>
        <Provider store={ props.store }>
            <RootRouter store={ props.store } />
        </Provider>
    </StyleRoot>
);

Root.propTypes = { store: React.PropTypes.object.isRequired };

export default Root;
