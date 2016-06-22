import reduxLogger from 'redux-logger';
import { Iterable } from 'immutable';

const logger = reduxLogger({
    collapsed: true,
    stateTransformer: (state) => (
        Iterable.isIterable(state) ?
        state.toJS() :
        state
    )
});

export default logger;
