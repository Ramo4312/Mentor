import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '@/styles/globals.css'
import { store } from '@/redux/store'

import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={poppins.className}>
			<Head>
				<title>MentorKG</title>
			</Head>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</main>
	)
}
