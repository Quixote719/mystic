import { message } from 'antd'

class HttpError extends Error {
    constructor(_message) {
        super(_message)
        this.name = 'HttpError'
    }

    toString = () => {
        return this.message
    }
}

const handleError = (err, addition = '') => {
    if (err.name !== 'HttpError' || addition) {
        message.error(addition + err.toString())
    }
}

export { HttpError, handleError }
