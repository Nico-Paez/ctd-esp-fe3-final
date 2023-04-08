import React, { useContext } from 'react'
import imgDH from '../assets/DH.png'
import { ContextGlobal } from './utils/global.context';

const Footer = () => {

  const {theme} = useContext(ContextGlobal)

  return (
    <footer className={`${theme}`}>
        <p>Powered by</p>
        <img src={imgDH} alt='DH-logo' />
    </footer>
  )
}

export default Footer
