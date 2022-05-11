import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis"
import RequireAuth from '../Services/Auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      initializeOnMount
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID ?? ""}
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL ?? ""}
    >
      {
        // @ts-ignore
        Component?.auth ? (
          <RequireAuth>
            <Component {...pageProps} />
          </RequireAuth>
        ) : (
          <Component {...pageProps} />
        )}
    </MoralisProvider>
  )
}

export default MyApp
