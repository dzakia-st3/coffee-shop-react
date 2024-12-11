import React, { useEffect, useState } from 'react'
import { Navbar, Footer } from '../Comp/mediumComp'
import { Text, ButtonYellow } from '../Comp/smallComp'
import image1 from '../image/hazelnut.png'
import image2 from '../image/chickenWings.png'
import card from '../image/card.png'
import transfer from '../image/bank.png'
import cod from '../image/delivery.png'
import { Bounce, toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const Cart = () => {
    let getDt = localStorage.getItem('b')
    let dtOrder = getDt ? JSON.parse(getDt) : null
    let [loadDt, setLoadDt] = useState(false)
    console.log('order', dtOrder.length)
    let navigate = useNavigate()
    let IDR = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0   // Tidak ada angka desimal
    });

    let subtotal = dtOrder.length == 0 ? 0 : dtOrder.reduce((acc: any, curr: any) => {
        acc += ((curr.sum) * (Number((curr.price).replace(/\./g, ''))))

        return acc
    }, 0)

    let removeClick = (idx: number) => {
        if (window.confirm('Delete item ?')) {
            let newDt = dtOrder.filter((key: any, idxItem: any) => idxItem != idx)
            localStorage.setItem('b', JSON.stringify(newDt))
            setLoadDt(true)
        }
    }

    useEffect(() => {
        setLoadDt(false)
    }, [loadDt])

    if (!dtOrder || dtOrder.length == 0) {
        toast.warn('Oops, Your Cart is empty.', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            pauseOnHover: false,
            closeOnClick: true,
            theme: 'dark',
            transition: Bounce,
        })

        navigate('/product')
    }

    return (
        <div>
            <Navbar />
            <div className="bg-[url('./image/cart.png')] bg-cover">
                <div className='bg-black bg-opacity-35 pt-20 md:pt-28 px-7 flex flex-col justify-center md:flex-row md:gap-14'>
                    <div className='md:pb-8'>
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
                                {dtOrder.length != 0 ? dtOrder.map((item: any, idx: any) => {
                                    return (
                                        <div className='flex items-center justify-between'>
                                            <div className='flex gap-3 items-center w-2/3'>
                                                <img src={require(`../image/${item.product_image}`)} className='w-1/3 rounded-md' alt="image1" />
                                                <div>
                                                    <Text
                                                        text={item.product_name}
                                                        style='text-xs'
                                                    />
                                                    <Text
                                                        text={`x ${item.sum}`}
                                                        style='text-xs'
                                                    />
                                                    <Text
                                                        text={item.size}
                                                        style='text-xs'
                                                    />
                                                    <Text
                                                        text='Edit'
                                                        style='pt-1 text-xs underline font-light cursor-pointer'
                                                    />
                                                </div>
                                            </div>
                                            <div className='text-right'>
                                                <Text
                                                    text={`${IDR.format((item.sum) * (Number((item.price).replace(/\./g, ''))))}`}
                                                    style='text-sm font-semibold'
                                                />
                                                <a className='pt-5 text-xs underline font-light cursor-pointer' onClick={() => removeClick(idx)}>Remove</a>
                                            </div>

                                        </div>
                                    )
                                }) : ''}
                            </div>
                            <hr className='w-full pb-2' />
                            <div className='flex w-full justify-between p-2'>
                                <Text
                                    text='SUBTOTAL'
                                    style='text-sm'
                                />
                                <Text
                                    text={`${dtOrder.length == 0 ? 0 : IDR.format(subtotal)}`}
                                    style='text-sm'
                                />
                            </div>
                            <div className='flex w-full justify-between p-2'>
                                <Text
                                    text='TAX & FEES'
                                    style='text-sm'
                                />
                                <Text
                                    text={IDR.format(10000)}
                                    style='text-sm'
                                />
                            </div>
                            <div className='flex w-full justify-between p-2'>
                                <Text
                                    text='SHIPPING'
                                    style='text-sm'
                                />
                                <Text
                                    text={IDR.format(10000)}
                                    style='text-sm'
                                />
                            </div>
                            <div className='flex w-full justify-between px-2 pt-7'>
                                <Text
                                    text='TOTAL'
                                    style='text-[#362115] font-bold text-xl'
                                />
                                <Text
                                    text={`IDR ${IDR.format(subtotal + 20000)}`}
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