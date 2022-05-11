import { getUserNFTs } from './Api'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const { user } = useMoralis()
  const sessionToken = user?.attributes.sessionToken;

  const authenticate = async() => {
    const nft = await getUserNFTs(sessionToken)
    const isEmpty = Object.keys(nft).length === 0
    if(isEmpty) {
      router.push('/')
    }else{
      return children
    }
  }

  useEffect(() => {
    authenticate()
  }, [])
};

export default RequireAuth
