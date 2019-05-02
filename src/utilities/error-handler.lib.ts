import { IError } from '@/models/interfaces/error'
import EventBus from '@/utilities/event-bus'

const responseSuccess = (response: any) => {
    return response;
}

/**
 * axios error handler
 * @author rourou
 * @description EventBus通知component
 */
const responseFail = (error: any) => {
    if (error.response) {
        err.code = error.response.status;
        err.message = error.response.statusText;
    } else {
        err.message = JSON.stringify(error);
    }
    EventBus.$emit('api-error', err);
    return Promise.reject(error);
}

const requestSuccess = (config: any) => {
    return config;
}

const requestFail = (err: any) => {
    // '请求超时!'
    return Promise.reject(err);
}

export let err: IError =
{
    code: '',
    message: '',
    traceId: '',

};

export { requestSuccess, requestFail, responseSuccess, responseFail }