import React, { useState } from 'react'
import Hero from '../components/Hero'
import Items from '../components/Items'
import Card from '../components/Card'
import { metaData } from '../data'
const Home = () => {
  const [items, setItem] = useState(metaData)
  return (
    <main>
      <Hero />
      <div className='container'>
        <section className='item'>
          {items.map((item, index) => {
            console.log(item)
            return <Items key={index} {...item} />
          })}
        </section>
      </div>
      <Card />
    </main>
  )
}

export default Home
