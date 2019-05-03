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
  async request<T>(cfg: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    cfg.baseURL = '/backoffice/api/v1/222222/';
    // cfg.baseURL = 'https://backoffice-api.devel.starlordtech.com/api/v1/222222/';
    cfg.headers = {
      // 'Authorization': `Bearer ${Cookies.get('token')}`,
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiOTI2NjQ3ZjQtM2QxYy00ZjdkLWI3YTEtMTk3NmUyMjEzZWFmIiwiZXhwaXJlZF9hdCI6MTU1Njg4MzU3MX0.j7SsYCdYnCI8C3whKAxZtvTqK38ioJMwrsYmaXHort2j1az_kpdr4hbrx3wgJmJjhB8YpuNsgIKwkjABiPa3Sw',
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
      result = await instance.request(cfg);
      return <AxiosResponse<T>>result;
    }
    catch (throwError) {
      return Promise.reject(throwError);
    }
  }
}

const model = new HttpModel();

export default model;