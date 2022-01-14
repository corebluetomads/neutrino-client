interface ILogin {
  email: string,
  password: string
}

interface IForgotPassword {
  email: string
}

interface IResetPassword {
  password: string,
  confirm_password: string
}

interface IRegister {
  email: string,
  password: string,
  username: string,
  date_of_birth: string,
  password_confirmation: string
}

export type {
	ILogin,
	IRegister,
	IResetPassword,
	IForgotPassword,
}
