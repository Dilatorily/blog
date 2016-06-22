import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from '../routes';
import RouterFix from '../routes/RouterFix';

const Root = (props) => {
    const history = Object.assign(
        RouterFix,
        syncHistoryWithStore(browserHistory, props.store)
    );

    return (
        <Router
            history={ history }
            routes={ Object.assign(RouterFix, routes) }
        />
    );
};
Root.propTypes = { store: React.PropTypes.object.isRequired };

export default Root;
