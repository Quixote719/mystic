import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import * as actions from './rootActions';
import graphAnalysisReducer from '../graphAnalysis/reducer'

const rootReducer = combineReducers({
    routing: routerReducer,
    graphAnalysisReducer
})

export default rootReducer
