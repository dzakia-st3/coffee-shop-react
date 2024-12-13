import React, { useEffect, useState } from 'react'
import { Navbar, Footer } from '../Comp/mediumComp'
import { Text, ButtonYellow } from '../Comp/smallComp'
import card from '../image/card.png'
import transfer from '../image/bank.png'
import cod from '../image/delivery.png'
import { Bounce, toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const Cart = () => {
    let getDt = localStorage.getItem('b')
    let dtOrder = getDt ? JSON.parse(getDt) : null

    let getDtLocal = localStorage.getItem('c')
    let getFinalOrder = getDtLocal ? JSON.parse(getDtLocal) : null

    let [loadDt, setLoadDt] = useState(false)
    let [count, setCount] = useState(0)
    let [idxItem, setIdx] = useState(-1)
    let [editMode, setEditMode] = useState(false)
    let navigate = useNavigate()

    let date = (new Date()).toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    // let date = (new Date()).toISOString().split('T')[0]

    let [addressPay, setaddressPay] = useState<{ address: string; phone: string; payment: string; name: string, dateOrder: string }>({
        address: getFinalOrder ? getFinalOrder[0]?.recipientDt.address : '',
        phone: getFinalOrder ? getFinalOrder[0]?.recipientDt.phone : '',
        payment: '',
        name: getFinalOrder ? getFinalOrder[0]?.recipientDt.name : '',
        dateOrder: date
    })
    let IDR = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    });

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

    let subtotal = dtOrder?.length == 0 ? 0 : dtOrder?.reduce((acc: any, curr: any) => {
        acc += ((curr.sum) * (Number((curr.price).replace(/\./g, ''))))

        return acc
    }, 0)

    let editCount = (idx: number, value: number) => {
        setCount(value)
        setEditMode(true)
        setIdx(idx)
    }

    let okClick = (idxItem: number) => {
        setEditMode(false)

        if (count == 0) {
            if (window.confirm('Delete item ?')) {
                let newDt = dtOrder.filter((key: any, idx: any) => idxItem != idx)
                localStorage.setItem('b', JSON.stringify(newDt))
                setLoadDt(true)
            }
        } else {
            let newData = dtOrder?.reduce((acc: any, curr: any, idx: any) => {
                if (idx == idxItem) {
                    curr.sum = count
                }
                acc.push(curr)

                return acc
            }, [])
            localStorage.setItem('b', JSON.stringify(newData))
        }

        setLoadDt(true)
    }

    let removeClick = (idx: number) => {
        if (window.confirm('Delete item ?')) {
            let newDt = dtOrder?.filter((key: any, idxItem: any) => idxItem != idx)
            localStorage.setItem('b', JSON.stringify(newDt))
            setLoadDt(true)
        }
    }

    const confirmpaybtn = () => {
        if (editMode == false && dtOrder && dtOrder?.length != 0 && addressPay.address != '' && addressPay.phone != '' && addressPay.payment != '' && addressPay.name != '') {
            let finalOrder = {
                recipientDt: {
                    address: addressPay.address,
                    phone: addressPay.phone,
                    payment: addressPay.payment,
                    name: addressPay.name,
                },
                dateOrder: addressPay.dateOrder,
                item: dtOrder
            }

            let mergeData = getFinalOrder && getFinalOrder.length != 0 ? getFinalOrder.map((item: any) => item) : []
            mergeData.push(finalOrder)

            localStorage.setItem('c', JSON.stringify(getFinalOrder && getFinalOrder?.length != 0 ? mergeData : [finalOrder]))

            toast("☕ Order successful!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                theme: 'dark',
                transition: Bounce
            });

            localStorage.removeItem('b')
            navigate('/history')
        } else {
            toast.error('There is still missing information, please review it again.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                theme: 'dark',
                transition: Bounce,
            })
        }
    }

    useEffect(() => {
        setLoadDt(false)
    }, [loadDt])

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
                                {dtOrder?.length != 0 ? dtOrder?.map((item: any, idx: any) => {
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
                                                    <div>
                                                        {editMode && idx == idxItem ? (
                                                            <div className="pt-1 text-md font-['rubik'] flex items-center">
                                                                <button className='font-bold text-xs p-1 bg-transparent border-0 border-b-2 border-gray-500 hover:bg-gray-400 rounded-t-md' onClick={() => count == 0 ? setCount(0) : setCount(count - 1)}>-</button>
                                                                <input
                                                                    aria-label='count'
                                                                    className='w-1/5 p-1 text-xs bg-transparent border-0 border-b-2 border-gray-500 text-center placeholder:text-black'
                                                                    placeholder='0'
                                                                    value={count}
                                                                    onChange={(e: any) => setCount(e.target.value)}
                                                                    type="text"
                                                                />
                                                                <button className='font-bold text-xs p-1 bg-transparent border-0 border-b-2 border-gray-500 hover:bg-gray-400 rounded-t-md' onClick={() => setCount(count + 1)}>+</button>
                                                                <button className='font-bold text-xs p-1 ml-3 bg-gray-500 border-0 border-b-2 border-gray-500 hover:bg-gray-400 rounded-t-md' onClick={() => okClick(idx)}>Ok</button>
                                                            </div>
                                                        ) : ''}
                                                        {!editMode ? (
                                                            <a className='pt-5 text-xs underline font-light cursor-pointer' onClick={() => editCount(idx, item.sum)}>Edit</a>
                                                        ) : ''}
                                                    </div>
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
                                    text={`${dtOrder?.length == 0 ? 0 : IDR.format(subtotal)}`}
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
                                <div className='flex gap-3 place-items-end pb-2'>
                                    <Text
                                        text='Delivery to:'
                                        style='font-bold text-base'
                                    />
                                    <input aria-label='name' value={addressPay.name} onChange={(e) => setaddressPay((prevDt: any) => ({
                                        ...prevDt,
                                        name: e.target.value
                                    }))} placeholder='Recipient' className='border-y-0 placeholder:italic placeholder:text-xs border-x-0 border-b-2 border-gray-500 focus:ring-0 p-0' type="text" />
                                </div>
                                <textarea aria-label='address' value={addressPay.address} onChange={(e) => setaddressPay((prevDt: any) => ({
                                    ...prevDt,
                                    address: e.target.value
                                }))} className='border border-gray-500 rounded-md h-32 w-full'></textarea>
                                <div className='flex gap-3 place-items-end py-2'>
                                    <Text
                                        text='Phone number:'
                                        style='font-bold text-sm sm:text-base'
                                    />
                                    <input aria-label='phonenum' value={addressPay.phone} onChange={(e) => setaddressPay((prevDt: any) => ({
                                        ...prevDt,
                                        phone: e.target.value
                                    }))} className='border-y-0 border-x-0 border-b-2 border-gray-500 focus:ring-0 p-0' type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <Text
                                text='Payment method'
                                style='text-white font-bold text-xl tracking-wide pb-3'
                            />
                            <div className='bg-white p-3 rounded-md'>
                                <div className="flex gap-3 mb-4 items-center cursor-pointer">
                                    <input aria-label='card' onFocus={() => setaddressPay((prevDt: any) => ({
                                        ...prevDt,
                                        payment: 'card'
                                    }))} type="radio" value="card" name="default-radio" className="w-4 h-4 text-[#362115] bg-white border-[#362115] focus:ring-offset-white focus:ring-2" />
                                    <img src={card} alt="card" />
                                    <label className="text-sm font-medium">Card</label>
                                </div>
                                <div className="flex gap-3 mb-4 items-center cursor-pointer">
                                    <input aria-label='transfer' onFocus={() => setaddressPay((prevDt: any) => ({
                                        ...prevDt,
                                        payment: 'transfer'
                                    }))} type="radio" value="transfer" name="default-radio" className="w-4 h-4 text-[#362115] bg-white border-[#362115] focus:ring-offset-white focus:ring-2" />
                                    <img src={transfer} alt="transfer" />
                                    <label className="text-sm font-['rubik']">Bank Account</label>
                                </div>
                                <div className="flex gap-3 items-center cursor-pointer">
                                    <input aria-label='cod' onFocus={() => setaddressPay((prevDt: any) => ({
                                        ...prevDt,
                                        payment: 'cod'
                                    }))} type="radio" value="cod" name="default-radio" className="w-4 h-4 text-[#362115] bg-white border-[#362115] focus:ring-offset-white focus:ring-2" />
                                    <img src={cod} alt="cod" />
                                    <label className="text-sm font-['rubik']">Cash on Delivery</label>
                                </div>
                            </div>
                        </div>
                        <ButtonYellow info='Confirm and Pay' onclick={confirmpaybtn} style='w-full my-8' />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Cart