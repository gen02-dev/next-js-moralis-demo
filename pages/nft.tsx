import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import { getUserNFTs } from "../Services/Api"
import { useEffect, useState } from "react"

const NFT = () => {
  const { user, account } = useMoralis()
  const [result, setResult] = useState({});

  useEffect(() => {
    if (user && account) {
      getUserNFTs(user?.get("sessionToken")).then((res) => {
        setResult(res)
      })
    }
  }, [user, account])

  return (
    <>
      <Header />
      {result && result.address === account && result?.message}
      <p>Not so secret message</p>
    </>
  )
}

NFT.auth = true;

export default NFT
