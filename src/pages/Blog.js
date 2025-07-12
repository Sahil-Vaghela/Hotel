import React from 'react'
import Nav from './Nav'
import './blog.css'
import Data from './data'

function Blog() {
  return (
    <div className='bmain'>
      <Nav />

      <div className='bd1'>
        {
          Data.product2.map((p) => {
            return (
              <div className='bd11'>
                <img src={p.photo} alt={p.title} />
                <div >
                  <p>{p.name}</p>
                </div>
              </div>
            )
          })
        }

      </div>

      <div className='bd2'>
        <div className='bd2img'>

        </div>
        <div className='bd2txt'>
        <h1>rglwerkmgl;sd,mg;sdl,c</h1>
        <p> lorevfjkvnsacilvnasdo;dckvmfoasdgjmasodkmvlsmvslvmspodkvp0dokvc0psdokvo0d </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
