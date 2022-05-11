import { NFTBalance } from 'web3uikit'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import { getUserNFTs } from "../Services/Api"
import { useEffect } from "react"

const NFT = () => {
  const { user } = useMoralis()
  const ethAddress = user?.attributes.ethAddress

  useEffect(() => {
    if (user) {
      getUserNFTs(user?.get("sessionToken")).then((result) => {
        console.log(result)
      })
    }
  }, [user])

  return (
    <>
      <Header />
      <NFTBalance address={ethAddress} chain="eth" />
    </>
  )
}

NFT.auth = true;

export default NFT
