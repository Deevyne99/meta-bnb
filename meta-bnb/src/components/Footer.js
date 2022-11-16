import React from 'react'
import footer from '../design-images/footer-image.svg'
import facebook from '../design-images/facebook.png'
import instagram from '../design-images/instagram-image.png'
import twitter from '../design-images/twitter.png'
const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-content'>
        <div className='footer-container'>
          <div className='footer-logo'>
            <img src={footer} alt='' />
            {/* <h2 className='footer-text'>Metabnb</h2> */}
          </div>
          <div className='social'>
            <img src={facebook} alt='' />
            <img src={instagram} alt='' />
            <img src={twitter} alt='' />
          </div>
          <p className='desktop-footer'> &copy; 2022 Metabnb</p>
        </div>
        <div className='community community-mobile'>
          <h4>Community</h4>
          <ul>
            <li>
              <a href='#0'>NFT</a>
            </li>
            <li>
              <a href='#0'>Tokens</a>
            </li>
            <li>
              <a href='#0'>Landlords</a>
            </li>
            <li>
              <a href='#0'>Discord</a>
            </li>
          </ul>
        </div>
        <div className='community'>
          <h4>Places</h4>
          <ul>
            <li>
              <a href='#0'>Castle</a>
            </li>
            <li>
              <a href='#0'>Farm</a>
            </li>
            <li>
              <a href='#0'>Beach</a>
            </li>
            <li>
              <a href='#0'>Lear more</a>
            </li>
          </ul>
        </div>
        <div className='community'>
          <h4>About us</h4>
          <ul>
            <li>
              <a href='#0'>Road map</a>
            </li>
            <li>
              <a href='#0'>Creators</a>
            </li>
            <li>
              <a href='#0'>Career</a>
            </li>
            <li>
              <a href='#0'>Contact us</a>
            </li>
          </ul>
        </div>
        <p className='mobile-footer'> &copy; 2022 Metabnb</p>
      </div>
    </footer>
  )
}

export default Footer
