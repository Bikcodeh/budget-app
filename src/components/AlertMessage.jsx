import React from 'react'

export const AlertMessage = ({children, type}) => {
  return (
    <div className={`alerta ${type}`}>{ children }</div>
  )
}
