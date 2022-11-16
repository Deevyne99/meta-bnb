import React, { useState } from 'react'
import Location from '../components/Location'
import Items from '../components/Items'
import { placeData } from '../data'
const Place = () => {
  const [data, setData] = useState(placeData)
  return (
    <main className=''>
      <Location />
      <div className='container'>
        <section className='item filter-box'>
          {data.map((item, index) => {
            return <Items key={index} {...item} />
          })}
        </section>
      </div>
    </main>
  )
}

export default Place
