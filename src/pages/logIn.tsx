import React from 'react'
import { Text, InputText, ButtonBrown, GoogleButton } from '../Comp/smallComp'
import { NavbarAuth, FooterAuth } from '../Comp/mediumComp'
import image1 from '../image/auth.png'
import { useNavigate } from 'react-router'
import { Bounce, toast } from 'react-toastify'

const LogIn = () => {
    const navigate = useNavigate()

    const dt = {
        email: '',
        password: ''
    }

    let dtLocal = localStorage.getItem('a')
    let getDt = dtLocal ? JSON.parse(dtLocal) : null

    const loginBtn = () => {
        if (getDt && getDt.email == dt.email && atob(getDt.password) == dt.password) {
            toast("☕ Login successful!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                theme: 'dark',
                transition: Bounce
            });

            getDt.is_active = true
            localStorage.setItem('a', JSON.stringify(getDt))
            navigate('/')
        } else if ((getDt && getDt.email != dt.email) || (getDt && atob(getDt.password) != dt.password)) {
            toast.error('Incorrect password or email!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                theme: 'dark',
                transition: Bounce,
            })
        } else {
            toast.error('Account not found', {
                position: "top-right",
                autoClose: 2000,
                pauseOnHover: false,
                hideProgressBar: false,
                closeOnClick: true,
                theme: 'dark',
                transition: Bounce,
            })
        }
    }

    return (
        <div className='md:flex md:items-center md:justify-center md:bg-slate-200 h-screen'>
            <img src={image1} className='hidden md:flex md:w-auto md:h-screen' alt="" />
            <div className='w-full md:w-1/3 bg-[#F8F8F8] h-full'>
                <NavbarAuth info='Sign Up' />
                <hr />
                <div className='flex flex-col gap-5 px-7 py-4 bg-white'>
                    <div className='flex flex-col gap-3'>
                        <Text
                            text="Email Address:"
                            style='text-xs font-bold text-slate-600 tracking-wide'
                        />
                        <InputText
                            info='Enter your email address'
                            onchange={(e: any) => dt.email = e.target.value}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Text
                            text="Password:"
                            style='text-xs font-bold text-slate-600 tracking-wide'
                        />
                        <InputText
                            info='Enter your password'
                            onchange={(e: any) => dt.password = e.target.value}
                        />
                    </div>
                    <ButtonBrown info='Log In' onclick={loginBtn} />
                    <GoogleButton info='Log In with Google' />
                </div>
                <FooterAuth />
            </div>
        </div>
    )
}

export default LogIn