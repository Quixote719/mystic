import React from 'react'
import GraphAnalysisSider from '../shared/sider/graphAnalysisSider'
import GremlinSearchSider from './gremlinSearchSider'
import EntityEventSider from './entityEventSider'
import MiningAlgorithmSider from './miningAlgorithmSider'
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
                {this.getPath('Gremlin') && <GremlinSearchSider />}
                {this.getPath('Search') && <EntityEventSider />}
                {this.getPath('Algorithm') && <MiningAlgorithmSider />}
            </div>
        )
    }
}

export default withRouter(GraphAnalysis)
