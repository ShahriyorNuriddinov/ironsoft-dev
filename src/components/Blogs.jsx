import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { blog } from "../static/main";

const BlogSlider = () => {
  return (
    <div className="bg-white sm:rounded-b-[80px] lg:rounded-b-[120px]">
      <div className="container1">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78px] font-normal leading-[87%] text-[#0c151c] text-center mb-6 sm:mb-8 lg:mb-10 px-4">
          Blog
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            480: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12 px-4 sm:px-6 lg:px-10"
        >
          {blog.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="hover:scale-[1.02] transition-transform duration-300 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg h-full flex flex-col">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="p-4 sm:p-5 lg:p-6 text-white flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-[#0c151c] leading-[117%] mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8baab7] font-bold leading-[170%] mb-2 sm:mb-3">
                    {item.smalltitle}
                  </p>
                  <p className="text-sm sm:text-base font-light leading-[150%] text-[rgba(0,0,0,0.7)] mb-3 sm:mb-4 flex-1">
                    {item.about}
                  </p>
                  <span className="text-sm sm:text-base font-light leading-[150%] text-[#8baab7]">
                    {item.date}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSlider;
