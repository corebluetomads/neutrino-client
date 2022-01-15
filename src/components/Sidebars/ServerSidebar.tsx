import React, { useState } from 'react'
import { PlusIcon } from 'assets/icons'
import ServerList from 'components/Lists/ServerList'
import { useGetServersQuery } from 'hooks/queries/server/server'
import AddServerModal from 'components/Modals/components/AddServerModal'

const ServerSidebar = (): JSX.Element => {
	const [isAddServerModalOpen, setIsAddServerModalOpen] = useState<boolean>(false)
	const [selectedServerId, setSelectedServerId] = useState<number | undefined>(undefined)

	const { data: servers } = useGetServersQuery()
  
	return (
		<div className="h-full border-r-2 border-mirage bg-shark">
			<div className="h-full py-[30px] px-[18px]">
				<div className="my-2">
					<ServerList>
						{
							servers &&
							servers?.length > 0 && 
							servers?.map((server) => (
								<ServerList.Item
									key={server?.id}
									thumbnailLink={server?.thumbnail}
									isActive={server?.id === selectedServerId}
									setSelected={() => setSelectedServerId(server?.id)}
								/>
							))
						}
						<li>
							<button 
								onClick={() => setIsAddServerModalOpen(!isAddServerModalOpen)}
								className="w-[64px] h-[64px] rounded-full bg-dodgerBlue bg-opacity-20 flex items-center justify-center"
							>
								<PlusIcon />
							</button>
						</li>
					</ServerList>
				</div>
			</div>
			
			<AddServerModal 
				isOpen={isAddServerModalOpen} 
				onClose={() => setIsAddServerModalOpen(!isAddServerModalOpen)} 
			/>
		</div>
	)
}

export default ServerSidebar
