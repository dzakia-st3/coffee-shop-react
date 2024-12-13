import React, { useEffect, useState } from 'react'
import { Navbar, Footer } from '../Comp/mediumComp'
import { Text, ButtonBrown, ButtonYellow } from '../Comp/smallComp'
import { useNavigate, useParams } from 'react-router'
import dataProduct from '../data/product.json'
import { Bounce, toast } from 'react-toastify'

const DetailAndCheckout = () => {
    const [count, setCount] = useState(0)
    const { id } = useParams()
    const dtItem = dataProduct.data.filter((e) => e.product_id == Number(id))
    const [dataSize, setDataSize] = useState('0')
    const [loadData, setLoadData] = useState(false)
    let getDtOrder = localStorage.getItem('b')
    let parseDt = getDtOrder ? JSON.parse(getDtOrder) : null
    let navigate = useNavigate()

    useEffect(() => {
        setLoadData(false)
    }, [loadData])

    const addCartBtn = () => {
        if (dtItem[0].category_id == 3) {
            setDataSize('Regular')
        }

        if (dtItem[0].category_id != 3 && dataSize == '0') {
            toast.error('Please select the size of your drink.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                theme: 'dark',
                transition: Bounce,
            })
        } else if (count == 0) {
            toast.error('Cannot add zero quantity to the cart.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                theme: 'dark',
                transition: Bounce,
            })
        } else if (count != 0) {
            let data = parseDt && parseDt.length != 0 ? parseDt.reduce((acc: any, curr: any, i: number) => {
                let item = i > 0 && acc.find((e: any) => e.product_id == curr.product_id && e.size == curr.size)

                if (!item) {
                    item = {
                        category_id: curr.category_id,
                        price: curr.price,
                        product_details: curr.product_details,
                        product_id: curr.product_id,
                        product_image: curr.product_image,
                        product_name: curr.product_name,
                        size: curr.size,
                        sum: curr.product_id == Number(id) && curr.size == dataSize ? (curr.sum + count) : curr.sum
                    }
                    acc.push(item)
                }

                if (acc.length == parseDt.length) {
                    let findNewItem = parseDt.find((e: any) => e.product_id == Number(id) && e.size == dataSize)

                    if (!findNewItem) {
                        acc.push({
                            ...dtItem[0],
                            size: dtItem[0].category_id == 3 ? 'Regular' : dataSize,
                            sum: count
                        })
                    }

                    let findIdItem = acc.find((e: any) => e.product_id == Number(id))

                    if (!findIdItem) {
                        acc.push({
                            ...dtItem[0],
                            size: dtItem[0].category_id == 3 ? 'Regular' : dataSize,
                            sum: count
                        })
                    }
                }

                return acc
            }, []) : [{
                ...dtItem[0],
                size: dtItem[0].category_id == 3 ? 'Regular' : dataSize,
                sum: count
            }]

            localStorage.setItem('b', JSON.stringify(data))
            setLoadData(true)
        }


    }

    const checkoutBtn = () => {
        if (!getDtOrder || parseDt.length == 0) {
            toast.warn("Can't checkout. Cart is empty.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                theme: 'dark',
                transition: Bounce,
            })
        } else {
            navigate('/cart')
        }
    }

    return (
        <div>
            <Navbar />
            <div className='pt-20 sm:pt-24 px-7 sm:justify-center sm:flex sm:items-start sm:gap-7 sm:pb-3'>
                <div className='sm:w-1/2 md:w-1/4'>
                    <img src={require(`../image/${dtItem[0].product_image}`)} className='w-full rounded-md shadow-md shadow-gray-600' alt="" />
                </div>
                <div className='sm:w-1/2 md:w-1/4'>
                    <Text
                        text={`${dtItem[0].product_name}`}
                        style='font-extrabold text-4xl pt-4 sm:pt-0 pb-2'
                    />
                    <Text
                        text={`IDR ${dtItem[0].price}`}
                        style='font-semibold text-2xl pb-4'
                    />
                    <Text
                        text={`${dtItem[0].product_details}`}
                        style='font-medium text-md pb-2'
                    />
                    {dtItem[0].category_id != 3 ? (
                        <select
                            aria-label="label for the select" id="underline_select" className="block font-['rubik'] py-3 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            value={dataSize}
                            onChange={(e) => setDataSize(e.target.value)}
                        >
                            <option className='text-md' value='0'>Select size</option>
                            <option className='text-md' value="Regular">Regular</option>
                            <option className='text-md' value="Large">Large</option>
                            <option className='text-md' value="Extra Large">Extra Large</option>
                        </select>
                    ) : ''}
                    <div className='flex items-center'>
                        <div className="py-3 text-md font-['rubik']">
                            <button className='font-bold text-xl p-3 bg-transparent border-0 border-b-2 border-gray-500 hover:bg-gray-400 rounded-t-md' onClick={() => count == 0 ? setCount(0) : setCount(count - 1)}>-</button>
                            <input
                                aria-label='count'
                                className='w-1/3 p-3 bg-transparent border-0 border-b-2 border-gray-500 text-center placeholder:text-black'
                                placeholder='0'
                                value={count}
                                onInput={(e: any) => setCount(Number(e.target.value))}
                                type="text"
                            />
                            <button className='font-bold text-xl p-3 bg-transparent border-0 border-b-2 border-gray-500 hover:bg-gray-400 rounded-t-md' onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        <ButtonYellow info='Add to Cart' style='w-full py-2' onclick={addCartBtn} />
                    </div>
                    <ButtonBrown info='Checkout' style='w-full py-2' onclick={checkoutBtn} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailAndCheckout


