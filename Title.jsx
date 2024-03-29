import React from 'react'

const Title = () => {
    console.log("Rendering Title Component")
  return (
    <h1>useCallback Hook</h1>
  )
}

export default React.memo(Title)