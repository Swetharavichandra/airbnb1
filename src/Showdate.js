import React,{useState} from 'react'
import'./showdate.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Button from '@mui/material/Button';

import {useHistory} from 'react-router-dom'



function Showdate() {
  
  const history = useHistory();
  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setEndDate]=useState(new Date());
  

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  };

  function handleSelect(ranges){
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className='showdate'>
     <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      

       <Button onClick={() => history.push('/search')}>Check Availability</Button>
      
        
    </div>
  )
}

export default Showdate
