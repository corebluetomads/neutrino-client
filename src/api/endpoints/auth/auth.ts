import { User } from '../../../types/User'
import { AxiosResponse, AxiosInstance } from 'axios'
import { IForgotPasswordRequest, ILoginRequest, IRegisterRequest, IResetPasswordRequest } from './interfaces'

export default class AuthApi {
	protected readonly http: AxiosInstance

	constructor(http: AxiosInstance) {
		this.http = http
	}

	/**
   * Send a new login request
   *
   * @param {ILogin} body The credentials for logging in a new user
   * @param {string} body.email The email from the client
   * @param {string} body.password The password from the client
   *
   * @return {any}
   */
	async login(body: ILoginRequest): Promise<any> {
		return await this.http.get('/sanctum/csrf-cookie')
			.then(async () => {
				return this.http.post<User>('/login', body)
					.then((response: AxiosResponse) => response)
			})
	}

	/**
   * Send a new register request
   *
   * @param {IRegister} body The credentials for registering in a new user
   * @param {string} body.email The email from the client
   * @param {string} body.password The password from the client
   *
   * @return {any}
   */
	async register(body: IRegisterRequest): Promise<any> {
		await this.http.get('/sanctum/csrf-cookie')
			.then(async () => {
				return this.http.post<IRegisterRequest>('/register', body)
					.then((response: AxiosResponse<any>) => response.data)
			})
	}

	/**
   * Send a new forgot password request
   *
   * @param {IForgotPassword} body The data for requesting a forgot password
   * @param {string} body.email The email from the client
   *
   * @return {any}
   */
	async forgotPassword(body: IForgotPasswordRequest): Promise<any> {
		await this.http.get('/sanctum/csrf-cookie')
			.then(async () => {
				return this.http.post<IForgotPasswordRequest>('/forgot-password', body)
					.then((response: AxiosResponse) => response)
			})
	}

	/**
   * Send a new reset password request
   *
   * @param {IResetPassword} body The data for resetting a password
   * @param {string} body.password The password from the client
   * @param {string} body.confirm_password The confirm password from the client
   *
   * @return {any}
   */
	async resetPassword(body: IResetPasswordRequest): Promise<AxiosResponse> {
		return await this.http.put<IResetPasswordRequest>('/reset-password', body)
			.then((response: AxiosResponse) => response)
	}
}
