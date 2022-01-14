import { User } from '../../../types/User'
import { AxiosResponse, AxiosInstance } from 'axios'
import { IForgotPassword, IResetPassword, ILogin, IRegister } from './interfaces'

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
	async login(body: ILogin): Promise<any> {
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
	async register(body: IRegister): Promise<any> {
		await this.http.get('/sanctum/csrf-cookie')
			.then(async () => {
				return this.http.post<IRegister>('/register', body)
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
	async forgotPassword(body: IForgotPassword): Promise<any> {
		await this.http.get('/sanctum/csrf-cookie')
			.then(async () => {
				return this.http.post<IForgotPassword>('/forgot-password', body)
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
	async resetPassword(body: IResetPassword): Promise<AxiosResponse> {
		return await this.http.put<IResetPassword>('/reset-password', body)
			.then((response: AxiosResponse) => response)
	}
}
