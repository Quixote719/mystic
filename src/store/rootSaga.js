// import { take, fork, call, all, put } from 'redux-saga/effects'
import { call, all } from 'redux-saga/effects'
import graphAnalysisSagas from '../graphAnalysis/saga'

function* rootSaga() {
    // yield all([call(sessionSagas)]);
    yield all([call(graphAnalysisSagas)])
}

export default rootSaga
