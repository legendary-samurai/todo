import React from 'react'

const Button = ({ onclick  , type = 'button' , CName , children}) => {


  return (
    <button type={type} className={CName} onClick={onclick}>
      {
        children
      }
    </button>
  )
}

export default Button
