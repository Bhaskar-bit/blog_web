import React,{useId} from 'react'

/**
* @author
* @function Select
**/

export const Select = React.forwardRef(({
    options,
    label,
    className='',
    ...props
},ref) => {

    const id = useId()

  return(
    <div className='w-full' >
        {label && <label htmlFor={id} className=''></label>}
        <select 
        {...props}
        id={id}
        ref={ref}
        className={`${className}`}
        >
            {options?.map((option)=>{
                <option key={option} value={option}>
                    {option}
                </option>
            })}

        </select>

    </div>
   )
  }
)
