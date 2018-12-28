import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom'
import Home from './pages/home'
import Mercury from './pages/Mercury'
import Venus from './pages/Venus'
import Earth from './pages/Earth'

class Router extends React.PureComponent {
    render() {
        return (
            <BrowserRouter history={browserHistory}>
                <div>
                    <Home />
                    <Switch>
                        <Route path='/Mercury' component={Mercury} />
                        <Route path='/Venus' component={Venus} />
                        <Route path='/Earth' component={Earth} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Router />, document.getElementById('root'))
