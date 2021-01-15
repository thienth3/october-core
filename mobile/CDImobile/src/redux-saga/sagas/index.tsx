import { fork, all, takeLatest } from 'redux-saga/effects';
import { HANDLE_LOGIN } from '../actions/loginAction';
import authSaga from './authSaga';

const sagas = function*() {
  yield all([
    takeLatest(HANDLE_LOGIN, authSaga)
  ]);
};
export default sagas;
