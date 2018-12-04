import React from 'react'
import './app.less'

class App extends React.Component {
    render() {
        /* eslint-disable no-alert, no-console */
        alert(7)
        console.log(33)
        /* eslint-enable no-alert, no-console */
        // eslint-disable-next-line
        alert('foo');
        return (
            <div className='App'>
                <div className='block' />
                <p className='App-intro'>
                    In silience and hope will be your strength
                </p>
                <p className='App-intro'>
                    Right now three things remain: faith, hope, and love
                </p>
                <div className='deck' />
            </div>
        )
    }
}

export default App
