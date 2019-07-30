import React from 'react'
// import * as algorithm from '../algorithm/index'
import { Steps, Icon } from 'antd'
import styles from './app.less'

const { Step } = Steps

class App extends React.Component {
    render() {
        return (
            <div className={styles.App}>
                <p className={styles.appIntro}>welcome to Earth</p>
                <Steps style={{ width: 1400, margin: 'auto' }}>
                    <Step
                        status='finish'
                        title='Login'
                        icon={<Icon type='user' />}
                    />
                    <Step
                        status='finish'
                        title='Verification'
                        icon={<Icon type='solution' />}
                    />
                    <Step
                        status='finish'
                        title='Pay'
                        icon={<Icon type='loading' />}
                    />
                    <Step
                        status='wait'
                        title='Done'
                        icon={<Icon type='smile-o' />}
                    />
                </Steps>
            </div>
        )
    }
}

export default App
