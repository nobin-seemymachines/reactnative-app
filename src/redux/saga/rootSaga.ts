import {all} from 'redux-saga/effects';
import {LoginWatcherSaga} from './loginSaga/loginWatcherSaga';

export default function* rootSaga() {
  yield all([LoginWatcherSaga()
]);

}
