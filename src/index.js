import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Earth from './pages/Earth'
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
            <Provider store={createStore(reducers, middleware)}>
                <Router>
                    <div>
                        <Switch>
                            <Route path='/Earth' component={Earth} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
