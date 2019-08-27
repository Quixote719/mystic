import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Sider from './shared/sider/knowledgeGraphSider'
import GraphAnalysis from './graphAnalysis'
import GraphManagement from './graphManagement'
import GraphDashBoard from './graphManagement/graphDashboard'
import { Provider } from 'react-redux'
import store from './store'
const temp = module
if (temp.hot) {
    temp.hot.accept()
}

class App extends React.PureComponent {
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Provider store={store}>
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
                                    <Route
                                        path='/graphAnalysis/Gremlin/:id'
                                        component={GraphAnalysis}
                                    />
                                    <Route
                                        path='/graphAnalysis/Search/:id'
                                        component={GraphAnalysis}
                                    />
                                    <Route
                                        path='/graphAnalysis/Algorithm/:id'
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
