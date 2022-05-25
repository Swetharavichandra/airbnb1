import React from 'react'
import'./homepage.css';
import Previewicon from './Previewicon';
import'./previewicon.css';
import Cards from './Cards';





function Homepage() {
  return (
    <div className='home'>
      <Previewicon/>
      <div className='home-cards'>
              {/* info of cards */}
        <Cards
        src="https://a0.muscache.com/im/pictures/8db6ed20-fc30-4f7e-ae90-3f860874158b.jpg?im_w=960"
        title="Vestvågøy, Nordland, Norway"
        description="This is a 3 bedroom high-quality and well-equipped chalet in beautiful Lapland."
        price="₹40,384/night"
        />
        <Cards
        src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-23863755/original/2ce81508-1182-4fdf-87b9-382867a48815.jpeg?im_w=960"
        title="Yallingup Weekender"
        description="This architecturally designed, arty holiday home sits perfectly within its 10 acres of picturesque rural leafy surrounds."
        price="₹50890/night"
        />
        <Cards 
        src="https://a0.muscache.com/im/pictures/832cfc80-d0c7-4736-8e7c-30b0340f67fd.jpg?im_w=960"
                title="Aura House 2bds Eco Bamboo House"
                description="Aura house is a beautiful & unique eco bamboo house built on the west bank of the River Ayung facing east to catch sunrise."
                price="₹35,384/night"
                 />
        
</div>

<div className='home-cards'>
        <Cards 
        src="https://a0.muscache.com/im/pictures/9b731de6-b8b6-4eae-aba2-631216bf1bfc.jpg?im_w=960"
        title="The Boot - Fairytale Accommodation"
        description="Rising from the ground like something straight out of a fairytale storybook, The Boot is one of those true one-off places."
        price="₹40,278/night"
        />
        <Cards src="https://a0.muscache.com/im/pictures/miso/Hosting-49372736/original/439cbe6b-8e82-47ce-8900-c6a04e0685e5.jpeg?im_w=960"
                title="Mystagoge Retreat"
                description="A private heated indoor cave pool with jacuzzi will be waiting for you to offer a mystic experience."
                price="₹70,289/night"
                />
        <Cards src="https://a0.muscache.com/im/pictures/7811d394-1ef2-4c15-9c39-a00e284b0a63.jpg?im_w=960"
                title="Beach House"
                description="This true beach spot gives you the privilege of living on the beach."
                price="₹60000/night"
                />
        

      </div>

      <div className='home-cards'>
        <Cards src="https://a0.muscache.com/im/pictures/4a5c629b-9c92-450e-8d8f-995875798838.jpg?im_w=960"
                title="Ella Retreat"
                description="Ella Retreat offer's luxury accommodation compromising of designer inspired cottages."
                price="₹18,890/night"
                 />
        <Cards src="https://a0.muscache.com/im/pictures/miso/Hosting-40682759/original/821371c2-a8ae-4f82-8675-9ab7128b6d0e.jpeg?im_w=960"
                title="Zone 51 Malpe"
                description="Zone 51 by Beach County wants to offer a fulfilling stay situated on the sleepy village of Pithrody Beach. "
                price="₹30,384/night"
                />
        <Cards 
        src="https://a0.muscache.com/im/pictures/f753c848-73e6-4510-9f80-ae0ee8f76552.jpg?im_w=960"
                title="Castello di Naro Exclusive"
                description="the Castle of Naro is a suggestive and elegant location, ideal for organizing private, cultural and corporate events."
                price="₹80,880/night"
                />
        
                

      </div>
        
        
      <div className='home-cards'>
                <Cards src="https://a0.muscache.com/im/pictures/cf5cc4c3-57fe-429a-ae43-3998500b5fac.jpg?im_w=960"
                title="478 Camp Cabin Chic A"
                description="Camp Cabin Chic style house located 478 meters above mean sea level in one of the most scenic and peaceful destination, ."
                price="₹20,194/night"
                 />
                 <Cards
        src="https://a0.muscache.com/im/pictures/61796a4f-1752-4b1e-b3b4-e6e11111e4b6.jpg?im_w=960"
        title="The Echo Studios "
        description="The Studios allow you to immerse yourself in Bali beach life while providing a serene escape when you need it."
        price="₹60,384/night"
        />
        <Cards
         src="https://a0.muscache.com/im/pictures/04eaa1c0-f03d-4bbf-a2b5-0dc80509cf2d.jpg?im_w=960"
                title="Dome - Bamboo Villa in Eco Six Bali"
                description="The Dome is a newly built one bedroom bamboo cabin situated within the Eco Six Resort.."
                price="₹25,220/night"
                />

                </div>
    
    
    </div>
  )
}

export default Homepage