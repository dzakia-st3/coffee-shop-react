import React from 'react'
import { Text, InputText, ButtonYellow, GoogleButton } from '../Comp/smallComp'
import { NavbarAuth, Footer } from '../Comp/mediumComp'

const LogIn = () => {
    return (
        <div>
            {/* img */}
            <>
                <div className='flex flex-col gap-5 p-7'>
                    <NavbarAuth info='Sign Up' />
                    <div className='flex flex-col gap-3'>
                        <Text
                            text="Email Address:"
                            style='text-md font-bold text-slate-600 tracking-wide'
                        />
                        <InputText
                            info='Enter your email address'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Text
                            text="Password:"
                            style='text-md font-bold text-slate-600 tracking-wide'
                        />
                        <InputText
                            info='Enter your password'
                        />
                    </div>
                    <ButtonYellow info='Log In' onclick='' />
                    <GoogleButton info='Log In with Google' />
                </div>
                <Footer />
            </>
        </div>
    )
}

export default LogIn