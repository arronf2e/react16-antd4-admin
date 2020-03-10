import axios from "axios";
import Qs from "qs";
import { message } from "antd";
import { checkStatus } from "@/utils";

// 全局标识位，防止多个报错
let inError = false;

const instance = axios.create({
  baseURL: "",
  timeout: 15000,
  transformRequest: [
    function(data) {
      // 处理 request data
      return data;
    }
  ],
  transformResponse: [
    function(data) {
      return JSON.parse(data);
    }
  ],
  headers: {}
});

instance.interceptors.request.use(
  config => {
    config.headers = Object.assign(
      config.method === "get"
        ? {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8"
          }
        : {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
      config.headers
    );
    config.headers.token = "";

    if (config.method === "post") {
      const contentType = config.headers["Content-Type"];
      if (contentType) {
        if (contentType.includes("multipart")) {
          // 类型 'multipart/form-data;'
          // config.data = data;
        } else if (contentType.includes("json")) {
          // 类型 'application/json;'
          // 服务器收到的raw body(原始数据) "{name:"nowThen",age:"18"}"（普通字符串）
          config.data = JSON.stringify(config.data);
        } else {
          // 类型 'application/x-www-form-urlencoded;'
          // 服务器收到的raw body(原始数据) name=nowThen&age=18
          config.data = Qs.stringify(config.data);
        }
      }
    }
    return Promise.resolve(config);
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    const { code } = response.data || {};
    if (code === 401) {
      if (!inError) {
        message.warning("登录超时，即将跳转到登录页面...");
        inError = true;
        setTimeout(() => {
          message.destroy();
          window.location.href = "/login";
          inError = false;
        }, 2000);
      }
      return Promise.resolve({});
    } else if (response) {
      return Promise.resolve(checkStatus(response));
    }
  },
  error => {
    if (error.response) {
      return Promise.reject(checkStatus(error.response));
    } else if (
      error.code === "ECONNABORTED" &&
      error.message.indexOf("timeout") !== -1
    ) {
      return Promise.reject({ msg: "请求超时" });
    } else {
      return Promise.reject({});
    }
  }
);

const request = async opt => {
  const options = {
    method: "get",
    ifHandleError: true, // 是否统一处理接口失败(提示)
    ...opt
  };
  // 匹配接口前缀 开发环境则通过proxy配置转发请求； 生产环境根据实际配置
  options.baseURL = autoMatch(options.prefix);
  try {
    const res = await instance(options);
    if (!res.success && options.ifHandleError) {
      // 自定义参数，是否允许全局提示错误信息
      message.error(res.message || "请求处理失败！");
    }
    return res;
  } catch (err) {
    if (options.ifHandleError) {
      // 自定义参数，是否允许全局提示错误信息
      message.error(err.message || err.msg || "请求处理失败！");
    }
    return err;
  }
};

export default request;
