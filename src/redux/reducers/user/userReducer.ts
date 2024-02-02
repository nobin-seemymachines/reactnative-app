import {AnyAction} from 'redux-saga';
import {getToken} from '../../../helpers/getToken';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../../actions/userActions';

const initialState = {
  token: getToken(),
  isLoading: false,
};

const token = getToken().then((token)=>console.log("reducer ",token));

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, isLoading: true};
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.data.data.token,
        isLoading: false,
      };
    case LOGIN_FAILED:
      console.log('Failed');
      return {...state};
    case LOGOUT:
      return {...state, token: null, isLoading: false};
    default:
      return {...state};
  }
};

export default userReducer;
