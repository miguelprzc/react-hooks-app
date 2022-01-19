import React, { useRef } from 'react';
import '../02-useEffect/effect.css';


export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <div>
      <h3>Focus Screen</h3>
      <hr/>
      <input 
        ref={inputRef}
        className='form-control'
        placeholder='Your name'  
      />
      <button 
        className='btn btn-outline-primary mt-5'
        onClick={handleClick}
      >Focus</button>
    </div>
  )
}
