const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOT_NULL_REGEX = /^(?!\s*$).+/;
const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const isEmailValid = (email: string) => {
  return EMAIL_REGEX.test(email);
};

export const isNotNull = (value: string) => {
  return NOT_NULL_REGEX.test(value);
};

export const isPasswordValid = (password: string) => {
  return PASSWORD_REGEX.test(password);
};

export const isPasswordMismatch = (
  password: string,
  confirmPassword: string,
) => {
  return password === confirmPassword;
};
