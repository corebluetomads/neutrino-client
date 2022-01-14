import { AxiosInstance } from 'axios'
import { Server } from '../../../types/Server'

export default class ServerAPI {
	protected readonly http: AxiosInstance

	constructor(http: AxiosInstance) {
		this.http = http
	}

	/**
   * CREATE a new server
   *
   * @param {IServerRequest} body The data for requesting a server to be created
   * @param {string} body.name The name of the server
   * @param {File} body.thumbnail The thumbnail for the server
   * 
   * @returns {Promise<Server>}
   */
	async createServer(body: IServerRequest): Promise<Server> {
		return await this.http.post<Server>('api/server', body)
			.then((response) => response.data)
	}

	/**
   * GET a list of servers
   * 
   * @returns {Promise<Server[]>}
   */
	async getServers(): Promise<Server[]> {
		return await this.http.get('/api/server')
			.then((response) => response.data)
	}
}