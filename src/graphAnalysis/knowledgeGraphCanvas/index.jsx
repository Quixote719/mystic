import React from 'react'
import KnowledgeGraphToolBar from './knowledgeGraphToolBar'
import { withRouter } from 'react-router-dom'
import styles from '../index.less'

class KnowledgeGraphCanvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={styles.canvasBlock}>
                <KnowledgeGraphToolBar />
                <div id='KnowledgeGraphCanvas' className={styles.graphCanvas} />
            </div>
        )
    }
}

export default withRouter(KnowledgeGraphCanvas)
