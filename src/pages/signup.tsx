import React from 'react'
import { Text, InputText, ButtonYellow, GoogleButton } from '../Comp/smallComp'
import { NavbarAuth, Footer } from '../Comp/mediumComp'

const SignUp = () => {
    return (
        <div>
            {/* img */}
            <>
                <div className='flex flex-col gap-5 p-7'>
                    <NavbarAuth info='Log In' />
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
                    <div className='flex flex-col gap-3'>
                        <Text
                            text="Phone Number:"
                            style='text-md font-bold text-slate-600 tracking-wide'
                        />
                        <InputText
                            info='Enter your phone number'
                        />
                    </div>
                    <ButtonYellow info='Sign Up' onclick='' />
                    <GoogleButton info='Sign Up with Google' />
                </div>
                <Footer />
            </>
        </div>
    )
}

export default SignUp