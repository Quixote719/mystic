import React from 'react'
import { Table, Button, Menu, Input, Icon, Modal } from 'antd'
import Breadcrumb from '../shared/breadCrumb'
import moment from 'moment'
import { knowledgeGraphData } from '../util/mock'
import styles from './index.less'

const Search = Input.Search
// const COL_DEFAULT_WIDTH = 180

class GraphList extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            searchVal: '',
            totalSize: 10,
            currentPage: 1,
            pageSize: 10,
            modelList: [],
            graphNameOrder: 'desc',
            entityNumOrder: 'desc',
            eventNumOrder: 'desc',
            uploadTimeOrder: 'desc',
            showDeleteModal: false,
            showUploadModal: false,
            targetRecord: null
        }
        this.fieldFillingTable = [
            {
                title: () => {
                    return (
                        <div>
                            <span>图谱名称</span>
                        </div>
                    )
                },
                sorter: true,
                dataIndex: 'graphName',
                key: 'graphName'
                // width: COL_DEFAULT_WIDTH
            },
            {
                title: () => {
                    return (
                        <div>
                            <span>实体数</span>
                        </div>
                    )
                },
                sorter: true,
                dataIndex: 'entityNum',
                key: 'entityNum'
                // width: COL_DEFAULT_WIDTH
            },
            {
                title: () => {
                    return (
                        <div>
                            <span>事件数</span>
                        </div>
                    )
                },
                sorter: true,
                dataIndex: 'eventNum',
                key: 'eventNum'
                // width: COL_DEFAULT_WIDTH
            },
            {
                title: () => {
                    return (
                        <div>
                            <span>关系数</span>
                        </div>
                    )
                },
                sorter: true,
                dataIndex: 'uploadTime',
                key: 'uploadTime'
                // width: COL_DEFAULT_WIDTH
            },
            {
                title: '状态',
                dataIndex: 'enableStatus',
                key: 'enableStatus',
                render: (text, record) => {
                    return (
                        <div>
                            {record.enableStatus === '启用' ? (
                                <Icon
                                    type='check-circle'
                                    theme='twoTone'
                                    twoToneColor='#43CD80'
                                />
                            ) : (
                                <Icon type='stop' />
                            )}
                            <span style={{ margin: '0 5px' }}>
                                {record.enableStatus}
                            </span>
                        </div>
                    )
                }
                // width: COL_DEFAULT_WIDTH
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime'
                // width: COL_DEFAULT_WIDTH
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: () => {
                    return (
                        <div>
                            <Icon
                                className={styles.operationIcon}
                                type='profile'
                            />
                            <Icon
                                className={styles.operationIcon}
                                type='sync'
                                spin
                            />
                            <Icon
                                className={styles.operationIcon}
                                type='play-circle'
                            />
                            <Icon
                                className={styles.operationIcon}
                                type='inbox'
                            />
                        </div>
                    )
                }
            }
        ]
    }

    componentDidMount = () => {}

    getMenu = record => {
        return (
            <Menu>
                <Menu.Item key='0'>
                    <div onClick={() => this.exportDAG(record)}>导出DAG</div>
                </Menu.Item>
                <Menu.Item key='1'>
                    <div
                        onClick={() => {
                            this.exportAttachment(record)
                        }}
                    >
                        导出附件
                    </div>
                </Menu.Item>
                <Menu.Item key='2'>
                    <div
                        onClick={() => {
                            this.modifyModel(record)
                        }}
                    >
                        修改
                    </div>
                </Menu.Item>
                <Menu.Item key='3'>
                    <div
                        onClick={() => {
                            this.deleteModel(record)
                        }}
                    >
                        删除
                    </div>
                </Menu.Item>
            </Menu>
        )
    }

    exportDAG = () => {}

    exportAttachment = () => {}

    deleteModel = () => {}

    pageChange(page) {
        this.setState({ currentPage: page })
    }

    getOutputColumns = () => {
        let res = this.state.modelList.map((item, key) => {
            return {
                key: key,
                modelId: item.modelId,
                graphName: item.graphName,
                entityNum: item.entityNum,
                eventNum: item.eventNum,
                business: item.business,
                uploadTime: moment(item.uploadTime).format(
                    'YYYY-MM-DD HH:mm:ss'
                ),
                enableStatus: item.enableStatus ? '启用' : '禁用',
                operation: 'void',
                id: key
            }
        })
        return res
    }

    renderEditBlock = () => {
        return (
            <div style={{ margin: '15px 0' }}>
                <Button onClick={this.modelUpload}>
                    <Icon type='upload' /> 新建图谱
                </Button>
                <Search
                    className={'tableSearch'}
                    placeholder='input search text'
                    onSearch={val => this.searchModel(val)}
                    style={{ width: 200, float: 'right' }}
                />
            </div>
        )
    }

    renderModelTable = () => {
        knowledgeGraphData.forEach(item => (item.key = item.modelId))
        return (
            <div>
                <Table
                    className={styles.modelTable}
                    style={{ zoom: 1 }}
                    dataSource={knowledgeGraphData}
                    columns={this.fieldFillingTable}
                    onChange={this.handleTableChange}
                    pagination={{
                        showTotal: total => `共${total}条`,
                        showQuickJumper: true,
                        showSizeChanger: true,
                        // onShowSizeChange: this.onShowSizeChange,
                        total: this.state.totalSize,
                        pageSize: this.state.pageSize,
                        current: this.state.currentPage,
                        onChange: page => {
                            this.pageChange(page)
                        }
                    }}
                    bordered
                />
            </div>
        )
    }

    onConfirmDelete() {
        this.setState({ showDeleteModal: false })
        if (!this.state.targetRecord) {
            return
        }
    }

    onCancelDelete() {
        this.setState({ showDeleteModal: false })
    }

    onCancelUpload() {
        this.setState({ showUploadModal: false })
    }

    renderUploadModal() {
        return (
            <Modal
                title='新建图谱'
                visible={true}
                onCancel={() => this.onCancelUpload()}
                width={500}
                footer={null}
                className={styles.resultModal}
                maskClosable={false}
            >
                <ModelUpload
                    closeModal={() => this.onCancelUpload()}
                    refreshModelList={() => this.refreshModelList()}
                />
            </Modal>
        )
    }

    renderDeleteModal() {
        return (
            <Modal
                title='删除模型'
                visible={true}
                onCancel={() => this.onCancelDelete()}
                width={400}
                footer={null}
                className={styles.resultModal}
                maskClosable={false}
            >
                <div style={{ height: 50 }}>
                    <Button
                        style={{ float: 'right', margin: '15px' }}
                        onClick={() => this.onCancelDelete()}
                    >
                        取消
                    </Button>
                    <Button
                        type='primary'
                        style={{ float: 'right', margin: '15px' }}
                        onClick={() => this.onConfirmDelete()}
                    >
                        确认
                    </Button>
                </div>
            </Modal>
        )
    }

    render() {
        return (
            <div className={styles.pageContent}>
                <Breadcrumb stringArr={[{ name: '图谱管理' }]} />
                <div className={styles.container}>
                    {this.renderEditBlock()}
                    {this.renderModelTable()}
                    {this.state.showDeleteModal && this.renderDeleteModal()}
                    {this.state.showUploadModal && this.renderUploadModal()}
                </div>
            </div>
        )
    }
}

export default GraphList
