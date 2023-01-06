import React from 'react';
import '../Styles/categories.css';
import SingleCategory from './SingleCategory';
import PageFooter from './PageFooter';




const Categories = () => {


  return (
    <div className='category'>
        <label>category</label>
        <div className="categoryGrid">
          <SingleCategory name="anime" />
          <SingleCategory name="nature"  className='middle'/>
          <SingleCategory name="games" />
        </div>
      
    </div>
  )
}

export default Categories
