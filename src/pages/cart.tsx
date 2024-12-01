import React from 'react'
import { Navbar, Footer } from '../Comp/mediumComp'
import { Text, ButtonYellow } from '../Comp/smallComp'
import image1 from '../image/hazelnut.png'
import image2 from '../image/chickenWings.png'
import card from '../image/card.png'
import transfer from '../image/bank.png'
import cod from '../image/delivery.png'

const Cart = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-[url('./image/cart.png')] bg-cover">
                <div className='bg-black bg-opacity-35 pt-20 md:pt-28 px-7 flex flex-col justify-center md:flex-row md:gap-14'>
                    <div>
                        <Text
                            text='Checkout Your Item Now!'
                            style='text-white font-bold tracking-wide text-2xl pb-4 md:pb-7'
                        />
                        <div className='bg-white w-full py-5 rounded-md flex flex-col items-center justify-center px-3'>
                            <Text
                                text='Order Summary'
                                style='text-[#362115] font-bold tracking-wide text-xl pb-4'
                            />
                            <div className='py-5 flex flex-col gap-4 w-full'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-3 items-center w-2/3'>
                                        <img src={image1} className='w-1/3 rounded-md' alt="image1" />
                                        <div>
                                            <Text
                                                text='Hazelnut Latte'
                                                style='text-sm'
                                            />
                                            <Text
                                                text='x 1'
                                                style='text-sm'
                                            />
                                            <Text
                                                text='Reguler'
                                                style='text-sm'
                                            />
                                        </div>
                                    </div>
                                    <Text
                                        text='IDR 20.0000'
                                        style='text-sm font-semibold'
                                    />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-3 items-center w-2/3'>
                                        <img src={image2} className='w-1/3 rounded-md' alt="image1" />
                                        <div>
                                            <Text
                                                text='Chicken Wings'
                                                style='text-sm'
                                            />
                                            <Text
                                                text='x 2'
                                                style='text-sm'
                                            />
                                            <Text
                                                text='Reguler'
                                                style='text-sm'
                                            />
                                        </div>
                                    </div>
                                    <Text
                                        text='IDR 60.0000'
                                        style='text-sm font-semibold'
                                    />
                                </div>
                            </div>
                            <hr className='w-full pb-2' />
                            <div className='flex w-full justify-between p-2'>
                                <Text
                                    text='SUBTOTAL'
                                    style='text-sm'
                                />
                                <Text
                                    text='IDR 80.000'
                                    style='text-sm'
                                />
                            </div>
                            <div className='flex w-full justify-between p-2'>
                                <Text
                                    text='TAX & FEES'
                                    style='text-sm'
                                />
                                <Text
                                    text='IDR 10.000'
                                    style='text-sm'
                                />
                            </div>
                            <div className='flex w-full justify-between p-2'>
                                <Text
                                    text='SHIPPING'
                                    style='text-sm'
                                />
                                <Text
                                    text='IDR 10.000'
                                    style='text-sm'
                                />
                            </div>
                            <div className='flex w-full justify-between px-2 pt-7'>
                                <Text
                                    text='TOTAL'
                                    style='text-[#362115] font-bold text-xl'
                                />
                                <Text
                                    text='IDR 100.000'
                                    style='text-[#362115] font-bold text-xl'
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='pt-8 md:pt-14'>
                            <Text
                                text='Address Details'
                                style='text-white font-bold text-xl tracking-wide pb-3'
                            />
                            <div className='bg-white p-3 rounded-md'>
                                <Text
                                    text='Delivery to:'
                                    style='font-bold text-base pb-2'
                                />
                                <textarea aria-label='address' className='border border-gray-500 h-32 w-full'></textarea>
                                <div className='flex gap-3 place-items-end py-2'>
                                    <Text
                                        text='Phone number:'
                                        style='font-bold text-sm sm:text-base'
                                    />
                                    <input aria-label='phonenum' className='border-y-0 border-x-0 border-b-2 border-gray-500 focus:ring-0 p-0' type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <Text
                                text='Payment method'
                                style='text-white font-bold text-xl tracking-wide pb-3'
                            />
                            <div className='bg-white p-3 rounded-md'>
                                <div className="flex gap-3 mb-4 items-center">
                                    <input aria-label='transfer' type="radio" value="card" name="default-radio" className="w-4 h-4 text-[#362115] bg-white border-[#362115] focus:ring-offset-white dark:focus:ring-[#362115] dark:ring-offset-[#362115] focus:ring-2 dark:bg-white dark:border-[#362115]" />
                                    <img src={card} alt="card" />
                                    <label className="text-sm font-medium">Card</label>
                                </div>
                                <div className="flex gap-3 mb-4 items-center">
                                    <input aria-label='transfer' type="radio" value="transfer" name="default-radio" className="w-4 h-4 text-[#362115] bg-white border-[#362115] focus:ring-offset-white dark:focus:ring-[#362115] dark:ring-offset-[#362115] focus:ring-2 dark:bg-white dark:border-[#362115]" />
                                    <img src={transfer} alt="transfer" />
                                    <label className="text-sm font-['rubik']">Bank Account</label>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <input aria-label='transfer' type="radio" value="cod" name="default-radio" className="w-4 h-4 text-[#362115] bg-white border-[#362115] focus:ring-offset-white dark:focus:ring-[#362115] dark:ring-offset-[#362115] focus:ring-2 dark:bg-white dark:border-[#362115]" />
                                    <img src={cod} alt="cod" />
                                    <label className="text-sm font-['rubik']">Cash on Delivery</label>
                                </div>
                            </div>
                        </div>
                        <ButtonYellow info='Confirm and Pay' style='w-full my-8' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart