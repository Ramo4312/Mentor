import React, { FC, PropsWithChildren } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Toaster } from 'react-hot-toast'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Navbar />
			<Toaster />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
