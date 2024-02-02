import {call, put} from 'redux-saga/effects';
import {signIn} from '../../../api';
import {loginFailedAction, loginSuccessAction} from '../../actions/userActions';

export default function* loginWorkerSaga(action: any) {
  try {
    const response: object = yield call(signIn, action.payload);
    yield put(loginSuccessAction(response));
  } catch (error: any) {
    yield put(loginFailedAction);
  }
}
