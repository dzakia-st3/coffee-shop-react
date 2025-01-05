import React from 'react'
import { Navbar, Footer } from '../Comp/mediumComp'
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
import maps from '../image/Huge Global.png'
import netflix from '../image/netflix.png'
import reddit from '../image/reddit.png'
import amazon from '../image/amazon.png'
import discord from '../image/discord.png'
import spotify from '../image/spotify.png'
import star from '../image/star.png'
import profile1 from '../image/profil1.png'
import profile2 from '../image/profil2.png'
import profile3 from '../image/profil3.png'
import sponsor from '../image/Sponsored.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { useNavigate } from 'react-router'


const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <Navbar />
            <div className='pt-14'>
                {/* Section 1 */}
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="bg-[url('./image/coverHero1.png')] bg-cover md:h-96">
                    <div className='w-full h-full p-8 md:bg-transparent md:w-1/2 bg-black bg-opacity-60 md:place-content-center section-1-1'>
                        <Text
                            text='Start Your Day with Coffee and Good Meals'
                            style='text-white text-xl font-bold tracking-wide pb-5'
                        />
                        <Text
                            text='We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for bigger smile!'
                            style='text-white text-base pb-5'
                        />
                        <ButtonYellow info='Get Started' onclick={() => navigate('/product')} />
                    </div>
                </div>
                {/* Section 2 */}
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className='flex justify-between items-center px-3 py-6 mb-10 shadow-md z-10 md:w-5/6 md:mx-auto md:-top-14 md:relative md:bg-white md:px-16 md:rounded-md md:mb-0'>
                    <div className='flex items-center'>
                        <img src={staff} className='h-12' alt="staff" />
                        <div className='pl-2'>
                            <Text
                                text='90+'
                                style='font-bold tracking-wider text-base'
                            />
                            <Text
                                text='Staff'
                                style='text-slate-500 text-sm'
                            />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={store} className='h-12' alt="store" />
                        <div className='pl-2'>
                            <Text
                                text='30+'
                                style='font-bold tracking-wider text-base'
                            />
                            <Text
                                text='Stores'
                                style='text-slate-500 text-sm'
                            />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={like} className='h-12' alt="customers" />
                        <div className='pl-2'>
                            <Text
                                text='800+'
                                style='font-bold tracking-wider text-base'
                            />
                            <Text
                                text='Customers'
                                style='text-slate-500 text-sm'
                            />
                        </div>
                    </div>
                </div>
                {/* Section 3 */}
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="flex items-center justify-center shadow-md bg-cover bg-[url('./image/coverHero2.png')] md:bg-[length:0px] md:-top-14 md:relative md:px-16 md:gap-6 section-3">
                    <img src={banner2} className='hidden md:flex' alt="" />
                    <div className="flex flex-col gap-5 px-7 pb-8 bg-white bg-opacity-80 md:pb-0">
                        <Text
                            text='We Provide Good Coffee and Healthy Meals'
                            style='font-bold tracking-wider text-xl'
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
                {/* Section 4 */}
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className='shadow-md py-7 section-4'>
                    <div className='px-5 flex flex-col gap-3 pb-10 md:pb-12'>
                        <Text
                            text="Here is People's Favorite"
                            style='font-bold tracking-wider text-xl text-center'
                        />
                        <Text
                            text="Let's choose and have a bit taste of people's favorite. It might be yours too!"
                            style='text-slate-900 text-center'
                        />
                    </div>
                    <div className='hidden md:flex md:justify-center md:gap-16 md:pb-20'>
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
                                <ButtonBrownBorder info='Select' onclick={() => navigate('/order/11')} />
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
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
                                <ButtonBrownBorder info='Select' onclick={() => navigate('/order/13')} />
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
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
                                <ButtonBrownBorder info='Select' onclick={() => navigate('/order/21')} />
                            </div>
                        </div>
                    </div>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className='menuSwiper'
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
                                    <ButtonBrownBorder info='Select' onclick={() => navigate('/order/11')} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
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
                                    <ButtonBrownBorder info='Select' onclick={() => navigate('/order/13')} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
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
                                    <ButtonBrownBorder info='Select' onclick={() => navigate('/order/21')} />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* Section 5 */}
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className='px-5 flex flex-col gap-3 py-8 shadow-md section-5'>
                    <Text
                        text='Visit Our Store in the'
                        style='font-bold tracking-wider text-xl text-center'
                    />
                    <Text
                        text='Spot on the Map Below'
                        style='font-bold tracking-wider text-xl text-center'
                    />
                    <Text
                        text="See our store in every city on the spot and spen your good day there. See you soon!"
                        style='text-slate-900 text-center'
                    />
                    <img src={maps} className='pt-10' alt="maps" />
                </div>
                {/* Section 6 */}
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className='py-8 md:pb-0 px-2 shadow-md section-6'>
                    <Text
                        text='Our Partner'
                        style='font-bold tracking-wider text-xl text-center'
                    />
                    <img src={sponsor} className='hidden md:flex md:justify-self-center' alt="sponsor" />
                    <div className='md:hidden flex flex-col items-center justify-center gap-5 pt-5'>
                        <div className='flex items-center justify-around gap-2 sm:gap-32'>
                            <img src={netflix} className='w-1/3 sm:w-1/2' alt="netflix" />
                            <img src={reddit} className='w-1/3 sm:w-1/2' alt="reddit" />
                        </div>
                        <div className='flex items-center justify-around gap-1 sm:gap-28'>
                            <img src={amazon} className='w-1/3 sm:w-1/2' alt="amazon" />
                            <img src={discord} className='w-1/3 sm:w-1/2' alt="discord" />
                        </div>
                        <img src={spotify} className='w-1/3 sm:w-1/4' alt="spotify" />
                    </div>
                </div>
                {/* Section 7 */}
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className='px-5 py-8 flex flex-col shadow-md md:px-10 section-7'>
                    <Text
                        text='Loved by Thousand of'
                        style='font-bold tracking-wider text-xl text-center'
                    />
                    <Text
                        text='Happy Customer'
                        style='font-bold tracking-wider text-xl text-center pt-3 pb-5'
                    />
                    <Text
                        text="These are the stories of our customers who have visited us with great pleasure"
                        style='text-slate-900 text-center pb-7'
                    />
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 1,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className='testimonialSwiper'
                    >
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col border border-2 border-[#DDDDDD] hover:border-[#6A4029] rounded-md p-6 gap-5'>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img src={profile1} alt="profile1" />
                                            <div className='pl-3 flex flex-col gap-1'>
                                                <Text
                                                    text="Viezh Robert"
                                                    style='font-semibold text-base'
                                                />
                                                <Text
                                                    text='Warsaw Poland'
                                                    style='text-sm text-slate-900'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Text
                                                text='4.5'
                                                style='pr-3 font-semibold text-base text-slate-900'
                                            />
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                    <Text
                                        text='"Wow.. I am very happy to spend my whole day here. The Wi-Fi is good, the coffee and the meals tho. I like it here! Very recommended!"'
                                        style='text-base text-slate-900'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <div className='w-fit flex flex-col border border-2 border-[#DDDDDD] hover:border-[#6A4029] rounded-md p-6 gap-5'>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img src={profile2} alt="profile1" />
                                            <div className='pl-3 flex flex-col gap-1'>
                                                <Text
                                                    text="Yessica Christy"
                                                    style='font-semibold text-base'
                                                />
                                                <Text
                                                    text='Shanci, China'
                                                    style='text-sm text-slate-900'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Text
                                                text='4.5'
                                                style='pr-3 font-semibold text-base text-slate-900'
                                            />
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                    <Text
                                        text='"I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte"'
                                        style='text-base text-slate-900'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col border border-2 border-[#DDDDDD] hover:border-[#6A4029] rounded-md p-6 gap-5'>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img src={profile3} alt="profile1" />
                                            <div className='pl-3 flex flex-col gap-1'>
                                                <Text
                                                    text="Kim Young Jou"
                                                    style='font-semibold text-base'
                                                />
                                                <Text
                                                    text='Seoul, South Korea'
                                                    style='text-sm text-slate-900'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Text
                                                text='4.5'
                                                style='pr-3 font-semibold text-base text-slate-900'
                                            />
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                    <Text
                                        text='"This is very unusual for my taste, I have not like coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!"'
                                        style='text-base text-slate-900'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        grabCursor={true}
                        slidesPerView={2}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className='testimonialSwiperVer2'
                    >
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col border border-2 border-[#DDDDDD] hover:border-[#6A4029] rounded-md p-6 gap-5'>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img src={profile1} alt="profile1" />
                                            <div className='pl-3 flex flex-col gap-1'>
                                                <Text
                                                    text="Viezh Robert"
                                                    style='font-semibold text-base'
                                                />
                                                <Text
                                                    text='Warsaw Poland'
                                                    style='text-sm text-slate-900'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Text
                                                text='4.5'
                                                style='pr-3 font-semibold text-base text-slate-900'
                                            />
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                    <Text
                                        text='"Wow.. I am very happy to spend my whole day here. The Wi-Fi is good, the coffee and the meals tho. I like it here! Very recommended!"'
                                        style='text-base text-slate-900'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <div className='w-fit flex flex-col border border-2 border-[#DDDDDD] hover:border-[#6A4029] rounded-md p-6 gap-5'>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img src={profile2} alt="profile1" />
                                            <div className='pl-3 flex flex-col gap-1'>
                                                <Text
                                                    text="Yessica Christy"
                                                    style='font-semibold text-base'
                                                />
                                                <Text
                                                    text='Shanci, China'
                                                    style='text-sm text-slate-900'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Text
                                                text='4.5'
                                                style='pr-3 font-semibold text-base text-slate-900'
                                            />
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                    <Text
                                        text='"I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte"'
                                        style='text-base text-slate-900'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-col border border-2 border-[#DDDDDD] hover:border-[#6A4029] rounded-md p-6 gap-5'>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img src={profile3} alt="profile1" />
                                            <div className='pl-3 flex flex-col gap-1'>
                                                <Text
                                                    text="Kim Young Jou"
                                                    style='font-semibold text-base'
                                                />
                                                <Text
                                                    text='Seoul, South Korea'
                                                    style='text-sm text-slate-900'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Text
                                                text='4.5'
                                                style='pr-3 font-semibold text-base text-slate-900'
                                            />
                                            <img src={star} alt="star" />
                                        </div>
                                    </div>
                                    <Text
                                        text='"This is very unusual for my taste, I have not like coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!"'
                                        style='text-base text-slate-900'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* Section 8 */}
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className='p-8 flex flex-col items-center gap-5 md:flex-row md:justify-evenly md:px-20 section-8'>
                    <div className='flex flex-col items-center md:items-start gap-5'>
                        <Text
                            text='Check our promo today!'
                            style='font-bold tracking-wider text-xl'
                        />
                        <Text
                            text="Let's see the deals and pick yours!"
                            style='text-slate-900 text-sm'
                        />
                    </div>
                    <ButtonYellow info='See Promo' />
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Home