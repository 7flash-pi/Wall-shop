import React from 'react';
import '../Styles/singleCategory.css';


const SingleCategory = ( {name,catArr} ) => {
  return (
    <div className='singleCategory'>
        <p>{name}</p>
        <div className="imgContainer">
         {
          catArr .map( img => 
              <img src={img.imgPath} key={img.id} alt={name}/>
            )
         }
        </div>
    </div>
  )
}

export default SingleCategory
