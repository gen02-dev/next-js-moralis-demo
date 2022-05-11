import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { ConnectButton } from 'web3uikit'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ConnectButton/>
    </div>
  )
}

export default Home
