import React from 'react'
// import image from '../design-images/image-hero-1.png'
//import star from '../design-images/star-1.png'
const Items = ({ name, price, distance, duration, image, rating }) => {
  return (
    // <section className='item'>
    <div className='box'>
      <div className='box-content'>
        <img className='photo' src={image} alt='distance' />
        <div className='info'>
          <p className='name'>{name}</p>
          <p>
            <strong>{price}</strong> per night
          </p>
        </div>
        <div className='location'>
          <p>{distance}</p>
          <p>{duration}</p>
        </div>
        <div className='rating'>
          {rating.map((rate, index) => {
            return <img key={index} src={rate} alt={name} />
          })}
        </div>
      </div>
    </div>
    // </section>
  )
}

export default Items
