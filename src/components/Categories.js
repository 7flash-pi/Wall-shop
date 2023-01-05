import React, { useEffect, useState } from 'react';
import '../Styles/categories.css';
import SingleCategory from './SingleCategory';




const Categories = () => {


  return (
    <div className='category'>
        <label>category</label>
        <div className="categoryGrid">
          <SingleCategory name="anime" />
          <SingleCategory name="nature" />
        </div>
      
    </div>
  )
}

export default Categories
