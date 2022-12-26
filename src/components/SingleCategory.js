import React from 'react';
import anime1 from '../category/anime/anime1.jpg'


const SingleCategory = () => {
  return (
    <div className='singleCategory'>
        <p>Anime</p>
        <div className="imgContainer">
            <img src={anime1} alt="#" />
        </div>
    </div>
  )
}

export default SingleCategory
