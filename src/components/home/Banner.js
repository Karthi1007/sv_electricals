import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    tag: "POWERING YOUR FUTURE",
    title: "Reliable Electrical Solutions",
    highlight: "Built for Performance",
    desc: "Professional electrical solutions designed to deliver safety, reliability, and long-lasting performance for every project.",
    bg: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=85",
  },
  {
    id: 2,
    tag: "SMART • SAFE • RELIABLE",
    title: "Powering Businesses",
    highlight: "With Confidence",
    desc: "From electrical installations to advanced power solutions, we help businesses operate safely and efficiently.",
    bg: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=85",
  },
  {
    id: 3,
    tag: "ENGINEERED FOR EXCELLENCE",
    title: "Modern Electrical",
    highlight: "Engineering Solutions",
    desc: "Innovative electrical systems and dependable engineering solutions built to meet today's demanding requirements.",
    bg: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=85",
  },
];

export const Banner = () => {
  return (
    <div className="company-banner">
      <Swiper
        modules={[ Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        }}
        loop
        speed={1400}
        grabCursor={true}
        watchSlidesProgress={true}
        className="company-swiper"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              className="company-slide"
              style={{
                backgroundImage: `url(${s.bg})`,
              }}
            >
              {/* Background overlay */}
              <div className="banner-overlay" />

              {/* Gradient overlay */}
              <div className="banner-gradient" />

              {/* Content */}
              <div className="banner-content">
                <span className="banner-tag">{s.tag}</span>

                <h1 className="banner-title">
                  {s.title}
                  <br />
                  <span>{s.highlight}</span>
                </h1>

                <p>{s.desc}</p>

                <div className="banner-actions">
                  <button className="banner-primary-btn">
                    Explore Our Services
                    <span>→</span>
                  </button>

                  <button className="banner-secondary-btn">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Decorative line */}
              <div className="banner-line" />
            </div>
          </SwiperSlide>
        ))}

        {/* Previous Button */}
        <button className="banner-nav banner-prev" aria-label="Previous slide">
          <span>←</span>
        </button>

        {/* Next Button */}
        <button className="banner-nav banner-next" aria-label="Next slide">
          <span>→</span>
        </button>
      </Swiper>
    </div>
  );
};

// <====== This code was old design ======>
// import React from 'react'
// export const Banner = () => {
//     return (
//         <div>
//             <section className="si__slider__five__area bg pt-120 pb-120" style={{
//                 backgroundImage: "url('assets/images/slider/slider-five.jpg')"
//             }}>
//                 <div className="container custom__container">
//                     <div className="row">
//                         <div className="col-lg-7">
//                             <div className="si__slider__five__content">
//                                 <h1><strong>SVE Electricals</strong><br /> Lift Insurance & License Services</h1>
//                                 <p>Trusted lift insurance, license approval, and renewal services<br />
//   ensuring safety, compliance, and reliability.</p>
//                             </div>
//                             <div className="si__slider__five__box">
//                                 <div className="si__slider__five__btn">
//                                     <a className="si__btn btn-one btn-five" href="/about">About us</a>
//                                 </div>
//                                 <div className="si__slider__five__icon">
//                                     <a className="si__slider__vdo my-video-links" data-autoplay="true" data-vbtype="video" href="#">
//                                         <i className="fa-sharp fa-solid fa-play"></i>
//                                     </a>
//                                 </div>
//                                 <div className="si__slider__five__text">
//                                     <span>See How It Works</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-5">
//                             <div className="si__slider__five__thumb__box">
//                                 <div className="si__slider__five__thumb">
//                                     <img src="assets/images/slider/thumb-one.png" alt="" />
//                                 </div>
//                                 <div className="si__slider__five__thumb__two">
//                                     <img src="assets/images/slider/thumb-two.png" alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="si__slider__five__shape1 scale2">
//                     <img src="assets/images/slider/shape1.png" alt="" />
//                 </div>
//             </section>
//         </div>
//     )
// }
