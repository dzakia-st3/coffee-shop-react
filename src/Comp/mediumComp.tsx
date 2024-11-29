import React, { useState } from 'react'
import { ButtonBrown, ButtonYellow, Text } from './smallComp'
import logo from '../image/coffee 1.png'
import fb from '../image/facebook.png'
import twitter from '../image/twitter.png'
import ig from '../image/instagram.png'

interface PropsType {
    info?: string
}

const NavbarAuth = ({ info }: Readonly<PropsType>) => {
    return (
        <div className='flex justify-between items-center bg-white shadow-md w-full py-2 px-3 sm:px-7'>
            <div className='flex flex-1 items-center'>
                <img src={logo} className='h-6' alt="logo" />
                <Text
                    text='Coffee Shop'
                    style='pl-3 text-black text-base font-bold tracking-wider'
                />
            </div>
            <ButtonYellow info={info} onclick='' />
        </div>
    )
}

const FooterAuth = () => {
    return (
        <div className='flex py-4 px-6 bg-[#F8F8F8]'>
            <div className='flex flex-col gap-4 pr-10'>
                <div className='flex items-center text-'>
                    <img src={logo} className='h-5 w-auto' alt="logo" />
                    <Text
                        text='Coffee Shop'
                        style='pl-3 text-black text-xs font-bold tracking-wide'
                    />
                </div>
                <Text
                    text='Coffee Shop is a store that sells some good meals and especially coffee. We provide high quality beans'
                    style='text-black text-xs'
                />
                <div className="flex gap-2">
                    <img src={fb} alt="fb" />
                    <img src={twitter} alt="twitter" />
                    <img src={ig} alt="ig" />
                </div>
                <Text
                    text='©2020CoffeeStore'
                    style='text-slate-500 text-xs'
                />
            </div>
            <div className='w-2/3'>
                <div>
                    <Text
                        text='Product'
                        style='text-black text-xs font-bold pb-2'
                    />
                    <div className='flex flex-row gap-5'>
                        <div className='flex flex-col gap-1'>
                            <Text
                                text='Download'
                                style='text-black text-xs'
                            />
                            <Text
                                text='Locations'
                                style='text-black text-xs'
                            />
                            <Text
                                text='Blog'
                                style='text-black text-xs'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Text
                                text='Pricing'
                                style='text-black text-xs'
                            />
                            <Text
                                text='Countries'
                                style='text-black text-xs'
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Text
                        text='Engage'
                        style='text-black text-xs font-bold pt-2 pb-2'
                    />
                    <div className='flex flex-row gap-5'>
                        <div className='flex flex-col gap-1'>
                            <Text
                                text='Coffee Shop?'
                                style='text-black text-xs'
                            />
                            <Text
                                text='FAQ'
                                style='text-black text-xs'
                            />
                            <Text
                                text='Terms of Service'
                                style='text-black text-xs'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Text
                                text='About Us'
                                style='text-black text-xs'
                            />
                            <Text
                                text='Privacy Policy'
                                style='text-black text-xs'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState(false)
    const [menuNavMobile, setMenuNavMobile] = useState(false)

    const changeBackground = () => {
        if (window.scrollY > 0) {
            setNavbarColor(true)
        } else {
            setNavbarColor(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const HamMenuOnClick = () => {
        if (menuNavMobile == true) {
            setMenuNavMobile(false)
        } else {
            setMenuNavMobile(true)
        }
    }

    return (
        <div className={navbarColor ? "fixed shadow-sm w-full bg-white bg-opacity-60 shadow-md z-20" : "fixed w-full bg-white shadow-sm z-20"}>
            <div className='flex justify-between items-center py-5 px-8'>
                <div className='flex items-center'>
                    <img src={logo} className='h-7 w-auto' alt="logo" />
                    <Text
                        text='Coffee Shop'
                        style='pl-3 text-black text-sm md:text-base font-bold tracking-wider'
                    />
                </div>
                <div className='hidden md:flex md:gap-4'>
                    <Text
                        text='Home'
                        style='text-gray-500 hover:text-[#362115] text-base hover:underline'
                    />
                    <Text
                        text='Product'
                        style='text-gray-500 hover:text-[#362115] text-base hover:underline'
                    />
                    <Text
                        text='Your Cart'
                        style='text-gray-500 hover:text-[#362115] text-base hover:underline'
                    />
                    <Text
                        text='History'
                        style='text-gray-500 hover:text-[#362115] text-base hover:underline'
                    />
                </div>
                <div className='hidden md:flex md:gap-2'>
                    <ButtonBrown info='Log In' />
                    <ButtonYellow info='Sign Up' />
                </div>
                <a href="javascript:void(0);" onClick={HamMenuOnClick} className={navbarColor ? "text-[#362115] md:hidden" : "md:hidden"}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
            <div className={menuNavMobile ? "z-20 fixed w-full flex flex-col bg-[#6A4029] bg-opacity-95 text-white text-center" : "hidden"}>
                <a href="#" className="p-3 hover:underline border-b-2 border-white" >Home</a>
                <a href="#" className="p-3 hover:underline border-b-2 border-white" >Product</a>
                <a href="#" className="p-3 hover:underline border-b-2 border-white" >Your Cart</a>
                <a href="#" className="p-3 hover:underline border-b-2 border-white" >History</a>
                <a href="#" className="p-3 hover:underline border-b-2 border-white" >Log In</a>
                <a href="#" className="p-3 hover:underline border-b-2 border-white" >Sign Up</a>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='flex p-7 bg-[#F8F8F8] md:items-center md:justify-around'>
            <div className='flex flex-col gap-4 pr-10 md:w-1/4'>
                <div className='flex items-center'>
                    <img src={logo} className='h-5 w-auto md:h-7' alt="logo" />
                    <Text
                        text='Coffee Shop'
                        style='pl-3 text-black text-xs md:text-base font-bold tracking-wide'
                    />
                </div>
                <Text
                    text='Coffee Shop is a store that sells some good meals and especially coffee. We provide high quality beans'
                    style='text-black text-xs md:text-base'
                />
                <div className="flex gap-2">
                    <img src={fb} alt="fb" />
                    <img src={twitter} alt="twitter" />
                    <img src={ig} alt="ig" />
                </div>
                <Text
                    text='©2020CoffeeStore'
                    style='text-slate-500 text-xs'
                />
            </div>
            <div className='w-2/3 md:flex md:w-1/4 md:justify-around text'>
                <div>
                    <Text
                        text='Product'
                        style='text-black text-xs md:text-base font-bold pb-2'
                    />
                    <div className='flex flex-row gap-5 md:flex-col md:gap-2'>
                        <div className='flex flex-col gap-2'>
                            <Text
                                text='Download'
                                style='text-black text-xs'
                            />
                            <Text
                                text='Locations'
                                style='text-black text-xs'
                            />
                            <Text
                                text='Blog'
                                style='text-black text-xs'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Text
                                text='Pricing'
                                style='text-black text-xs'
                            />
                            <Text
                                text='Countries'
                                style='text-black text-xs'
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Text
                        text='Engage'
                        style='text-black text-xs md:text-base font-bold pt-4 md:pt-0 pb-2'
                    />
                    <div className='flex flex-row gap-5 md:flex-col md:gap-2'>
                        <div className='flex flex-col gap-2'>
                            <Text
                                text='Coffee Shop?'
                                style='text-black text-xs'
                            />
                            <Text
                                text='FAQ'
                                style='text-black text-xs'
                            />
                            <Text
                                text='Terms of Service'
                                style='text-black text-xs'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Text
                                text='About Us'
                                style='text-black text-xs'
                            />
                            <Text
                                text='Privacy Policy'
                                style='text-black text-xs'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Navbar, Footer, NavbarAuth, FooterAuth }