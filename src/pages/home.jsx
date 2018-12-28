import React from 'react'
import './app.less'
import { Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div className='planetBox'>
                <div>
                    <Link to='/Mercury'>Mercury</Link>
                </div>
                <div>
                    <Link to='/Venus'>Venus</Link>
                </div>
                <div>
                    <Link to='/Earth'>Earth</Link>
                </div>
            </div>
        )
    }
}

export default App
