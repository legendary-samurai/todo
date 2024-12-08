import React from 'react'

const Input = ({cName , value , onchange , placeholder}) => {
  return (
    <input placeholder={placeholder} className={cName} value={value} onChange={onchange} type="text"/>
  )
}

export default Input
