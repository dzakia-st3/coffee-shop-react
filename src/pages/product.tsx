import React, { useEffect, useState } from 'react'
import { Navbar, Footer } from '../Comp/mediumComp'
import { InputText, Text, ButtonYellow } from '../Comp/smallComp'
import sample from '../image/veggie.png'
import { Bounce, toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import dataProduct from '../data/product.json'

const Product = () => {
    let navigate = useNavigate()
    let dtLocal = localStorage.getItem('a')
    let getDt = dtLocal ? JSON.parse(dtLocal) : null
    const [type, setType] = useState(0)
    const [data, setData] = useState(Array)
    const [isLoading, setIsLoading] = useState(false)
    const [keyWord, setKeyWord] = useState('')

    useEffect(() => {
        setIsLoading(true)
        if (type == 0) {
            setData(dataProduct.data)
        } else {
            const getProduct = dataProduct.data.filter((e) => e.category_id == type)
            setData(getProduct)
        }
        setIsLoading(false)
    }, [type])

    useEffect(() => {
        setIsLoading(true)
        const getProduct = dataProduct.data.filter(e => e.product_name.toLowerCase().includes(keyWord.toLowerCase()))
        setData(getProduct)
        setIsLoading(false)
    }, [keyWord])


    return (
        <>
            <Navbar />
            <div className='pt-20 md:pt-24 px-3 sm:px-5 md:px-7'>
                <div className='flex gap-3'>
                    <InputText
                        info='What do you wanna eat?'
                        style='w-full md:w-1/2'
                        onchange={(e: any) => setKeyWord(e.target.value)}
                    />
                    <select
                        aria-label='type'
                        className='md:w-1/2 select-type text-sm text-gray-500 rounded-md'
                        value={type}
                        onChange={(e) => setType(Number(e.target.value))}
                    >
                        <option value='0' className='text-sm'>All product</option>
                        <option value='1' >Coffee</option>
                        <option value='2' >Non-Coffee</option>
                        <option value='3' >Food</option>
                    </select>
                </div>
                <div className='py-5 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-5'>
                    {isLoading ? (
                        <button type="button" className="bg-[#6A4029]" disabled>
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            </svg>
                            Processing...
                        </button>
                    ) : data.map((item: any) => {
                        return (
                            <div className='bg-white flex flex-col gap-3 items-center shadow-md shadow-gray-400 rounded-md px-5 py-3'>
                                <img src={require(`../image/${item.product_image}`)} className='w-20 rounded-full' alt="" />
                                <Text
                                    text={`${item.product_name}`}
                                    style='font-bold text-center'
                                />
                                <Text
                                    text={`IDR ${item.price}`}
                                    style='text-sm text-[#362115] text-center'
                                />
                                <ButtonYellow
                                    info='Add'
                                    onclick={() => {
                                        if (!getDt || getDt.is_active != true) {
                                            toast.error('You need to log in first.', {
                                                position: "top-right",
                                                autoClose: 2000,
                                                hideProgressBar: false,
                                                pauseOnHover: false,
                                                closeOnClick: true,
                                                theme: 'dark',
                                                transition: Bounce
                                            })
                                        } else {
                                            navigate(`/order/${item.product_id}`)
                                        }
                                    }}
                                />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product