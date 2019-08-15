import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Sider from './pages/sider'
import GraphDashBoard from './pages/graphDashBoard'
import GraphList from './pages/graphList'
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
                        <div>
                            <Sider />
                            <div
                                style={{
                                    width: '77%',
                                    display: 'inline-block'
                                }}
                            >
                                <Switch>
                                    <Route
                                        path='/graphManagement'
                                        component={GraphList}
                                    />
                                    <Route
                                        path='/graphAnalysis'
                                        component={GraphDashBoard}
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
