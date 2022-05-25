import React from 'react'
import './searchitems.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

function Searchitems({
    img,
    location,
    title,
    description,
    rating,
    price,
    total,
    
}) {
  return (
    <div className='searchitems'>
      <img src={img} alt=""/>
      <FavoriteIcon className='heart'/>
      <div className='search-details'>
        <div className='searchdetails-top'>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____________________________________________________</p>
          <p>{description}</p>

        </div>

        <div className='searchdetails-bottom'>
          <div className='rating'>
            <StarIcon className='star'/>
            <p><strong>{rating}</strong></p>

          </div>
          <div className='price'>
            <h2>{price}</h2>
            <p>{total}</p>

          </div>
           
        </div>

      </div>
       

    </div>
  )
}

export default Searchitems