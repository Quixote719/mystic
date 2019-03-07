import React from 'react'
import './app.less'

class App extends React.Component {
    render() {
        console.warn('Welcome to Jupiter')
        return (
            <div className='App'>
                <a className='App-intro' href='http://www.pewresearch.org/'>
                    皮尤中心
                </a>
            </div>
        )
    }
}

export default App
