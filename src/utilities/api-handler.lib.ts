import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { requestSuccess, requestFail, responseSuccess, responseFail } from './error-handler.lib';

class HttpModel {
  constructor() {
    // axios.defaults.baseURL = baseURL;
  }
  /**
   * axios API handler
   * @author rourou
   * @description 一律透過此method呼叫api
  */
  async request<T>(cfg: AxiosRequestConfig) {
    cfg.baseURL = '/backoffice/api/v1/222222/';
    // cfg.baseURL = 'https://backoffice-api.devel.starlordtech.com/api/v1/222222/';
    cfg.headers = {
      'Authorization': `Bearer ${Cookies.get('token')}`,
      'content-type': 'application/x-www-form-urlencoded',
    };
    const instance = axios.create();
    instance.interceptors.request.use(
      config => requestSuccess(config),
      err => requestFail(err));
    instance.interceptors.response.use(
      response => responseSuccess(response),
      error => responseFail(error));
    let result;
    try {
      result = await instance.request<T>(cfg);
      return Promise.resolve(result);
    }
    catch (throwError) {
      return Promise.reject(throwError);
    }
  }
}

const model = new HttpModel();

export default model;