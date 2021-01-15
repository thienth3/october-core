import { IAction } from "../../interfaces";

const initData = {
    refreshToken: '',
    accessToken: '',
    isLoading: false,
    error: '',
    id: '',
    createdAt: '',
    name: '',
    avatar: '',
    email: '',
  };
  
  const loginReducer = (state = initData, { type, payload }: any) => {
    console.log(`loginReducer type: ${type} with payload: ${payload}`);
    switch (type) {
      case 'HANDLE_LOGIN':
        return {
          ...state,
          isLoading: true,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          id: payload.id,
          createdAt: payload.createdAt,
          name: payload.name,
          avatar: payload.avatar,
          email: payload.email,
          refreshToken: payload.access_token,
          accessToken: payload.refresh_token,
          isLoading: false,
          error: '',
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: 'Login fail',
        };
      default:
        return state;
    }
  };
  export default loginReducer;