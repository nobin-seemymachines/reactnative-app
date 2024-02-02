export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT';
export const LOGOUT = 'LOGOUT';

export const loginRequestAction = (data: object) => ({
  type: LOGIN_REQUEST,
  payload: data,
});

export const loginSuccessAction = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailedAction = () => ({
  type: LOGIN_FAILED,
});

export const logoutAction = () => ({
  type: LOGOUT,
});
