import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider 
      appId="pUWqcFMbs8vv6nNEHY8W3iwveCcYxeuoYqYsCpR8" 
      serverUrl="https://pmgjpmhhyupb.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
