import React from 'react'
import { connect } from 'react-redux'
import { Input, Select, Tabs, Button, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import * as graphAnalysisActions from './action'
import SubInput from './rightSubInput'
import styles from './index.less'
const { TabPane } = Tabs
const Option = Select.Option

class EntityEventSider extends React.Component {
    constructor(props) {
        super(props)
    }

    toggleCollapsed = () => {
        this.props.onToggle()
    }

    handleTabChange() {}

    handleSearch() {}

    renderTabContent() {
        return (
            <div className={styles.anaylzeSiderContent}>
                <SubInput title='类型' isRequired={true} key='type'>
                    <Select style={{ width: '100%' }} disabled={false}>
                        <Option value={'person'} key={'person'}>
                            人员
                        </Option>
                        <Option value={'vehicle'} key={'vehicle'}>
                            车辆
                        </Option>
                    </Select>
                </SubInput>
                <SubInput title='字段' isRequired={true} key='param'>
                    <Select
                        style={{ width: '100%' }}
                        mode='multiple'
                        allowClear={true}
                        defaultValue={['ID', 'gender', 'name', 'race']}
                        disabled={false}
                    >
                        <Option value={'ID'} key={'ID'}>
                            ID
                        </Option>
                        <Option value={'gender'} key={'gender'}>
                            性别
                        </Option>
                        <Option value={'name'} key={'name'}>
                            姓名
                        </Option>
                        <Option value={'race'} key={'race'}>
                            民族
                        </Option>
                    </Select>
                </SubInput>
                <SubInput title='关键词' isRequired={true} key='keyword'>
                    <Input />
                </SubInput>
            </div>
        )
    }

    render() {
        const siderStatus = this.props.ENTITY_EVENT
        return (
            <div
                className={styles.graphAnalysisSider}
                style={{ width: siderStatus ? '50px' : '300px' }}
            >
                <div className={styles.anaylzeSiderHeader}>
                    {!siderStatus && (
                        <span
                            style={{
                                margin: '0 10px',
                                display: !siderStatus ? 'inline-block' : 'none'
                            }}
                        >
                            实体/事件查询
                        </span>
                    )}
                    <Icon
                        className={styles.toggleIcon}
                        onClick={this.toggleCollapsed}
                        type={siderStatus ? 'double-right' : 'double-left'}
                    />
                </div>
                {
                    <div style={{ display: !siderStatus ? 'block' : 'none' }}>
                        <Tabs
                            defaultActiveKey='entity'
                            onChange={this.handleTabChange}
                        >
                            <TabPane tab={'实体'} key='entity'>
                                {this.renderTabContent()}
                            </TabPane>
                            <TabPane tab={'事件'} key='event'>
                                {this.renderTabContent()}
                            </TabPane>
                        </Tabs>
                        <Button
                            className={styles.searchBtn}
                            onClick={this.handleSearch}
                        >
                            搜索
                        </Button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { graphAnalysisReducer } = state
    const { toggleSiderCollapsed } = graphAnalysisReducer
    const { ENTITY_EVENT } = toggleSiderCollapsed
    return {
        ENTITY_EVENT
    }
}

const mapDispatchToProps = dispatch => ({
    onToggle: () => {
        dispatch(graphAnalysisActions.toggleSiderCollapsed('ENTITY_EVENT'))
    }
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(EntityEventSider)
)
