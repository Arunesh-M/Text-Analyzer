import React, { useContext } from 'react'
import DataContext from '../context/datacontext'

const Nav2 = () => {
  
  const {read,long}=useContext(DataContext);
  
  return (
    <div className='nav2-container'>
      <p className='nav2-text'>Average Reading Time:<span className='nav2-value'>{read} min</span></p>
      <p className='nav2-text'>Longest word:<span className='nav2-value'> {long}</span></p>
    </div>
  )
}

export default Nav2