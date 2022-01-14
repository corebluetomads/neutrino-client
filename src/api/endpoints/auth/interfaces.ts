export interface ILoginRequest {
  email: string,
  password: string
}

export interface IForgotPasswordRequest {
  email: string
}

export interface IResetPasswordRequest {
  password: string,
  confirm_password: string
}

export interface IRegisterRequest {
  email: string,
  password: string,
  username: string,
  date_of_birth: string,
  password_confirmation: string
}