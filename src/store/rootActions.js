//
// import exprDataActions from './../experiment/data/actions';
//
// export const REQ_GET = '请求获取接口';
// export const REC_ALL_DATA_TYPE = '请求获取所有字段类型成功';
// export const ERR_ALL_DATA_TYPE = '请求获取所有字段类型失败';
// export const getAllDataType = (status, param) => {
//     switch (status){
//         case 'request':
//             return {type: REQ_GET, asset: 'dataType'};
//         case 'receive':
//             return {type: REC_ALL_DATA_TYPE, typeList: param};
//         case 'error':
//             return {type: ERR_ALL_DATA_TYPE, error: param};
//     }
// };
//
// export const REC_UDF_DESC = '请求UDF详情成功';
// export const ERR_UDF_DESC = '请求UDF详情失败';
// export const getUDFDesc = (status, param) => {
//     switch (status){
//         case 'request':
//             return {type: REQ_GET, asset: 'udfDesc', udfName: param};
//         case 'receive':
//             return {type: REC_UDF_DESC, ...param};
//         case 'error':
//             return {type: ERR_UDF_DESC, error: param};
//     }
// };
//
// export const REC_ALL_UDFS = '请求获取所有UDF成功';
// export const ERR_ALL_UDFS = '请求获取所有UDF失败';
// export const getAllUDF = (status, param) => {
//     switch (status){
//         case 'request':
//             return {type: REQ_GET, asset: 'udf'};
//         case 'receive':
//             return {type: REC_ALL_UDFS, udfList: param};
//         case 'error':
//             return {type: ERR_ALL_UDFS, error: param};
//     }
// };
//
// export const TOGGLE_SIDER = '展开/收起左侧导航栏';
// export const toggleSider = (isCollapsed) => ({type: TOGGLE_SIDER, isCollapsed});
//
export function initActions() {
    // dispatch(getAllUDF('request'));
    // dispatch(getAllDataType('request'));
    // dispatch(exprDataActions.fetchComponentList('request'));
}
