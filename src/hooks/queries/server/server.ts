import Api from 'api'
import { Server } from 'types/Server'
import { serverQueryKeys } from 'hooks/queries/server/keys'
import { ICreateServerRequest } from 'api/endpoints/server/interfaces/request'
import { UseMutationOptions, useMutation, UseQueryOptions, useQuery, QueryKey } from 'react-query'


// Queries


export const useGetServersQuery = (options?: Omit<UseQueryOptions<Server[], unknown, Server[], QueryKey>, 'queryKey' | 'queryFn'>) => {
	return useQuery<Server[]>(serverQueryKeys.all, () => Api.server.getServers(), options)
}

// Mutations


export const useCreateServerMutation = (body: ICreateServerRequest, options?: UseMutationOptions) => {
	return useMutation(serverQueryKeys.detail(), () => Api.server.createServer(body), options)
}
