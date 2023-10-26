import React, { useContext } from 'react'
import DataContext from '../context/datacontext'

const Nav1 = () => {
  
  const {words,characters,pro,para,sent}=useContext(DataContext)

  return (
    <div className='nav1-container'>
        <p className='nav1-text'>Words<br /><span className='nav1-value'>{words}</span></p>
        <p className='nav1-text'>Characters<br /><span className='nav1-value'>{characters}</span></p>
        <p className='nav1-text'>Sentences<br /><span className='nav1-value'>{sent}</span></p>
        <p className='nav1-text'>Paragraph<br /><span className='nav1-value'>{para}</span></p>
        <p className='nav1-text'>Pronouns<br /><span className='nav1-value'>{pro}</span></p>
    </div>
  )
}

export default Nav1