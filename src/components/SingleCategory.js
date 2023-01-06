import React, { useEffect, useState } from 'react';
import '../Styles/singleCategory.css';
import db from '../context/firebase';

import { query,collection, onSnapshot} from 'firebase/firestore';



const SingleCategory = ( {name} ) => {

  const [catArr,setCatArr]=useState([]);

  const fetchCategory = async( name ) =>{
    const q = query(collection(db, name.toString()));
          const unsub = onSnapshot(q, (querySnapshot) => {
              const newdata=querySnapshot.docs.map(d => d.data());
              setCatArr(newdata);
              console.log(newdata,name);
          });
  
  }
  

  useEffect(()=>{
      fetchCategory(name);
  },[catArr])

  return (
    <div className='singleCategory'>
        <p>{name}</p>
        <div className="imgContainer">
         {
          catArr.map( img => 
              <img src={img.imgPath}  key={img.id} alt={name}/>
            )
         }
        </div>
    </div>
  )
}

export default SingleCategory
