import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const { isInitialized, isAuthenticated } = useMoralis()

  useEffect(() => {
    if (isInitialized) {
      if (!isAuthenticated) {
        router.push("/")
      }
    }
  }, [isInitialized, isAuthenticated, router])

  return isAuthenticated ? children : (<></>);
};

export default RequireAuth
