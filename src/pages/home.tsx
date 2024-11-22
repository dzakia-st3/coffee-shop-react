import React from 'react'
import { NavbarAuth } from '../Comp/mediumComp'
import { ButtonYellow, Text, ButtonBrownBorder } from '../Comp/smallComp'
import staff from '../image/user.png'
import store from '../image/location.png'
import like from '../image/like.png'
import check from '../image/ceklis.png'
import check2 from '../image/ceklis2.png'
import banner2 from '../image/coverHero2.png'
import hazelnut from '../image/hazelnut.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/bundle'


const Home = () => {
    const slides = Array.from({ length: 1000 }).map(
        (el, index) => `Slide ${index + 1}`
    )

    return (
        <>
            <div>
                {/* <img src={banner} className='absolute h-1/3 w-full' alt="banner" /> */}
                <div className="first-letter:relative bg-[url('./image/coverHero1.png')] flex flex-col p-16 gap-5 bg-black opacity-80">
                    <Text
                        text='Start Your Day with Coffee and Good Meals'
                        style='text-white text-sm font-bold tracking-wide'
                    />
                    <Text
                        text='We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for bigger smile!'
                        style='text-white text-sm'
                    />
                    <ButtonYellow info='Get Started' />
                </div>
                <div className='flex justify-between items-center px-3 py-6 mb-10 shadow-md z-10 relative'>
                    <div className='flex items-center'>
                        <img src={staff} className='h-12' alt="staff" />
                        <div className='pl-3'>
                            <Text
                                text='90+'
                                style='font-bold tracking-wider'
                            />
                            <Text
                                text='Staff'
                                style='text-slate-500'
                            />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={store} className='h-12' alt="store" />
                        <div className='pl-3'>
                            <Text
                                text='30+'
                                style='font-bold tracking-wider'
                            />
                            <Text
                                text='Stores'
                                style='text-slate-500'
                            />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={like} className='h-12' alt="customers" />
                        <div className='pl-3'>
                            <Text
                                text='800+'
                                style='font-bold tracking-wider'
                            />
                            <Text
                                text='Customers'
                                style='text-slate-500'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mb-10'>
                    <img src={banner2} className='absolute' alt="" />
                    <div className='relative flex flex-col gap-5 p-7 bg-white opacity-80'>
                        <Text
                            text='We Provide Good Coffee and Healthy Meals'
                            style='font-bold tracking-wider text-md'
                        />
                        <Text
                            text='You can explore the menu that we provide with fun and have their own taste and make your day better'
                            style='text-slate-900'
                        />
                        <div className='flex items-center'>
                            <img src={check} alt="check" />
                            <Text
                                text='High quality beans'
                                style='pl-3 text-slate-900'
                            />
                        </div>
                        <div className='flex items-center'>
                            <img src={check} alt="check" />
                            <Text
                                text='Healthy meals you can request the ingredients'
                                style='pl-3 text-slate-900'
                            />
                        </div>
                        <div className='flex items-center'>
                            <img src={check} alt="check" />
                            <Text
                                text='Chat with our staff to get better experience for ordering'
                                style='pl-3 text-slate-900'
                            />
                        </div>
                        <div className='flex items-center'>
                            <img src={check} alt="check" />
                            <Text
                                text='Free member card with a minimum purchase of IDR 200.000'
                                style='pl-3 text-slate-900'
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Text
                        text="Here is People's Favorite"
                        style='font-bold tracking-wider text-md'
                    />
                    <Text
                        text="Let's choose and have a bit taste of people's favorite. It might be yours too!"
                        style='text-slate-900'
                    />

                    <div className='flex flex-col items-center'>
                        <img src={hazelnut} className='absolute rounded rounded-full z-10' alt="" />
                        <div className='relative bg-slate-400 h-80 top-14'>
                            <Text
                                text="Hazelnut Latte"
                                style='font-bold tracking-wider text-center'
                            />
                            <div className='flex items-center'>
                                <img src={check2} alt="check" />
                                <Text
                                    text='Hazelnut Syrup'
                                    style='pl-3 text-slate-900'
                                />
                            </div>
                            <div className='flex items-center'>
                                <img src={check2} alt="check" />
                                <Text
                                    text='Vanilla Whipped Cream'
                                    style='pl-3 text-slate-900'
                                />
                            </div>
                            <div className='flex items-center'>
                                <img src={check2} alt="check" />
                                <Text
                                    text='Ice / Hot'
                                    style='pl-3 text-slate-900'
                                />
                            </div>
                            <div className='flex items-center'>
                                <img src={check2} alt="check" />
                                <Text
                                    text='Sliced Banana on Top'
                                    style='pl-3 text-slate-900'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper: any) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Home