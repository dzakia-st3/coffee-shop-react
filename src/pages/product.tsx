import React from 'react'
import { Navbar, Footer } from '../Comp/mediumComp'
import { InputText, Text, ButtonYellow } from '../Comp/smallComp'
import sample from '../image/veggie.png'

const Product = () => {
    return (
        <>
            <Navbar />
            <div className='pt-20 md:pt-24 px-3 sm:px-5 md:px-7'>
                <div className='flex gap-3'>
                    <InputText
                        info='What do you wanna eat?'
                        style='w-full md:w-1/2'
                    />
                    <select aria-label='type' className='md:w-1/2 select-type text-sm text-gray-500 rounded-md' name="" id="">
                        <option selected className='text-sm'>All product</option>
                        <option value='1'>Coffee</option>
                        <option value='2' >Non-Coffee</option>
                        <option value='3'>Food</option>
                    </select>
                </div>
                <div className='py-5 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-5'>
                    <div className='bg-white flex flex-col gap-3 items-center shadow-md shadow-gray-400 rounded-md px-5 py-3'>
                        <img src={sample} className='w-20 rounded-full' alt="" />
                        <Text
                            text='Veggie Tomato Mix'
                            style='font-bold text-center'
                        />
                        <Text
                            text='IDR 24.000'
                            style='text-sm text-[#362115] text-center'
                        />
                        <ButtonYellow info='Add' />
                    </div>
                    <div className='bg-white flex flex-col gap-3 items-center shadow-md shadow-gray-400 rounded-md px-5 py-3'>
                        <img src={sample} className='w-20 rounded-full' alt="" />
                        <Text
                            text='Veggie Tomato Mix'
                            style='font-bold text-center'
                        />
                        <Text
                            text='IDR 24.000'
                            style='text-sm text-[#362115] text-center'
                        />
                        <ButtonYellow info='Add' />
                    </div>
                    <div className='bg-white flex flex-col gap-3 items-center shadow-md shadow-gray-400 rounded-md px-5 py-3'>
                        <img src={sample} className='w-20 rounded-full' alt="" />
                        <Text
                            text='Veggie Tomato Mix'
                            style='font-bold text-center'
                        />
                        <Text
                            text='IDR 24.000'
                            style='text-sm text-[#362115] text-center'
                        />
                        <ButtonYellow info='Add' />
                    </div>
                    <div className='bg-white flex flex-col gap-3 items-center shadow-md shadow-gray-400 rounded-md px-5 py-3'>
                        <img src={sample} className='w-20 rounded-full' alt="" />
                        <Text
                            text='Veggie Tomato Mix'
                            style='font-bold text-center'
                        />
                        <Text
                            text='IDR 24.000'
                            style='text-sm text-[#362115] text-center'
                        />
                        <ButtonYellow info='Add' />
                    </div>
                    <div className='bg-white flex flex-col gap-3 items-center shadow-md shadow-gray-400 rounded-md px-5 py-3'>
                        <img src={sample} className='w-20 rounded-full' alt="" />
                        <Text
                            text='Veggie Tomato Mix'
                            style='font-bold text-center'
                        />
                        <Text
                            text='IDR 24.000'
                            style='text-sm text-[#362115] text-center'
                        />
                        <ButtonYellow info='Add' />
                    </div>
                    <div className='bg-white flex flex-col gap-3 items-center shadow-md shadow-gray-400 rounded-md px-5 py-3'>
                        <img src={sample} className='w-20 rounded-full' alt="" />
                        <Text
                            text='Veggie Tomato Mix'
                            style='font-bold text-center'
                        />
                        <Text
                            text='IDR 24.000'
                            style='text-sm text-[#362115] text-center'
                        />
                        <ButtonYellow info='Add' />
                    </div>
                    <div className='bg-white flex flex-col gap-3 items-center shadow-md shadow-gray-400 rounded-md px-5 py-3'>
                        <img src={sample} className='w-20 rounded-full' alt="" />
                        <Text
                            text='Veggie Tomato Mix'
                            style='font-bold text-center'
                        />
                        <Text
                            text='IDR 24.000'
                            style='text-sm text-[#362115] text-center'
                        />
                        <ButtonYellow info='Add' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product