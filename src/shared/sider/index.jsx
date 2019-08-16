import React from 'react'
import { Menu, Icon, Button } from 'antd'
import { withRouter } from 'react-router-dom'

class Sider extends React.Component {
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

    graphManagement = param => {
        this.props.history.push(param)
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
                <Button onClick={this.toggleCollapsed}>
                    <Icon
                        type={
                            this.state.collapsed ? 'menu-unfold' : 'menu-fold'
                        }
                    />
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode='inline'
                    // theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item
                        key='1'
                        onClick={() => this.graphManagement('/graphManagement')}
                    >
                        <Icon type='pie-chart' />
                        <span>图谱管理</span>
                    </Menu.Item>
                    <Menu.Item
                        key='2'
                        onClick={() => this.graphManagement('/graphAnalysis')}
                    >
                        <Icon type='pie-chart' />
                        <span>图谱分析</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(Sider)
