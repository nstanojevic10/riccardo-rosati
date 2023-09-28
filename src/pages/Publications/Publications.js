import React from 'react'
import './Publications.scss'

function Publications({ allPubEn, title }) {
  
  return (
    <div id='publications' className='text'>
      <h2>{title.publications}</h2>
      <h3>{title.publications2}:</h3>
      <div>{allPubEn}</div>
    </div>
  )
}

export default Publications