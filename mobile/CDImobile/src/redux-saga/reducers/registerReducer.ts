import { IAction } from "../../interfaces";

const initData = {
    fullName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
  };
  
  const registerReducer = (state = initData, { type, payload }: any) => {
    console.log(`registerReducer type: ${type} with payload: ${payload}`);
    switch (type) {
      case 'HANDLE_REGISTER':
        return {
          ...state,
          isLoading: true,
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          id: payload.id,
          fullName: payload.fullName,
          userName: payload.userName,
          email: payload.email,
          phoneNumber: payload.phoneNumber,
          password: payload.password,
          isLoading: false,
          error: '',
        };
      case 'REGISTER_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: 'Register fail',
        };
      default:
        return state;
    }
  };
  export default registerReducer;