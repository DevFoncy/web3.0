import Axios from 'axios';
// eslint-disable-next-line import/newline-after-import
import * as axios from 'axios/index';
export const Api = Axios.create({
  baseURL: process.env.REACT_APP_API_BACKEND,
});


export function getServerUrl() {
  if (window.baseHref) {
    return window.baseHref;
  }
  return '';
}


export function doGet(url, token, params = {}) {
  return axios({
    url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  }).catch(() => {

  });
}

export function doPost(url, params = {}) {
  return axios({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  });
}

export function doPut(url, params = {}) {
  return axios({
    url,
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  });
}

export function doDelete(url, params = {}) {
  return axios({
    url,
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  });
}
