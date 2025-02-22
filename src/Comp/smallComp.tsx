import React from "react"
import Google from '../image/google.png'

interface PropsType {
    info?: string;
    onclick?: any;
    text?: string;
    style?: string;
    onchange?: any
}

const ButtonBrown = ({ info, onclick, style }: Readonly<PropsType>) => {
    return (
        <button className={`bg-[#6A4029] font-rubik hover:bg-opacity-90 text-white font-semibold px-6 py-2 rounded-md tracking-wide ${style}`} onClick={onclick}>{info}</button>
    )
}

const ButtonYellow = ({ info, onclick, style }: Readonly<PropsType>) => {
    return (
        <button className={`bg-[#FFBA33] font-rubik hover:bg-opacity-80 text-[#362115] font-semibold px-6 py-2 rounded-md tracking-wide ${style}`} onClick={onclick}>{info}</button>
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

const ButtonBrownBorder = ({ info, style, onclick }: Readonly<PropsType>) => {
    return (
        <button className="font-rubik border border-[#FFBA33] hover:bg-[#FFBA33] font-bold text-[#362115] px-6 py-2 rounded-md tracking-wide" onClick={onclick}>{info}</button>
    )
}

const InputText = ({ info, style, onchange }: Readonly<PropsType>) => {
    return (
        <input className={`border text-xs font-rubik border-solid border-[#4F5665] p-3 rounded-md ${style}`} placeholder={info} onChange={onchange} type="text" />
    )
}

const Text = ({ text, style, onclick }: Readonly<PropsType>) => {
    return (
        <p className={`font-['rubik'] ${style}`} onClick={onclick}>{text}</p>
    )
}

export { ButtonBrown, ButtonYellow, InputText, Text, GoogleButton, ButtonBrownBorder }