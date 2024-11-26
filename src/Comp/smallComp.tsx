import React from "react"
import Google from '../image/google.png'

interface PropsType {
    info?: string;
    onclick?: any;
    text?: string;
    style?: string
}

const ButtonBrown = ({ info, onclick }: Readonly<PropsType>) => {
    return (
        <button className="bg-[#6A4029] font-rubik hover:bg-opacity-90 text-white font-semibold px-6 py-1 rounded-md tracking-wide" onClick={onclick}>{info}</button>
    )
}

const ButtonYellow = ({ info, onclick }: Readonly<PropsType>) => {
    return (
        <button className='bg-[#FFBA33] font-rubik hover:bg-opacity-80 text-[#6A4029] font-semibold px-6 py-2 rounded-md tracking-wide' onClick={onclick}>{info}</button>
    )
}

const GoogleButton = ({ info }: Readonly<PropsType>) => {
    return (
        <div className="shadow-md shadow-gray-500 flex items-center justify-center py-2 px6">
            <img src={Google} alt="" />
            <button className='font-rubik hover:underline hover:decoration-solid text-black font-semibold pl-2 rounded-md tracking-wide'>{info}</button>
        </div>
    )
}

const ButtonBrownBorder = ({ info }: Readonly<PropsType>) => {
    return (
        <button className="font-rubik border border-[#FFBA33] hover:bg-[#FFBA33] font-bold text-[#6A4029] px-6 py-2 rounded-md tracking-wide">{info}</button>
    )
}

const InputText = ({ info }: Readonly<PropsType>) => {
    return (
        <input className='border text-xs font-rubik border-solid border-[#4F5665] p-3 rounded-md' placeholder={info} type="text" />
    )
}

const Text = ({ text, style }: Readonly<PropsType>) => {
    return (
        <p className={`font-['rubik'] ${style}`}>{text}</p>
    )
}

export { ButtonBrown, ButtonYellow, InputText, Text, GoogleButton, ButtonBrownBorder }