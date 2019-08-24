import React from 'react'
import { Input, Select, Tabs, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import SubInput from './rightSubInput'
import styles from './index.less'
const { TabPane } = Tabs
const Option = Select.Option

class EntityEventSider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleTabChange() {}

    handleSearch() {}

    renderTabContent() {
        return (
            <div style={{ width: '95%', margin: 'auto' }}>
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
        return (
            <div className={styles.entitySider}>
                <div
                    style={{
                        fontSize: '1.2em',
                        fontWeight: 800,
                        margin: '0 10px'
                    }}
                >
                    实体/事件查询
                </div>
                <Tabs defaultActiveKey='entity' onChange={this.handleTabChange}>
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
        )
    }
}

export default withRouter(EntityEventSider)
