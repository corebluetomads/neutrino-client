import ServerListItem from './ServerListItem'
import React from 'react'

const ServerList = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<ol className="flex flex-col items-center gap-y-3">
			{children}
		</ol>
	)
}

ServerList.Item = ServerListItem

export default ServerList
