import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { requestSuccess, requestFail, responseSuccess, responseFail } from './error-handler.lib'

const baseURL = 'https://www.thef2e.com/api/tagList';
// const baseURL = 'https://api.example.com';

const successURL = 'https://www.mocky.io/v2/5c94c4423600001818941c8b?mocky-delay=300ms';
const failURL = 'https://www.mocky.io/v2/5c94c4793600001818941c8f?mocky-delay=300ms';

const testURL = 'https://frontend-api.devel.starlordtech.com/api/v1/member/profile';

class HttpModel {
  constructor() {
    // axios.defaults.baseURL = baseURL;
  }

  /**
   * axios API handler
   * @author rourou
   * @description 一律透過此method呼叫api
  */
  async request<T>(cfg: AxiosRequestConfig): Promise<any> {
    cfg.baseURL = testURL;
    cfg.headers = {
      'Authorization': `Bearer ${Cookies.get('token')}`,
      'content-type': 'application/x-www-form-urlencoded',
    };
    let instance = axios.create();
    instance.interceptors.request.use(
      config => requestSuccess(config),
      err => requestFail(err));
    instance.interceptors.response.use(
      response => responseSuccess(response),
      error => responseFail(error));
    let result;
    try {
      result = await instance.request(cfg);
      return result;
    }
    catch (throwError) {
      return Promise.reject(throwError);
    }
  }
}

const model = new HttpModel();

export default model;