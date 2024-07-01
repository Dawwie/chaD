export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface RegisterUserPayload {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}
