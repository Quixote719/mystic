import * as graphAnalysisActions from './actions'
import { combineReducers } from 'redux'

const toggleSiderCollapsed = (
    state = { GREMLIN: false, ENTITY_EVENT: false, ALGORITHM: false },
    action
) => {
    switch (action.type) {
        case graphAnalysisActions.TOGGLE_GREMLIN_SIDER:
            const nextGremlinState = { GREMLIN: !state.GREMLIN }
            return { ...state, ...nextGremlinState }
        case graphAnalysisActions.TOGGLE_ENTITY_EVENT_SIDER:
            const nextEntityEventState = { ENTITY_EVENT: !state.ENTITY_EVENT }
            return { ...state, ...nextEntityEventState }
        case graphAnalysisActions.TOGGLE_ALGORITHM_SIDER:
            const nextAlgorithmState = { ALGORITHM: !state.ALGORITHM }
            return { ...state, ...nextAlgorithmState }
        default:
            return state
    }
}

const graphAnalysisReducer = combineReducers({
    toggleSiderCollapsed
})

export default graphAnalysisReducer
