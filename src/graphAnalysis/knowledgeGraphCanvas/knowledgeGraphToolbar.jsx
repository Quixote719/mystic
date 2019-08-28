import React from 'react'
import { Select, Button, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import styles from '../index.less'

class KnowledgeGraphCanvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    selectGraph() {
        console.warn('007')
    }

    renderGraphSelect() {
        return (
            <Select
                style={{ width: 280 }}
                allowClear={true}
                onChange={this.selectGraph}
                defaultValue={[
                    'Finance',
                    'Transportation',
                    'Police',
                    'General'
                ]}
                disabled={false}
            >
                <Option value={'Finance'} key={'ID'}>
                    金融知识图谱
                </Option>
                <Option value={'Transportation'} key={'gender'}>
                    交通知识图谱
                </Option>
                <Option value={'Police'} key={'name'}>
                    公安知识图谱
                </Option>
                <Option value={'General'} key={'race'}>
                    通用知识图谱
                </Option>
            </Select>
        )
    }

    renderStatusBar() {
        const entity = 29
        const event = 17
        const relation = 66
        return (
            <div>
                <div className={styles.statusBtn}>实体: {entity}</div>
                <div className={styles.statusBtn}>事件: {event}</div>
                <div className={styles.statusBtn}>关系: {relation}</div>
            </div>
        )
    }

    renderNodeBtn() {
        return (
            <div>
                <Button>
                    <Icon type='thunderbolt' />
                </Button>
                <Button>
                    <Icon type='trophy' />
                </Button>
                <Button>
                    <Icon type='gateway' />
                </Button>
                <Button>
                    <Icon type='deployment-unit' />
                </Button>
            </div>
        )
    }

    renderOperationBtn() {
        return (
            <div>
                <Button>撤销渲染</Button>
                <Button>框选</Button>
                <Button>设置</Button>
                <Button>删除</Button>
            </div>
        )
    }

    render() {
        return (
            <div className={styles.canvasToolBar}>
                {this.renderGraphSelect()}
                {this.renderStatusBar()}
                {this.renderNodeBtn()}
                {this.renderOperationBtn()}
            </div>
        )
    }
}

export default withRouter(KnowledgeGraphCanvas)
