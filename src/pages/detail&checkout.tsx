import React, { useState } from 'react'
import { Navbar, Footer } from '../Comp/mediumComp'
import { Text, ButtonBrown, ButtonYellow } from '../Comp/smallComp'
import sample from '../image/hazelnutlatte.png'
import { getValue } from '@testing-library/user-event/dist/utils'

const DetailAndCheckout = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Navbar />
            <div className='pt-20 sm:pt-24 px-7 sm:justify-center sm:flex sm:items-start sm:gap-7 sm:pb-3'>
                <div className='sm:w-1/2 md:w-1/4'>
                    <img src={sample} className='w-full rounded-md shadow-md shadow-gray-600' alt="" />
                </div>
                <div className='sm:w-1/2 md:w-1/4'>
                    <Text
                        text='COLD BREW'
                        style='font-extrabold text-4xl pt-4 sm:pt-0 pb-2'
                    />
                    <Text
                        text='IDR 30.000'
                        style='font-semibold text-2xl pb-4'
                    />
                    <Text
                        text='Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours'
                        style='font-medium text-md pb-2'
                    />
                    <select aria-label="label for the select" id="underline_select" className="block font-['rubik'] py-3 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option className='text-md' selected>Select size</option>
                        <option className='text-md' value="Regular">Regular</option>
                        <option className='text-md' value="Large">Large</option>
                        <option className='text-md' value="Extra Large">Extra Large</option>
                    </select>
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
                        <ButtonYellow info='Add to Cart' style='w-full py-2' />
                    </div>
                    <ButtonBrown info='Checkout' style='w-full py-2' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailAndCheckout