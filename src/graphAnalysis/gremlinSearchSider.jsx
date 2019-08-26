import React from 'react'
import { Input, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
// import SubInput from './rightSubInput'
import styles from './index.less'
const { TextArea } = Input

class GremlinSearchSider extends React.Component {
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
                        <span style={{ margin: '0 10px' }}>
                            Gremlin语句查询
                        </span>
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
                {!this.state.collapsed && (
                    <div className={styles.anaylzeSiderContent}>
                        <TextArea autosize={{ minRows: 5 }} />
                    </div>
                )}
            </div>
        )
    }
}

export default withRouter(GremlinSearchSider)
