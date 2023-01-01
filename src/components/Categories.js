import React, { useEffect, useState } from 'react';
import '../Styles/categories.css';
import SingleCategory from './SingleCategory';
import anime from '../context/data'



const Categories = () => {

  const [catArr,SetCatArr]=useState([]);

  useEffect(() => {
    SetCatArr(anime);
  },[])
  return (
    <div className='category'>
        <label>category</label>
        <div className="categoryGrid">
          <SingleCategory name="anime" catArr={catArr} />
          <SingleCategory name="Nature"/>
          <SingleCategory name="LandScape"/>
  
            
        </div>
      
    </div>
  )
}

export default Categories
