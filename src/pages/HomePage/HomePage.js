import React from 'react'
import './HomePage.scss'

const HomePage = ({homepage, title}) => {
    return (
        <div id='homeScreen' className='text'>
            <h2>{title.home},<br></br>{title.home2}</h2>
            <p>{homepage.text1}</p>
            <p>{homepage.text2}</p>
             <h3>{title.home3}:</h3>
            <ul>
                <li className='liItem'>{homepage.li1}</li>
                <li className='liItem'>{homepage.li2}</li>
                <li className='liItem'>{homepage.li3}</li>
            </ul>
        </div>
    )
}

export default HomePage