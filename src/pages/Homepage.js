import React from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import PageFooter from '../components/PageFooter'

const Homepage = () => {
  return (
    <div className='Homepage'>
      <Navbar />
      <Categories />
       <PageFooter />
      
    </div>
  )
}

export default Homepage
