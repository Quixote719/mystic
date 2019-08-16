import React from 'react'
import Breadcrumb from '../shared/breadCrumb'
import EntityChart from './chartModule/entityChart'
import EventChart from './chartModule/eventChart'
import RelationChart from './chartModule/relationChart'
import styles from './index.less'

export default class GraphDashBoard extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <Breadcrumb
                    stringArr={[{ name: '图谱列表' }, { name: '图谱概况' }]}
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
