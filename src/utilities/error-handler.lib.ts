import { IError } from '@/models/interfaces/error';
import EventBus from '@/utilities/event-bus';


/**
 * axios error handler
 * @author rourou
 * @description response success
 */
const responseSuccess = (response: any) => {
	return Promise.resolve(response);
};

/**
 * axios error handler
 * @author rourou
 * @description response fail
 */
const responseFail = (errorData: any) => {
	if (errorData.response) {
		const { traceId, error } = <IError>errorData.response.data;
		if (traceId && error) { err = <IError>errorData.response.data; }
		else {
			const { status, data, statusText } = errorData.response;
			err.error.code = status;
			err.error.message = `${data} ${statusText}`;
		}
	} else {
		err.error.message = JSON.stringify(errorData);
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
	err.error.message = '[token null] request fail';
	EventBus.$emit('api-error', err);
	// '请求超时!'
	return Promise.reject(error);
};

let err: IError =
{
	traceId: '',
	error: { code: '', message: '' }
};

export { requestSuccess, requestFail, responseSuccess, responseFail };