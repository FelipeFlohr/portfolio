import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PathBar from '../components/pathbar/PathBar'
import Menu from '../components/menu/Menu'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <PathBar />
            <Menu />
            <div className="content">
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default MyApp