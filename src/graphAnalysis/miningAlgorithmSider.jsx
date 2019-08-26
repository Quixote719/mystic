import React from 'react'
import { Icon } from 'antd'
import { withRouter } from 'react-router-dom'
// import SubInput from './rightSubInput'
import styles from './index.less'
// const { TextArea } = Input

class MiningAlgorithmSider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div
                className={styles.graphAnalysisSider}
                style={{ width: this.state.collapsed ? '50px' : '300px' }}
            >
                <div className={styles.anaylzeSiderHeader}>
                    {!this.state.collapsed && (
                        <span style={{ margin: '0 10px' }}>算法挖掘</span>
                    )}
                    <Icon
                        className={styles.toggleIcon}
                        onClick={this.toggleCollapsed}
                        type={
                            this.state.collapsed
                                ? 'double-right'
                                : 'double-left'
                        }
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(MiningAlgorithmSider)
