import React from 'react'

const Button = ({fun,children}) => {
    console.log(`Rendering ${children} button Component`)
  return (
    <button onClick={fun}>{children}</button>
  )
}

export default React.memo(Button)