import axios from 'axios'
import AuthApi from './endpoints/auth/auth'
import ServerAPI from './endpoints/server/server'

const http = axios.create({
	baseURL: 'http://localhost'
})

http.defaults.withCredentials = true

http.defaults.headers.common = {
	'Content-Type': 'application/json',
	'Accept': 'application/json',
}

export default class Api {

	static auth = new AuthApi(http)
	static server = new ServerAPI(http)
}

