import type { NextPage } from 'next'
import { Button } from 'web3uikit'
import Header from '../components/Header'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { user } = useMoralis()
  const router = useRouter()
  return (
    <>
      <Header />
      <div>
        <h2 style={{ textAlign: 'center' }}>This is a demo app that shows how to construct a protected route if the user has an NFT.</h2>
        <h3 style={{ textAlign: 'center' }}>Home Page is non protected route, while NFT Page is a protected route.</h3>
        <h4 style={{ textAlign: 'center' }}>If user clicks on NFT Page link and does not have an NFT, user will be redirected to back here.</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {user !== null ?
            <>
              <div style={{ padding: 15 }}>
                <Button
                  id="test-button-link"
                  onClick={() => router.push('/')}
                  text="Home Page"
                  theme="link"
                  type="button"
                />
              </div>
              <div style={{ padding: 15 }}>
                <Button
                  id="test-button-link"
                  onClick={() => window.location.href = '/nft'}
                  text="NFT Page"
                  theme="link"
                  type="button"
                />
              </div>
            </>
            : <h1 style={{ marginTop: 50 }}>Click on Connect Wallet to Start</h1>}
        </div>
      </div>
    </>
  )
}

export default Home
