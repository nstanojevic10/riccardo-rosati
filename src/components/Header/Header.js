import React from 'react'
import './Header.scss'

function Header({ changeLang, lang }) {

  return (

    <div className='row header-row'>
      <div className='div1 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 col-12'>
        <h1 className='h1'>Riccardo Rosati</h1>
      </div>
      <div className='div2 col-xl-6 col-lg-6'>
        <div className='lang' onClick={()=>changeLang()}>{lang}</div>
      </div>
    </div>
  )
}

export default Header