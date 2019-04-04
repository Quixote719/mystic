import React from 'react'
import './app.less'
import { Skeleton } from 'antd'
class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <p className='App-intro'>welcome to Mars</p>
                <Skeleton />
            </div>
        )
    }
}

export default App
