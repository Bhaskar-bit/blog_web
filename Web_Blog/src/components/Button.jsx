import React from 'react'

/**
* @author
* @function Button
**/

export const Button = ({children,
type ='button',
bgColor ='bg-blue-600',
textColor='text-White',
className ='',
...props

}) => {
  return(
    <button className={`${bgColor} ${textColor} ${className}`}{...props}>
        {children}
    </button>
   )
  }
