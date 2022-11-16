import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../design-images/metamask-logo.png'
import { links } from '../data'
import menu from '../design-images/menu.svg'
import Sidebar from './Sidebar'
import Modal from './Modal'
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const [modal, setModal] = useState(false)
  const handleToggle = () => {
    setSidebar((prevstate) => !prevstate)
  }
  const handleModal = () => {
    setModal((prevstate) => !prevstate)
    setSidebar(false)
  }
  return (
    <header className='heading'>
      <div className={`${modal ? 'overlay-modal' : ''}`}></div>
      <nav className='nav'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
          {/* <h2 className='title'>metabnb</h2> */}
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link className='link' to={url}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
        <button className='btn' onClick={handleModal}>
          Connect wallet
        </button>
        <button className='menu' onClick={handleToggle}>
          <img src={menu} alt='' />
        </button>
      </nav>
      <Modal modal={modal} handleModal={handleModal} />
      <Sidebar
        sidebar={sidebar}
        handleToggle={handleToggle}
        handleModal={handleModal}
      />
    </header>
  )
}

export default Navbar
