import React from 'react'

const Count = ({text,count}) => {
    console.log(`Rendering ${text} Component`)
  return (
    <div>
        <h1>{text}-{count}</h1>
    </div>
  )
}

export default React.memo(Count)