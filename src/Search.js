import React from 'react'
import './search.css';
import Button from '@mui/material/Button';
import Searchitems from './Searchitems';


function Search() {
  return (
    <div className='search'>
        <div className='search-info'>
            <h2>50 Stays • 17 May to 25 May • 3 Guests</h2>
            <h1>Stays nearby</h1>
            <Button variant="outlined">Cancellation</Button>
            <Button  variant="outlined">Amenties</Button>
            <Button variant="outlined">Review</Button>
            <Button variant="outlined">Photos</Button>
            <Button variant="outlined">More Filters</Button>

        </div>
        <div>
            <Searchitems
            img="https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=960"
            location="Twizel,Cantenbury,New Zealand"
            title="Skylark Cabin - Ben Ohau Private Luxury Escape"
            description="Entire cabin hosted by Garry
            2 guests • 1 bedroom • 1 bed • 1 bathroom" 
            rating={4.94}
            price="₹22,968/night"
            total="₹1,66,678"
            

            />

<Searchitems
            img="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=960"
            location="Abiansemal,Bali,Indonesia"
            title="Aura House 2bds Eco Bamboo House, Pool, River View"
            description="Entire villa hosted by Wayan 4 guests • 2 bedroom • 2 bed • 2 bathroom"
            rating={4.88}
            price="₹26,355/night"
            total="₹1,31,775"

            
            />

<Searchitems
            img="https://a0.muscache.com/im/pictures/e1007553-4aff-4139-b913-21070752e414.jpg?im_w=960"
            location="Kerala,India"
            title="Camp Footprint - Wilderness Getaway - All 3 cabins"
            description="Hut hosted by Senthil
            9 guests • 3 bedroom • 6 bed • 3 bathroom"
            rating={2.0}
            price="₹28,800/night"
            total="₹96,000"

            
            />

<Searchitems
            img="https://a0.muscache.com/im/pictures/c3fae636-667f-472d-8d4b-a3534c3c196d.jpg?im_w=960"
            location="Kien Giang Province,Vietnam"
            title="Larina Beach House"
            description="Entire home hosted by Nin
            4 guests • 1 bedroom • 1 bed • 1 bathroom"
            rating={4.81}
            price="₹3,488/night"
            total="₹19,903"

            
            />

<Searchitems
            img="https://a0.muscache.com/im/pictures/544d228d-7832-448c-aba9-e973f00db112.jpg?im_w=960"
            location="Idukki,Kerala,India"
            title="Hobbit House"
            description="Earthen home hosted by Ashif
            2 guests • 1 bed • 1 bathroom"
            rating={4.60}
            price="₹7,499/night"
            total="₹42,788"

            
            />

<Searchitems
            img="https://a0.muscache.com/im/pictures/miso/Hosting-604855093626546308/original/8bf35222-6018-4f7c-accb-569e338f0e4d.jpeg?im_w=960"
            location="Chambebellur,Karnataka,India"
            title="Highfields Coorg"
            description="Private room in bungalow hosted by Bobby
            8 guests • 4 bedroom • 4 bed • 4 shared bathroom"
            rating={4.89}
            price="₹3,500/night"
            total="19,971"

            
            />

<Searchitems
            img="https://a0.muscache.com/im/pictures/miso/Hosting-47721565/original/bb35bfcf-f276-4e00-a0d1-73b319b2a9cd.jpeg?im_w=960"
            location="Ubud,Bali,India"
            title="Bali Bamboo House | Rescape Ubud - Relief Villa"
            description="Hut hosted by Rescape
            2 guests • 1 bedroom • 1 bed • 1 bathroom"
            rating={4.78}
            price="₹3,956/night"
            total="₹22,570"

            
            />

<Searchitems
            img="https://a0.muscache.com/im/pictures/0bbac954-3194-4aef-b37e-cea9761010e6.jpg?im_w=960"
            location="Thalang District,Phuket,Thailand"
            title="D-Lux breath taking 5 bed sea view villa in Ao Po"
            description="Entire villa hosted by Ulaiporn
            10 guests • 5 bedroom • 6 bed • 4 bathroom"
            rating={4.81}
            price="30,899/night"
            total="₹2,54,493"

            
            />
            
        </div>
        
    </div>
  )
}

export default Search;