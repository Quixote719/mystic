import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import * as graphAnalysisActions from './actions'
// import SubInput from './rightSubInput'
import styles from './index.less'
// const { TextArea } = Input

class MiningAlgorithmSider extends React.Component {
    constructor(props) {
        super(props)
    }

    toggleCollapsed = () => {
        this.props.onToggle()
    }

    render() {
        const siderStatus = this.props.ALGORITHM
        return (
            <div
                className={styles.graphAnalysisSider}
                style={{ width: siderStatus ? '50px' : '300px' }}
            >
                <div className={styles.anaylzeSiderHeader}>
                    {
                        <span
                            style={{
                                margin: '0 10px',
                                display: !siderStatus ? 'inline-block' : 'none'
                            }}
                        >
                            算法挖掘
                        </span>
                    }
                    <Icon
                        className={styles.toggleIcon}
                        onClick={this.toggleCollapsed}
                        type={siderStatus ? 'double-right' : 'double-left'}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { graphAnalysisReducer } = state
    const { toggleSiderCollapsed } = graphAnalysisReducer
    const { ALGORITHM } = toggleSiderCollapsed
    return {
        ALGORITHM
    }
}

const mapDispatchToProps = dispatch => ({
    onToggle: () => {
        dispatch(graphAnalysisActions.toggleSiderCollapsed('ALGORITHM'))
    }
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MiningAlgorithmSider)
)
