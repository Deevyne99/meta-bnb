import React from 'react'
import { links } from '../data'
import { Link } from 'react-router-dom'
import close from '../design-images/close.svg'
const Sidebar = (props) => {
  // const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <div className={`${props.sidebar ? 'overlay' : ''}`}></div>
      <aside className={`mobile-nav ${props.sidebar ? 'show' : ''}`}>
        <button className='close' onClick={props.handleToggle}>
          <img src={close} alt='' />
        </button>
        <ul className='mobile'>
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
          <button className='btn-wallet' onClick={props.handleModal}>
            Connect wallet
          </button>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
