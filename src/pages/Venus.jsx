import React from 'react'
import styles from './app.less'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            venus: 2
        }
    }
    formValidation = () => {
        let a = [1, 2, 3]
        let b = [7, 8, 9]
        const c = [...a, ...b]
        return c
    }
    render() {
        console.warn(this.formValidation())
        return (
            <div className={styles.App}>
                <p className={styles.appIntro}>welcome to Venus</p>
            </div>
        )
    }
}

export default App
