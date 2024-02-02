import {takeLatest} from 'redux-saga/effects';
import {LOGIN_REQUEST} from '../../actions/userActions';
import loginWorkerSaga from './loginWorkerSaga';

export function* LoginWatcherSaga() {
  yield takeLatest(LOGIN_REQUEST, loginWorkerSaga);
}
