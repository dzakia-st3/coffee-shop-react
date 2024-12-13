import React from 'react'
import { Navbar, Footer } from '../Comp/mediumComp'
import { Text } from '../Comp/smallComp'
import sample from '../image/veggie.png'
import { Bounce, toast } from 'react-toastify'

const History = () => {
    let dtLocal = localStorage.getItem('c')
    let getDt = dtLocal ? JSON.parse(dtLocal) : null

    let reFormatDt = getDt && getDt.length != 0 ? getDt.reduce((acc: any, curr: any, i: number) => {
        let findDt = i > 0 && acc.find((e: any) => e.dateOrder == curr.dateOrder.slice(3))

        if (!findDt) {
            findDt = {
                dateOrder: curr.dateOrder.slice(3),
                item: curr.item
            }
            acc.push(findDt)
        } else {
            if (findDt.dateOrder == curr.dateOrder.slice(3)) {
                findDt.item = (findDt.item).concat(curr.item)
            }
        }

        return acc
    }, []) : null
    console.log(reFormatDt)

    if (!getDt) {
        toast.warn('Oops, There is no order history available.', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            pauseOnHover: false,
            closeOnClick: true,
            theme: 'dark',
            transition: Bounce,
        })
    }

    return (
        <>
            <Navbar />
            <div className="bg-[url('./image/cart.png')] bg-cover">
                <div className='bg-black bg-opacity-35 pt-20 px-7 md:pt-24 flex flex-col justify-center'>
                    <Text
                        text="Let's see what you have bought!"
                        style='text-white font-bold tracking-wide text-2xl pb-4 md:pb-7 text-center'
                    />
                    {getDt && getDt.length != 0 ? reFormatDt?.map((item1: any) => {
                        return (
                            <>
                                <div className='bg-white md:w-1/12 sm:w-1/6 w-1/3 p-2 mb-3 rounded-md text-[#362115] font-bold tracking-wide'>{item1.dateOrder}</div>
                                <div className='grid gap-5 pb-7 sm:grid-cols-2 md:grid-cols-4'>
                                    {item1.item?.map((item2: any) => {
                                        return (
                                            <div className='bg-white flex gap-3 items-center rounded-md px-5 py-3'>
                                                <img src={require(`../image/${item2.product_image}`)} className='w-20 rounded-full' alt="" />
                                                <div className='flex flex-col gap-1'>
                                                    <Text
                                                        text={item2.product_name}
                                                        style='font-bold'
                                                    />
                                                    <Text
                                                        text={`IDR ${item2.price}`}
                                                        style='text-sm text-[#362115]'
                                                    />
                                                    <Text
                                                        text='Delivered'
                                                        style='text-sm text-[#362115]'
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                        )
                    }) : ''}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default History
