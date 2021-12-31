export function login({username}){
  if (username!=='dasheng') {
    return {
      code: 60204,
      message: 'Account and password are incorrect.'
    }
  }

  return {
    code: 20000,
    data: Date.now()
  }
}