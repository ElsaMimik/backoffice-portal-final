import { IError } from '@/models/interfaces/error';
import EventBus from '@/utilities/event-bus';


/**
 * axios error handler
 * @author rourou
 * @description response success
 */
const responseSuccess = (response: any) => {
    return response;
};

/**
 * axios error handler
 * @author rourou
 * @description response fail
 */
const responseFail = (error: any) => {
    if (error.response) {
        err.code = error.response.status;
        err.message = error.response.statusText;
    } else {
        err.message = JSON.stringify(error);
    }
    EventBus.$emit('api-error', err);
    return Promise.reject(err);
};


/**
 * axios error handler
 * @author rourou
 * @description request success
 */

const requestSuccess = (config: any) => {
    return config;
};

/**
 * axios error handler
 * @author rourou
 * @description request fail
 */
const requestFail = (error: any) => {
    // '请求超时!'
    return Promise.reject(error);
};

const err: IError =
{
    code: '',
    message: '',
    traceId: '',

};

export { requestSuccess, requestFail, responseSuccess, responseFail };