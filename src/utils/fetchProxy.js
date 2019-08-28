// import { message } from 'antd'
// import {HttpError} from './Error';
// import * as lib from 'parthenon-lib';

// const errTip = lib.throttle(message.error, 3000);

const doFetch = (url, param = {}) => {
    let method = param.method || 'get'
    let headers = {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
        // 'Cache-Control': 'max-age=1200',
        // 'Pragma': 'max-age=1200'
    }

    if (method.toLowerCase() === 'get') {
        // return fetch(url, {headers, credentials: 'include'}).catch(err=>{
        return fetch(url, { headers }).catch(err => {
            console.error(err)
        })
    } else {
        let payload = param.payload || {}
        let contentType = param.contentType || null
        if (!contentType) {
            let params = new FormData()
            for (let key in payload) {
                params.append(`${key}`, payload[key])
            }
            return fetch(url, {
                method: method.toLowerCase(),
                mode: 'cors',
                body: params
            }).catch(err => {
                console.error(err)
            })
        }
        payload = JSON.stringify(payload)

        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': contentType
            },
            // credentials: 'include',
            mode: 'cors',
            body: payload
        }).catch(err => {
            console.error(err)
        })
    }
}

const fetchProxy = async (url, param) => {
    try {
        let res = await doFetch(url, param)
        if (res.status !== 200) {
            let data = {}
            try {
                data = await res.json()
            } catch (e) {
                throw new Error('服务器运行异常')
            }
            switch (res.status) {
                case 404:
                    throw new Error('服务器地址或资源不存在')
                case 400:
                    throw new Error(
                        data.message ? data.message : '接口请求异常'
                    )
                default:
                    throw new Error(
                        data.message ? data.message : '服务器运行异常'
                    )
            }
        }
        let data = await res.json()
        return data
    } catch (err) {
        //此处try-catch只处理 HttpError，其余Error交给外层的try-catch
        // errTip(err.toString());
        throw err
    }
}

export default fetchProxy
