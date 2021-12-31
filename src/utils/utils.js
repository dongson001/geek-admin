function getToken() {
  return localStorage.getItem('token')
}
function setToken() {
  return localStorage.setItem('token')
}
export {
  getToken,
  setToken
}
