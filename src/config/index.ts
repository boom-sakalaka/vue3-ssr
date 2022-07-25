/**
 * 环境配置封装
 */
const env: any = import.meta.env.PROD || 'dev';
const EnvConfig = {
  dev: { //开发环境
    baseApi: 'http://localhost:8080',
    mockApi: 'http://localhost:8080'
  },
  test: { //测试环境
    baseApi: '//tets.futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/d219c21f5eb0aed28d349a9424f6ab96/api'
  },
  prod: { //生产环境
    baseApi: 'http://localhost:8080',
    mockApi: 'http://localhost:8080'
  }
}
export default {
  env: 'dev',//开发环境
  mock: true, //是否启用mock
  namespace: 'airbnb',//命名空间用于区分storage
  ...EnvConfig[env] //解构出开发环境
}