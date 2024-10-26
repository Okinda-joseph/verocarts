import React from 'react'
// Import swiper react components.
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles.
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


const sponsorList = [

    {
        imgUrl: "/src/assets/images/sponsor/01.png",
    },

    {
        imgUrl: "/src/assets/images/sponsor/02.png",
    },

    {
        imgUrl: "/src/assets/images/sponsor/03.png",
    },

    {
        imgUrl: "/src/assets/images/sponsor/04.png",
    },

    {
        imgUrl: "/src/assets/images/sponsor/05.png",
    },

    {
        imgUrl: "/src/assets/images/sponsor/06.png",
    },

];

const Sponsor = () => {

  return (

    <div className='sponsor-section section-bg'>
        <div className='container'>
            <div className='section-wrapper'>
                <div className='sponsor-slider'>
                    <swiper
                        slidesPerview={ 2 }
                        spaceBetween={20}
                        Autoplay={
                            {
                                delay: 2000,
                                disableOnInteraction: false,
                            }
                        }
                        breakpoints={{ 
                            640: {
                                slidesPerview : 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerview : 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerview : 4,
                                spaceBetween: 50,
                            },
                         }}
                         modules = {[Autoplay]}
                         className='mySwiper'
                    >
                        {
                            sponsorList.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className='sponsor-item'>
                                        <div className='sponsor-thumb'>
                                            <img src={ val.imgUrl } alt="" /> 
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </swiper>
                </div>
            </div>
        </div>
    </div>

  )

}


export default Sponsor