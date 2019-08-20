import React from 'react'
import GraphAnalysisSider from '../shared/sider/graphAnalysisSider'

export default class GraphDashBoard extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <GraphAnalysisSider />
            </div>
        )
    }
}
