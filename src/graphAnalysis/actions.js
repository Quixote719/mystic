export const TOGGLE_GREMLIN_SIDER = '切换图谱分析GREMLIN侧边栏展开状态'
export const TOGGLE_ENTITY_EVENT_SIDER =
    '切换图谱分析ENTITY_EVENT侧边栏展开状态'
export const TOGGLE_ALGORITHM_SIDER = '切换图谱分析ALGORITHM侧边栏展开状态'
export const SELECT_KNOWLEDGE_GRAPH = '选择知识图谱'

export const toggleSiderCollapsed = status => {
    switch (status) {
        case 'GREMLIN':
            return {
                type: TOGGLE_GREMLIN_SIDER
            }
        case 'ENTITY_EVENT':
            return {
                type: TOGGLE_ENTITY_EVENT_SIDER
            }
        case 'ALGORITHM':
            return {
                type: TOGGLE_ALGORITHM_SIDER
            }
        default:
            return {
                type: ''
            }
    }
}

export const changeKnowledgeGraph = (param = null) => {
    return {
        type: SELECT_KNOWLEDGE_GRAPH,
        param
    }
}
