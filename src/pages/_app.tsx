import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import PathBar from '../components/pathbar/PathBar'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <PathBar />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
