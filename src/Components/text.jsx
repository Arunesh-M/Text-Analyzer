import React, { useContext } from 'react';
import DataContext from '../context/datacontext';

const Text = () => {
  
  const {text,setText}=useContext(DataContext);

  return (
    <div className='text-container'>
        <textarea className='text-area' spellCheck="false" value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
  )
}

export default Text