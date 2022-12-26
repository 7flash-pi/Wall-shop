import React from 'react';
import '../Styles/categories.css';
import SingleCategory from './SingleCategory';

const Categories = () => {
  return (
    <div className='category'>
        <label>category</label>
        <div className="categoryGrid">
          <SingleCategory />
            
        </div>
      
    </div>
  )
}

export default Categories
