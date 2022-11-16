import React from 'react'
import image_1 from '../design-images/image-hero-1.png'
import image_2 from '../design-images/image-hero-2.png'
import image_3 from '../design-images/image-hero-3.png'
import image_4 from '../design-images/image-hero-4.png'
import mbtoken from '../design-images/mbtoken-2.png'
import metamask from '../design-images/metamask.png'
import openSea from '../design-images/openSea.png'
import mbLogo from '../design-images/mb-logo.png'
import meta from '../design-images/meta-logo.png'
import open from '../design-images/Open-logo.png'
const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='content'>
          <article className='intro'>
            <h1 className='header-text'>
              Rent a <span className='colored'>Place </span>
              away from <span className='colored'>Home</span> in the
              <span className='colored'> Metaverse</span>
            </h1>
            <p className='text'>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <form>
              <div className='form-control'>
                <input type='text' className='input-text' />
                <button className='submit'>Search</button>
              </div>
            </form>
          </article>
          <div className='hero-images'>
            <div className='hero-1'>
              <img src={image_1} alt='' />
              <img src={image_2} alt='' />
            </div>
            <div className='hero-2'>
              <img src={image_3} alt='' />
              <img src={image_4} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='banner'>
        <div className='banner-img'>
          <img src={mbtoken} alt='' />
          <img className='logo-text' src={mbLogo} alt='' />
        </div>
        <div className='banner-img gap'>
          <img src={metamask} alt='' />
          <img className='logo-text' src={meta} alt='' />
        </div>
        <div className='banner-img gap'>
          <img src={openSea} alt='' />
          <img className='logo-text' src={open} alt='' />
        </div>
      </div>
      <div className='container'>
        <h3 className='inspiration-title'>
          Inspiration for your next adventure
        </h3>
      </div>
    </section>
  )
}

export default Hero
