import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../services';
import { AsyncStorage } from 'react-native';
import { actionLogin } from '../actions/loginAction';
// import {actionLogin, HANDLE_LOGIN} from '../actions/loginAction';

function* saveTokenToStore(data: any) {
  yield AsyncStorage.multiSet([
    ['AccessToken', data.access_token],
    // ['RefreshToken', data.refresh_token]
  ],
    err => {
      console.log('ERROR saveTokenToStore: ', err);
    },
  );
}

function* doLogin(username: any, password: any) {
  try {
    console.log(
            `Login Saga - postLoginAction: username: ${username} - password: ${password}`,
          );
    let response = yield call(request.login, username, password); // Gọi API Login ở đây.
    // yield call(saveTokenToStore, response); // Nếu API gọi thành công. Chúng ta save access_token và Store
    yield put({ 
      type: "LOGIN_SUCCESS",
      payload: response,
    });
  }
  catch (error) {
    console.log(error);
    yield put({ type: 'LOGIN_FAILURE', error });
  }
}

export default function*(action: any) {
  console.log('Login Saga - Action', action);
  yield call(doLogin, action.payload.username, action.payload.password);
}
