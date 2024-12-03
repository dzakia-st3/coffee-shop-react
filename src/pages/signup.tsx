import React, { useState } from 'react'
import { Text, InputText, ButtonBrown, GoogleButton } from '../Comp/smallComp'
import { NavbarAuth, FooterAuth } from '../Comp/mediumComp'
import image1 from '../image/auth.png'
import { Bounce, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router'

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        phone_number: '',
        is_active: true
    })

    let getData = localStorage.getItem('a')
    let checkData = getData ? JSON.parse(getData) : null

    const navigate = useNavigate()

    const signupButton = () => {
        form.password = form.password == '' ? '' : btoa(form.password)
        localStorage.setItem('a', JSON.stringify(form))

        if (checkData.email == form.email) {
            toast.error('Account already exists!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'dark',
                transition: Bounce,
            })
        } else if (form.email != '' && form.password != '') {
            toast("☕ Registration successful! Log in now.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'dark',
                transition: Bounce,
            });

            navigate('/login')
        }
    }

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
                            onchange={(e: any) => form.email = e.target.value}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Text
                            text="Password:"
                            style='text-xs font-bold text-slate-600 tracking-wide'
                        />
                        <InputText
                            info='Enter your password'
                            onchange={(e: any) => form.password = e.target.value}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Text
                            text="Phone Number:"
                            style='text-xs font-bold text-slate-600 tracking-wide'
                        />
                        <InputText
                            info='Enter your phone number'
                            onchange={(e: any) => form.phone_number = e.target.value}
                        />
                    </div>
                    <ButtonBrown info='Sign Up' onclick={signupButton} />
                    <GoogleButton info='Sign Up with Google' />
                </div>
                <FooterAuth />
            </div>
        </div>
    )
}

export default SignUp