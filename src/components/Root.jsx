import React from 'react';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from '../routes';
import RoutesFix from '../routes/RoutesFix';
import HistoryFix from '../routes/HistoryFix';

const fixedRoutes = Object.assign(RoutesFix, routes);

const Root = (props) => {
    const history = Object.assign(
        HistoryFix,
        syncHistoryWithStore(browserHistory, props.store)
    );

    return (
        <StyleRoot>
            <Provider store={ props.store }>
                <Router
                    history={ history }
                    routes={ fixedRoutes }
                />
            </Provider>
        </StyleRoot>
    );
};
Root.propTypes = { store: React.PropTypes.object.isRequired };

export default Root;
