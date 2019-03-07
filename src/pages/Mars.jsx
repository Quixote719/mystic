import React from 'react'
import './app.less'
import { Button, Skeleton } from 'antd'
class App extends React.Component {
    render() {
        console.warn('Welcome to Mars')
        return (
            <div className='App'>
                <p className='App-intro'>welcome to Mars</p>
                <Skeleton />
                <Button>Update</Button>
            </div>
        )
    }
}

export default App
