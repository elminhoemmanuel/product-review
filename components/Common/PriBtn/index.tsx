import React from 'react'

type PriBtnProps = React.ComponentProps<'button'>

const PriBtn = ({ children, ...rest }: PriBtnProps) => {
    return (
        <button {...rest} className="text-sm block w-full px-5 py-3 text-ckdarkblue font-bold  bg-ckbtn hover:bg-cklightblue rounded-md">
            {children}
        </button>
    )
}

export default PriBtn