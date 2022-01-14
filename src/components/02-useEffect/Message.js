import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({});

  useEffect(() => {

    const onMouseMove = (e) => {
      const coords = {x: e.x, y: e.y};
      setCoords(coords);
    }
  
    window.addEventListener('mousemove', onMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);

  return (
    <div>
      <h3>You are the best!</h3>
      <p>Coordinates: x: {(coords.x)} y: {(coords.y)}</p>
    </div>
  )
}
