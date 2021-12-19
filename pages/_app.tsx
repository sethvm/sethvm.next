import { AppProps } from 'next/app';
import '../styles/globals.scss'
import Layout from '../src/components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    );
}

export default App
