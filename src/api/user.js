import request from '../utils/request';
export function login(data){
  return request('/api/user/login', 'post', data)
}