import React,{useState} from 'react'
import'./previewicon.css';
import Button from '@mui/material/Button';
import Showdate from './Showdate';
import { useHistory } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';






function Previewicon() {
  
  
  const history = useHistory();
  const[showCalender,setshowCalender]=useState(false);
  return (
    <div className='previewicon'>
      <div className='calender'>
        {/* calender code */}
        {showCalender&&<Showdate/>}
        <Button onClick={()=>setshowCalender(!showCalender)} sx={{ borderColor: 'coral' }} className='calenderbutton' variant='outlined'>Search Date 
        <SearchIcon className='icon'/></Button>
      </div>
      <div className='preview-info'>
                
       <Button onClick={() => history.push('/explore')} variant='outlined'>Explore Nearby</Button>
            </div>
    </div>
  )
}

export default Previewicon;