import { fork, all, takeLatest } from 'redux-saga/effects';
import {watchLogin} from './authSaga';

const sagas = function*() {
  yield all([
    fork(watchLogin)
  ]);
};
export default sagas;
