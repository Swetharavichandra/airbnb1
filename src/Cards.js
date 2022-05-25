import React from 'react'
import'./cards.css';


function Cards({src,title,description,price}) {
  return (
    // information will be mapped to each card
    <div className='cards'>
        <img src={src} alt=""/>
        <div className='cards-info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>

        </div>

        


    </div>
  )
}

export default Cards