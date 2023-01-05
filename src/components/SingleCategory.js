import React, { useEffect } from 'react';
import '../Styles/singleCategory.css';
import { useGlobalContext } from '../context/context';


const SingleCategory = ( {name} ) => {

  const { catArr,fetchCategory }=useGlobalContext();

  useEffect(()=>{
      fetchCategory(name);
      console.log(catArr);
  },[])

  return (
    <div className='singleCategory'>
        <p>{name}</p>
        <div className="imgContainer">
         {
          catArr.map( img => 
              <img src={img.imgPath} key={img.id} alt={name}/>
            )
         }
        </div>
    </div>
  )
}

export default SingleCategory
