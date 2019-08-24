import React from 'react'
import styles from './index.less'

class SubInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, isRequired = false, title = '' } = this.props
        return (
            <div className={styles.rightSubInput}>
                <div>
                    {isRequired && <span className={styles.isrequired}>*</span>}{' '}
                    {title}
                </div>
                <div className={styles.rightSubInputContent}>{children}</div>
            </div>
        )
    }
}

export default SubInput
