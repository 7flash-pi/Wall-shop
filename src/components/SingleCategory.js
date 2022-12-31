import React from 'react';
import '../Styles/singleCategory.css';
import anime from '../context/data';

const SingleCategory = ( {name} ) => {
  return (
    <div className='singleCategory'>
        <p>{name}</p>
        <div className="imgContainer">
         {
          anime.map( img => 
              <img src={img.imgPath} key={img.id} alt={name}/>
            )
         }
        </div>
    </div>
  )
}

export default SingleCategory
