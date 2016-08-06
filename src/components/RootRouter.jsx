import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from '../routes';
import RoutesFix from '../routes/RoutesFix';
import HistoryFix from '../routes/HistoryFix';

const fixedRoutes = Object.assign(RoutesFix, routes);

const RootRouter = (props) => {
    const history = Object.assign(
        HistoryFix,
        syncHistoryWithStore(browserHistory, props.store)
    );

    return (
        <Router
            history={ history }
            routes={ fixedRoutes }
        />
    );
};

RootRouter.propTypes = { store: React.PropTypes.object.isRequired };

export default RootRouter;
