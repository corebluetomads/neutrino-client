import React, { useState } from 'react'
import ServerList from 'components/Lists/ServerList'
import { useGetServersQuery } from 'hooks/queries/server/server'
import Modal from 'components/Modals'
import AddServerForm from 'components/Forms/Modals/AddServerForm'

const ServerSidebar = (): JSX.Element => {
	const [isAddServerModalOpen, setIsAddServerModalOpen] = useState<boolean>(true)
	const [selectedServerId, setSelectedServerId] = useState<number | undefined>(undefined)

	const { data: servers } = useGetServersQuery()

	return (
		<div className="h-full border-r-2 border-mirage bg-shark">
			<div className="h-full py-[30px] px-[18px]">
				<div className="my-2">
					{
						servers &&
            servers?.length > 0 && (
							<ServerList>
								{
									servers?.map((server) => (
										<ServerList.Item
											key={server?.id}
											thumbnailLink={server?.thumbnail}
											isActive={server?.id === selectedServerId}
											setSelected={() => setSelectedServerId(server?.id)}
										/>
									))
								}
							</ServerList>
						)
					}
					<div className="p-32 bg-dodgerBlue" onClick={() => setIsAddServerModalOpen(!isAddServerModalOpen)}>

					</div>
				</div>
			</div>
			<Modal isOpen={isAddServerModalOpen} onClose={() => setIsAddServerModalOpen(!isAddServerModalOpen)}>
				<Modal.Header title="Add Server" onCancel={() => setIsAddServerModalOpen(false)} />

				<Modal.Content>
					<AddServerForm />
				</Modal.Content>
			</Modal>
		</div>
	)
}

export default ServerSidebar
