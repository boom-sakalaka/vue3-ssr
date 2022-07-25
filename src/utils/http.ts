/**
 * 单独请求数据方法封装
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import config from './../config/index'
const defaultConfig = {
  timeout: 5000,
  baseURL: '',
};

class Http {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }
  private static axiosInstance = axios.create(defaultConfig);
  // 请求拦截
  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );
  }
  //响应拦截
  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      err => {
        return Promise.reject(err);
      }
    );
  }

  /**
   * 封装请求
   */
  public httpRequestGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance
      .get(url, { params })
      .then(res => res.data)
      .catch();
  }

  /**
   * 封装响应
   * httpRequestPost
   * url: string, params: Axios
   * */
  public httpRequestPost<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance
      .post(url, params)
      .then(res => res.data)
      .catch();
  }
}

export const http = new Http();
