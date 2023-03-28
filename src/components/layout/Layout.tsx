import React, { FC, PropsWithChildren } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
