import { all, call, fork, take } from 'redux-saga/effects'
import { message } from 'antd'
// import {urlMap} from './../../config.json';
import * as action from './actions'
import fetchProxy from './../utils/fetchProxy'
// import dataSagas from './data/sagas';
// import dagSagas from './DAG/sagas';

const API_PREFIX = window.knowledgeGraphPrefix

function* getKnowledgeGraph() {
    try {
        // yield call(fetchProxy, `${urlMap.execViewUrl}/${params.vid.split('_')[0]}`, {
        let result = yield call(
            fetchProxy,
            `${API_PREFIX}/detail/f4dc5756d3ae4b9baa3e2d4a959c4fec`,
            {
                method: 'GET',
                contentType: 'application/json'
                // payload: {
                //     ...params,
                // }
            }
        )
        console.warn(result)
        message.success('获取数据成功')
        // yield put(action.execView('receive'));
    } catch (e) {
        throw e
        // yield put(action.execView('error', e.toString()));
    }
}

function* selectKnowledgeGraph() {
    try {
        let result = yield call(fetchProxy, `${API_PREFIX}/query`, {
            method: 'POST',
            contentType: 'application/json',
            payload: {
                currentPage: 1,
                pageSize: 10,
                sortInfo: []
            }
        })
        console.warn(result)
        message.success('获取数据成功')
        // yield put(action.execView('receive'));
    } catch (e) {
        throw e
        // yield put(action.execView('error', e.toString()));
    }
}

function* watchExecView() {
    while (true) {
        const params = yield take(action.TOGGLE_ALGORITHM_SIDER)
        yield fork(getKnowledgeGraph, params)
    }
}

function* watchSelectGraph() {
    while (true) {
        const params = yield take(action.SELECT_KNOWLEDGE_GRAPH)
        yield fork(selectKnowledgeGraph, params)
    }
}

function* graphAnalysisSagas() {
    yield all([
        // call(dagSagas),
        call(watchExecView),
        call(watchSelectGraph)
    ])
}

export default graphAnalysisSagas
