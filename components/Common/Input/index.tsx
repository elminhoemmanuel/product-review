import React from 'react'

type InputProps = React.ComponentProps<'input'>

const Input = ({ ...rest }: InputProps) => {
    return (
        <div className=''>
            <input {...rest} className="text-sm w-full block p-3 text-ckdarkblue bg-transparent border 
            border-gray-200 hover:border-cklightblue rounded-md focus:outline-none placeholder-ckdarkblue"
            />
        </div>
    )
}

export default Input