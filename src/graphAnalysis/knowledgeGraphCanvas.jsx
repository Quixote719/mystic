import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './index.less'

class KnowledgeGraphCanvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div id='KnowledgeGraphCanvas' className={styles.graphCanvas} />
    }
}

export default withRouter(KnowledgeGraphCanvas)
