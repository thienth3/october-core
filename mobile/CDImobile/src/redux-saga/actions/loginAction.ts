export const HANDLE_LOGIN = 'HANDLE_LOGIN';


export const actionLogin = (payload : any) => ({
    type: 'HANDLE_LOGIN',
    payload
}) 

export const loginSuccess = (payload : any) => ({
    type: 'LOGIN_SUCCESS',
    payload,
});
  
export const loginFailure = (payload : any) => ({
    type: 'LOGIN_FAILURE',
    payload,
});