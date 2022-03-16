import React from 'react'

type TextBoxProps = React.ComponentProps<'textarea'>

const TextBox = ({...rest}) => {
  return (
    <textarea {...rest} rows={2} className="text-sm w-full block p-3 text-ckdarkblue bg-transparent border 
    border-gray-200 hover:border-cklightblue rounded-md focus:outline-none placeholder-ckdarkblue">
    </textarea>
  )
}

export default TextBox