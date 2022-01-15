import Api from 'api'
import AuthQueryKeys from './keys'
import { useMutation, UseMutationOptions } from 'react-query'
import { IForgotPasswordRequest, ILoginRequest, IRegisterRequest } from 'api/endpoints/auth/interfaces/request'

export const useLoginMutation = (body: ILoginRequest, options?: UseMutationOptions) => {
	return useMutation(AuthQueryKeys.login, () => Api.auth.login(body), options)
}

export const useRegisterMutation = (body: IRegisterRequest, options?: UseMutationOptions) => {
	return useMutation(AuthQueryKeys.register, () => Api.auth.register(body), options)
}

export const useForgotPasswordMutation = (body: IForgotPasswordRequest, options?: UseMutationOptions) => {
	return useMutation(AuthQueryKeys.forgotPassword, () => Api.auth.forgotPassword(body), options)
}

