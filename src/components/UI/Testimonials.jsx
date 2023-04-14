import React from 'react';
import "../../styles/testimonial.css"


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import avatar from "../../assets/img/avatar01.png";


// import required modules
import { Autoplay} from "swiper";

export default function Testimonial() {
  return (
    <>
     <section>
        <div className="container sliders">
            <h2 className="section__title">Testimonials</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        
          modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide__item">
                <img src={avatar} alt="" />
                <h6>sample title</h6>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, assumenda?
                </p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="slide__item">
                <img src={avatar} alt="" />
                <h6>sample title</h6>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, assumenda?
                </p>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="slide__item">
                <img src={avatar} alt="" />
                <h6>sample title</h6>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, assumenda?
                </p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="slide__item">
                <img src={avatar} alt="" />
                <h6>sample title</h6>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, assumenda?
                </p>
            </div>
        </SwiperSlide>
     
      </Swiper>
        </div>
     </section>
    </>
  );
}
