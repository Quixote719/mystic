import React, { PureComponent } from 'react'
import ReactEcharts from 'echarts-for-react'
import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'

class EventChart extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    getOption() {
        const PlainNum = 5
        const DagNum = 9
        const PipelineNum = 12
        const totalNum = PlainNum + DagNum + PipelineNum
        const options = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'horizontal',
                x: 'right',
                data: ['普通类型', 'DAG模型', '链式模型']
            },
            graphic: [
                {
                    type: 'text',
                    left: 'center',
                    top: '40%',
                    style: {
                        text: totalNum,
                        fontSize: 35,
                        textAlign: 'center',
                        fill: '#000000',
                        width: 50,
                        height: 50
                    }
                },
                {
                    type: 'text',
                    left: 'center',
                    top: '55%',
                    style: {
                        text: '模型总数',
                        fill: '#000',
                        width: 30,
                        height: 30,
                        fontSize: 14,
                        fontWeight: 500
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: PlainNum,
                            name: '普通类型',
                            category: 'algorithm',
                            itemStyle: {
                                normal: { color: '#8882E0' },
                                emphasis: { color: '#8882E0' }
                            }
                        },
                        {
                            value: DagNum,
                            name: 'DAG模型',
                            category: 'dag',
                            itemStyle: {
                                normal: { color: '#E6EEFF' },
                                emphasis: { color: '#E6EEFF' }
                            }
                        },
                        {
                            value: PipelineNum,
                            name: '链式模型',
                            category: 'pipeline',
                            itemStyle: {
                                normal: { color: '#4967F4' },
                                emphasis: { color: '#4967F4' }
                            }
                        }
                    ]
                }
            ]
        }
        return options
    }

    componentDidMount() {}

    onChartReady = () => {}

    onChartClick = param => {
        if (param.data && param.data.category) {
            this.props.onRedirect(param.data.category)
        }
    }

    render() {
        let onEvents = {
            click: this.onChartClick,
            mouseover: this.onChartHover,
            mouseout: this.onChartOut,
            legendselectchanged: this.onChartLegendselectchanged
        }
        return (
            <div className='examples'>
                <div className='parent'>
                    {/*<label> Chart With event <strong> onEvents </strong>（{this.state.cnt}）: (Click the chart, and watch the console)</label>*/}
                    <ReactEcharts
                        option={this.getOption()}
                        style={{ height: 360, margin: 40 }}
                        onChartReady={this.onChartReady}
                        onEvents={onEvents}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = dispatch => ({
    onRedirect: param => {
        dispatch(routerActions.push(`/${param}`))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventChart)
