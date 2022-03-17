import React from 'react'

type HeaderProps = {
    text: string;
    size: "sm" | "md" | "lg"
}

const Header = ({ text, size }: HeaderProps) => {

    const defaultStyle = "text-ckdarkblue font-bold mb-4"
    const getSizeText = ( size:string ):string =>{
        if(size === "lg"){
            return "text-2xl"
        }
        if(size === "md"){
            return "text-xl"
        }
        return "text-lg"
    }

    return (
        <h1 data-testid="header" className={`${getSizeText(size)} ${defaultStyle}`} >
            {text}
        </h1>
    )
}

export default Header