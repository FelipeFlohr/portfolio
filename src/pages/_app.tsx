import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PathBar from '../components/pathbar/PathBar'
import Menu from '../components/menu/Menu'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <PathBar />
            <Menu />
            <main className="content">
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp