import React from 'react'
import Image from '../design-images/image-5.png'
const Card = () => {
  return (
    <section className='Nfts-section'>
      <article className='Nfts-content'>
        <div className='Nfts'>
          <h2 id='nfts'>Metabnb NFTs</h2>
          <p className='Nfts-text'>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className='learn'>learn more</button>
        </div>
        <div className='image-content'>
          <img src={Image} alt='' />
        </div>
      </article>
    </section>
  )
}

export default Card
