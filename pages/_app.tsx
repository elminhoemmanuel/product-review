import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from "react-redux"
import { persistor, store } from 'redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <title>Product Review</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    < Component {...pageProps } />
                </PersistGate>
            </Provider>
        </div>
    )

        
}
