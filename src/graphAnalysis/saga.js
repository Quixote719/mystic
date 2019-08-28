import { all, call, fork, take } from 'redux-saga/effects'
import { message } from 'antd'
// import {urlMap} from './../../config.json';
import * as action from './action'
import fetchProxy from './../utils/fetchProxy'
// import dataSagas from './data/sagas';
// import dagSagas from './DAG/sagas';

function* getKnowledgeGraph() {
    try {
        // yield call(fetchProxy, `${urlMap.execViewUrl}/${params.vid.split('_')[0]}`, {
        let result = yield call(
            fetchProxy,
            'http://10.3.71.140:9010/awaken-backend-microservice-project-server/api/v1/services/warehouse/model/detail/f4dc5756d3ae4b9baa3e2d4a959c4fec',
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

function* watchExecView() {
    while (true) {
        const params = yield take(action.TOGGLE_ALGORITHM_SIDER)
        yield fork(getKnowledgeGraph, params)
    }
}

function* graphAnalysisSagas() {
    yield all([
        // call(dagSagas),
        call(watchExecView)
    ])
}

export default graphAnalysisSagas
