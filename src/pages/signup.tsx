import React from 'react'
import { Text, InputText, ButtonYellow, GoogleButton } from '../Comp/smallComp'
import { NavbarAuth, FooterAuth } from '../Comp/mediumComp'
import image1 from '../image/auth.png'

const SignUp = () => {
    return (
        <div className='md:flex md:items-center md:justify-center md:bg-slate-200 h-screen'>
            <img src={image1} className='hidden md:flex md:w-auto md:h-screen' alt="" />
            <div className='w-full md:w-1/3 bg-[#F8F8F8] h-full'>
                <NavbarAuth info='Log In' />
                <hr />
                <div className='flex flex-col gap-2 px-7 py-4 md:py-2 bg-white'>
                    <div className='flex flex-col gap-3'>
                        <Text
                            text="Email Address:"
                            style='text-xs font-bold text-slate-600 tracking-wide'
                        />
                        <InputText
                            info='Enter your email address'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Text
                            text="Password:"
                            style='text-xs font-bold text-slate-600 tracking-wide'
                        />
                        <InputText
                            info='Enter your password'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Text
                            text="Phone Number:"
                            style='text-xs font-bold text-slate-600 tracking-wide'
                        />
                        <InputText
                            info='Enter your phone number'
                        />
                    </div>
                    <ButtonYellow info='Sign Up' onclick='' />
                    <GoogleButton info='Sign Up with Google' />
                </div>
                <FooterAuth />
            </div>
        </div>
    )
}

export default SignUp