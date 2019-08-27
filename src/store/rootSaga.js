// import { take, fork, call, all, put } from 'redux-saga/effects'
import { all } from 'redux-saga/effects'

function* rootSaga() {
    // yield all([call(sessionSagas)]);
    yield all([
        // call(watchFetch),
        // call(introSagas),
        // call(taskSagas),
    ])
}

export default rootSaga
