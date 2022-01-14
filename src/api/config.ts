import { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
	baseURL: process.env.REST_API_BASE_URL,
}

export default config
