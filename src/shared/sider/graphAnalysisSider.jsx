import React from 'react'
import { Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

class GraphAnalysisSider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }

    graphManagement = param => {
        let id = 'o12oa9'
        this.props.history.push(`${param}/${id}`)
    }

    render() {
        return (
            <div
                style={{
                    display: 'inline-block',
                    background: '#FFFFFF',
                    minHeight: '100vh'
                }}
            >
                <Menu
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode='inline'
                    // theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item
                        key='1'
                        onClick={() =>
                            this.graphManagement('/graphAnalysis/Gremlin')
                        }
                    >
                        <Icon type='code' />
                    </Menu.Item>
                    <Menu.Item
                        key='2'
                        onClick={() =>
                            this.graphManagement('/graphAnalysis/Search')
                        }
                    >
                        <Icon type='search' />
                    </Menu.Item>
                    <Menu.Item
                        key='3'
                        onClick={() =>
                            this.graphManagement('/graphAnalysis/Algorithm')
                        }
                    >
                        <Icon type='global' />
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(GraphAnalysisSider)
