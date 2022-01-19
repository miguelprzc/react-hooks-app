import React from 'react'

export const Small = React.memo(({value}) => {

  console.log('I was called again :(')
  return (
    <small>
      {value}
    </small>
  )
})
