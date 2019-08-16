import React from 'react'
import Breadcrumb from '../shared/breadCrumb'
import EntityChart from './chartModule/entityChart'
import EventChart from './chartModule/eventChart'
import RelationChart from './chartModule/relationChart'
import { withRouter } from 'react-router-dom'
import styles from './index.less'

class GraphDashBoard extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    goBack(param) {
        this.props.history.push(param)
    }

    render() {
        return (
            <div>
                <Breadcrumb
                    stringArr={[
                        { name: '图谱列表', url: '/graphManagement' },
                        { name: '图谱概况' }
                    ]}
                    isButtonShow1={true}
                    buttonCallbak1={() => this.goBack('/graphManagement')}
                    buttonText1='返回DAG模型'
                />
                <div className={styles.dashboardPanel}>
                    <div className={styles.chartCard}>
                        <EntityChart />
                    </div>
                    <div className={styles.chartCard}>
                        <EventChart />
                    </div>
                    <div className={styles.chartCard}>
                        <RelationChart />
                    </div>
                    <div className={styles.statisticCard} />
                </div>
            </div>
        )
    }
}

export default withRouter(GraphDashBoard)
