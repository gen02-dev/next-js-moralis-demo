import RequireAuth from "../Services/Auth"
import { NFTBalance } from 'web3uikit'
import { useMoralis } from 'react-moralis'
import Header from '../components/header'

const NFT = () => {
  const { user } = useMoralis()
  const ethAddress = user?.attributes.ethAddress

  return (
    <RequireAuth>
      <Header/>
      <NFTBalance address={ethAddress} chain="eth"/>
    </RequireAuth>
  )
}

export default NFT
