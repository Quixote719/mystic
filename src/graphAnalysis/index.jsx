import React from 'react'
import GraphAnalysisSider from '../shared/sider/graphAnalysisSider'
import EntityEventSider from './entityEventSider'
import { withRouter } from 'react-router-dom'

class GraphAnalysis extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            analyzeStatus: null
        }
    }

    getPath(param) {
        const pathname = this.props.history.location.pathname
        return pathname.split('/').find(item => item === param)
    }

    render() {
        this.getPath()
        return (
            <div>
                <GraphAnalysisSider />
                {this.getPath('Search') && <EntityEventSider />}
            </div>
        )
    }
}

export default withRouter(GraphAnalysis)
