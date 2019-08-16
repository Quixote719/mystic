import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Sider from './shared/sider'
import GraphAnalysis from './graphAnalysis'
import GraphManagement from './graphManagement'
import GraphDashBoard from './graphManagement/graphDashboard'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import reducers from './reducers'
const temp = module
if (temp.hot) {
    temp.hot.accept()
}

class App extends React.PureComponent {
    render() {
        const middleware = applyMiddleware(promise, thunk)
        return (
            <Layout style={{ height: '100vh' }}>
                <Provider store={createStore(reducers, middleware)}>
                    <Router>
                        <div style={{ display: 'flex' }}>
                            <Sider />
                            <div
                                style={{
                                    width: '100%',
                                    display: 'inline-block'
                                }}
                            >
                                <Switch>
                                    <Route
                                        exact
                                        path='/graphManagement'
                                        component={GraphManagement}
                                    />
                                    <Route
                                        path='/graphManagement/graphDashBoard'
                                        component={GraphDashBoard}
                                    />
                                    <Route
                                        exact
                                        path='/graphAnalysis'
                                        component={GraphAnalysis}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </Provider>
            </Layout>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
