import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='row footer '>
      <div className='col-lg-6 col-sm-10 email'>
        <h3 className='email'>info@riccardorosati.eu</h3>
      </div>
      <div className='col-lg-6 col-sm-0 address'>
        <p className='address'>
          Iscr. Albo Odontoiatri di Udine num. 625<br></br>
          p.iva 02468410309
        </p>
      </div>
    </div>
  )
}

export default Footer