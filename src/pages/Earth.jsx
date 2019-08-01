import React from 'react'
// import * as algorithm from '../algorithm/index'
import { Steps, Icon } from 'antd'
import styles from './app.less'

const { Step } = Steps

class App extends React.Component {
    render() {
        let currentStep = 2
        return (
            <div className={styles.App}>
                <p className={styles.appIntro}>welcome to Earth</p>
                <Steps
                    style={{ width: 1400, margin: 'auto' }}
                    size='small'
                    current={currentStep}
                >
                    <Step
                        title='数据库配置'
                        icon={
                            currentStep > 0 ? (
                                <Icon type='check-circle' theme='filled' />
                            ) : (
                                <Icon type='edit' theme='filled' />
                            )
                        }
                    />
                    <Step
                        title='元数据上传'
                        icon={
                            currentStep > 1 ? (
                                <Icon type='check-circle' theme='filled' />
                            ) : (
                                <Icon type='edit' theme='filled' />
                            )
                        }
                    />
                    <Step
                        title='图谱数据编辑'
                        icon={
                            currentStep > 2 ? (
                                <Icon type='check-circle' theme='filled' />
                            ) : (
                                <Icon type='edit' theme='filled' />
                            )
                        }
                    />
                </Steps>
            </div>
        )
    }
}

export default App
