import React from 'react';
import Button from '@mui/material/Button';
import './explore.css';
import  Exploreitems  from './Exploreitems';

const Explore = () => {
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
            <Exploreitems
            img="https://a0.muscache.com/im/pictures/miso/Hosting-623047998310139051/original/a4cf26dc-9503-442c-b2cd-6d8ae9cc4c31.jpeg?im_w=960"
            location="Bengaluru,Karnataka,India"
            title="Lovely room in a spacious penthouse in Indiranagar"
            description="Private room in apartment hosted by Gurucharan
            2 guests • 1 bedroom • 1 bed • 1 bathroom" 
            rating={4.98}
            price="₹2558/night"
            total="₹15,166"
            

            />

<Exploreitems
            img="https://a0.muscache.com/im/pictures/0f38e5a4-da7d-4279-b880-fea0ccec6014.jpg?im_w=960"
            location="Chennai,Tamilnadu,India"
            title="Aura House 2bds Eco Bamboo House, Pool, River View"
            description="Private room in rental unit hosted by Subha 4 guests • 1 bedroom • 1 bed • 1 bathroom"
            rating={4.92}
            price="₹1310/night"
            total="₹7,475"

            
            />

<Exploreitems
            img="https://a0.muscache.com/im/pictures/3ae18a4a-7938-4718-a992-973dfc6d73dd.jpg?im_w=960"
            location="Kerala,India"
            title="Camper by the bay"
            description="Entire villa hosted by Swahel
            12 guests • 3 bedroom • 6 bed • 3 bathroom"
            rating={2.0}
            price="₹28,800/night"
            total="₹96,000"

            
            />

<Exploreitems
            img="https://a0.muscache.com/im/pictures/miso/Hosting-52868683/original/889595ea-17bb-4450-ae93-549e939603e0.jpeg?im_w=960"
            location="Landmark Plus,Vietnam"
            title="Larina Beach House"
            description="Entire apartment hosted by Nin
            4 guests • 1 bedroom • 1 bed • 1 bathroom"
            rating={4.81}
            price="₹3,488/night"
            total="₹19,903"

            
            />

<Exploreitems
            img="https://a0.muscache.com/im/pictures/abe67ad4-01f3-4288-bd1a-e78e442483b8.jpg?im_w=960"
            location="Idukki,Kerala,India"
            title="Aida Villa AC One Bedroom Cottage"
            description="Private room in guest suite hosted by Mithun
            2 guests • 1 bed • 1 bathroom"
            rating={4.60}
            price="₹7,499/night"
            total="₹42,788"

            
            />

<Exploreitems
            img="https://a0.muscache.com/im/pictures/44d1e8ff-963c-4808-98a5-9feb77278a4b.jpg?im_w=960"
            location="Kodagu,Karnataka,India"
            title="Tool House(4): Great Estate Stay for Remote Work"
            description="Private room in farm stay hosted by Raho
            8 guests • 4 bedroom • 4 bed • 4 shared bathroom"
            rating={4.89}
            price="₹3,500/night"
            total="19,971"

            
            />

<Exploreitems
            img="https://a0.muscache.com/im/pictures/miso/Hosting-47721565/original/bb35bfcf-f276-4e00-a0d1-73b319b2a9cd.jpeg?im_w=960"
            location="Ubud,Bali,India"
            title="Bali Bamboo House | Rescape Ubud - Relief Villa"
            description="Hut hosted by Rescape
            2 guests • 1 bedroom • 1 bed • 1 bathroom"
            rating={4.78}
            price="₹3,956/night"
            total="₹22,570"

            
            />

<Exploreitems
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

export default Explore