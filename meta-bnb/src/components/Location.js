import React from 'react'
import filter from '../design-images/filter.png'
const Location = () => {
  return (
    <div className='container'>
      <div className='location-filter'>
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>
        <button className='filter-btn'>
          Location <img src={filter} alt='' />
        </button>
      </div>
    </div>
  )
}

export default Location
