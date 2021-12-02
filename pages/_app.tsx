import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Blockchain at Georgia Tech</title>
      <meta name="description" content="Blockchain at Georgia Tech" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#192549" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
