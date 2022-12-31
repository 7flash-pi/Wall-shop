import React from 'react';
import anime1 from '../category/anime/anime1.jpg';
import anime2 from '../category/anime/anime2.jpg';
import anime3 from '../category/anime/anime3.jpg';
import anime4 from '../category/anime/anime4.jpg';
import anime5 from '../category/anime/anime5.jpg';
import '../Styles/singleCategory.css'


const SingleCategory = ({name,imgGrup}) => {
  return (
    <div className='singleCategory'>
        <p>{name}</p>
        <div className="imgContainer">
           <img src={anime1} alt='anime'/>
           <img src={anime2} alt='anime'/>
           <img src={anime3} alt='anime'/>
           <img src={anime4} alt='anime'/>
           <img src={anime5} alt='anime'/>
        </div>
    </div>
  )
}

export default SingleCategory
