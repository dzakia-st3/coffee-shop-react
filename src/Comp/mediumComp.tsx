import React from 'react'
import { ButtonYellow, Text } from './smallComp'
import logo from '../image/coffee 1.png'
import fb from '../image/facebook.png'
import twitter from '../image/twitter.png'
import ig from '../image/instagram.png'

interface PropsType {
    info?: string
}

const NavbarAuth = ({ info }: Readonly<PropsType>) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex flex-1 items-center'>
                <img src={logo} className='h-7 w-auto' alt="logo" />
                <Text
                    text='Coffee Shop'
                    style='pl-3 text-black text-md font-bold tracking-wider'
                />
            </div>
            <ButtonYellow info={info} onclick='' />
        </div>
    )
}

const Footer = () => {
    return (
        <div className='flex p-7 bg-[#F8F8F8]'>
            <div className='flex flex-col gap-4 pr-10'>
                <div className='flex items-center'>
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
                    <div className='flex gap-5'>
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
                        style='text-black text-xs font-bold pt-4 pb-2'
                    />
                    <div className='flex gap-5'>
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

export { NavbarAuth, Footer }