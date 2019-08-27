import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware, routerActions } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { initActions } from './rootActions'

const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(browserHistory)

const middlewares = [sagaMiddleware, routeMiddleware]
/* eslint-disable */
if(process.env.NODE_ENV == 'development'){
    middlewares.push(createLogger());
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);
window.store = store;
window.routerActions = routerActions;

if(process.env.NODE_ENV == 'development' && module.hot){
    module.hot.accept('./rootReducer', () => {
        const nextRootReducer = require('./rootReducer');
        store.replaceReducer(nextRootReducer);
    });
}
/* eslint-enable */

sagaMiddleware.run(rootSaga)

initActions(store.dispatch)

export default store
