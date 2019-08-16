import React from 'react'
import Breadcrumb from '../shared/breadCrumb'
export default class GraphDashBoard extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Breadcrumb stringArr={[{ name: '图谱分析' }]} />
            </div>
        )
    }
}
