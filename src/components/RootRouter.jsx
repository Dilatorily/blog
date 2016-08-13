import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from '../routes';
import RoutesFix from '../routes/RoutesFix';
import HistoryFix from '../routes/HistoryFix';

const fixedRoutes = Object.assign(RoutesFix, routes);
const history = Object.assign(HistoryFix, browserHistory);

const RootRouter = () => (
    <Router
        history={ history }
        routes={ fixedRoutes }
    />
);

export default RootRouter;
