import React from 'react'
import styles from './index.less'
import { Button, Icon } from 'antd'
import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'

class Breadcrumb extends React.Component {
    render() {
        let {
            stringArr = [],
            isButtonShow1,
            buttonCallbak1,
            buttonText1,
            isButtonShow2,
            buttonCallbak2,
            buttonText2,
            onChangeSubPage
        } = this.props
        let text1 = buttonText1 || '返回'
        let text2 = buttonText2 || '移除'

        let stringHalfList = ''
        if (stringArr.length > 1) {
            stringHalfList = stringArr
                .slice(0, stringArr.length - 1)
                .map(strObj => {
                    return (
                        <span>
                            <span
                                className={strObj.url && styles.stringHalfList}
                                onClick={() => {
                                    onChangeSubPage(strObj.url)
                                }}
                            >
                                {strObj.name}
                                <span> / </span>
                            </span>
                        </span>
                    )
                })
        }

        let stringLast1 = () => {
            return <span>{stringArr[stringArr.length - 1].name}</span>
        }
        return (
            <div className={styles.container}>
                <div className={styles.left}>
                    {isButtonShow1 && (
                        <Button
                            title={text1}
                            onClick={buttonCallbak1}
                            style={{ fontSize: '16px', marginRight: '16px' }}
                        >
                            <Icon type='arrow-left' />
                        </Button>
                    )}
                    {stringHalfList}
                    {stringLast1()}
                </div>

                <div className={styles.right}>
                    {isButtonShow2 && (
                        <Button
                            title={text2}
                            onClick={buttonCallbak2}
                            style={{ fontSize: '16px' }}
                        >
                            <Icon type='delete' />
                        </Button>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = dispatch => ({
    onChangeSubPage: url => {
        if (url) {
            dispatch(routerActions.push(url))
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Breadcrumb)
