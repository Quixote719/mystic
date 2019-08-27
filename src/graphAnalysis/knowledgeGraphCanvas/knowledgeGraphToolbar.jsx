import React from 'react'
import { Select, Button, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import styles from '../index.less'

class KnowledgeGraphCanvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    renderGraphSelect() {
        return (
            <Select
                style={{ width: 280 }}
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
        )
    }

    renderStatusBar() {
        return (
            <div>
                <div className={styles.statusBtn}>实体</div>
                <div className={styles.statusBtn}>事件</div>
                <div className={styles.statusBtn}>关系</div>
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
