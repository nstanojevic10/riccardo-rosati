import React from 'react'
import './Curriculum.scss'

const Curriculum = ({ curriculum, title }) => {

  return (
    <div id='curriculum' className='text'>
      <h2>{title.curriculum}</h2>
      {curriculum.map(curr => {
        return (
          <div>
            <h2>{curr.naslov}</h2>
            <h3>{curr.title}</h3>
            <ul>
              {curr.items.map((cur) => (<li className='liItem'>{cur}</li>))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Curriculum;