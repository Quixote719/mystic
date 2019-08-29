import React from 'react'
import { connect } from 'react-redux'
import { Input, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import * as graphAnalysisActions from './actions'
// import SubInput from './rightSubInput'
import styles from './index.less'
const { TextArea } = Input

class GremlinSearchSider extends React.Component {
    constructor(props) {
        super(props)
    }

    toggleCollapsed = () => {
        this.props.onToggle()
    }

    render() {
        const siderStatus = this.props.GREMLIN
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
                            Gremlin语句查询
                        </span>
                    }
                    <Icon
                        className={styles.toggleIcon}
                        onClick={this.toggleCollapsed}
                        type={siderStatus ? 'double-right' : 'double-left'}
                    />
                </div>
                {
                    <div
                        className={styles.anaylzeSiderContent}
                        style={{ display: !siderStatus ? 'block' : 'none' }}
                    >
                        <TextArea autosize={{ minRows: 5 }} />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { graphAnalysisReducer } = state
    const { toggleSiderCollapsed } = graphAnalysisReducer
    const { GREMLIN } = toggleSiderCollapsed
    return {
        GREMLIN
    }
}

const mapDispatchToProps = dispatch => ({
    onToggle: () => {
        dispatch(graphAnalysisActions.toggleSiderCollapsed('GREMLIN'))
    }
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(GremlinSearchSider)
)
