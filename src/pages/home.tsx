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
import pinky from '../image/pinkyPromise.png'
import chicken from '../image/chickenWings.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'


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
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <div className='flex flex-col items-center'>
                            <img src={hazelnut} className='absolute rounded rounded-full z-10' alt="" />
                            <div className='relative top-14 h-full flex flex-col items-center border border-2 border-[#DDDDDD] hover:border-[#6A4029] rounded-md px-6 py-10 justify-center'>
                                <div className='pt-14 pb-10 flex flex-col gap-2'>
                                    <Text
                                        text="Hazelnut Latte"
                                        style='font-bold text-xl pb-2 tracking-wider text-center'
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
                                <Text
                                    text='IDR 25.000'
                                    style='pb-5  font-bold text-xl text-black'
                                />
                                <ButtonBrownBorder info='Select' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className='flex flex-col items-center'>
                        <img src={pinky} className='absolute rounded rounded-full z-10' alt="" />
                        <div className='relative top-14 h-full flex flex-col items-center border border-2 border-[#DDDDDD] hover:border-[#6A4029] rounded-md p-6  justify-center'>
                            <div className='pt-16 pb-10 flex flex-col gap-2'>
                                <Text
                                    text="Pinky Promise"
                                    style='font-bold text-xl pb-2 tracking-wider text-center'
                                />
                                <div className='flex items-center'>
                                    <img src={check2} alt="check" />
                                    <Text
                                        text='1 Shot of Coffee'
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
                                        text='Chocolate Biscuits'
                                        style='pl-3 text-slate-900'
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <img src={check2} alt="check" />
                                    <Text
                                        text='Strawberry Syrup'
                                        style='pl-3 text-slate-900'
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <img src={check2} alt="check" />
                                    <Text
                                        text='Sliced Strawberry on Top'
                                        style='pl-3 text-slate-900'
                                    />
                                </div>
                            </div>
                            <Text
                                text='IDR 30.000'
                                style='pb-5  font-bold text-xl text-black'
                            />
                            <ButtonBrownBorder info='Select' />
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='flex flex-col items-center'>
                        <img src={chicken} className='absolute rounded rounded-full z-10' alt="" />
                        <div className='relative top-14 h-full flex flex-col items-center border border-2 border-[#DDDDDD] hover:border-[#6A4029] rounded-md p-6 justify-center'>
                            <div className='pt-16 pb-7 flex flex-col gap-1'>
                                <Text
                                    text="Chicken Wings"
                                    style='font-bold text-xl pb-2 tracking-wider text-center'
                                />
                                <div className='flex items-center'>
                                    <img src={check2} alt="check" />
                                    <Text
                                        text='Wings'
                                        style='pl-3 text-slate-900'
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <img src={check2} alt="check" />
                                    <Text
                                        text='Drum Sticks'
                                        style='pl-3 text-slate-900'
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <img src={check2} alt="check" />
                                    <Text
                                        text='Mayonaise and Lemon'
                                        style='pl-3 text-slate-900'
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <img src={check2} alt="check" />
                                    <Text
                                        text='Hot Fried'
                                        style='pl-3 text-slate-900'
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <img src={check2} alt="check" />
                                    <Text
                                        text='Secret Recipe'
                                        style='pl-3 text-slate-900'
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <img src={check2} alt="check" />
                                    <Text
                                        text='Buy 1 Get 1 only for Dine In'
                                        style='pl-3 text-slate-900'
                                    />
                                </div>
                            </div>
                            <Text
                                text='IDR 40.000'
                                style='pb-5  font-bold text-xl text-black'
                            />
                            <ButtonBrownBorder info='Select' />
                        </div>
                    </div></SwiperSlide>
                </Swiper>
                <div className='h-40'></div>
            </div>
        </>
    )
}

export default Home