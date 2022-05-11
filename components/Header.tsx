import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { ConnectButton, Typography } from 'web3uikit'

const Header = () => {
  return (
    <div style={{
      width: '100%', height: 65, display:'flex', alignItems:'center', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
    }}>
      <p>NextJs Demo App</p>
      <div style={{position: 'absolute', right: 10}}>
      <ConnectButton/>
      </div>
    </div>
  )
}

export default Header
