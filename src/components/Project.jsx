import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { project } from "../static/main";
import img from "../assets/icon.svg";

const ProjectSlider = () => {
  return (
    <div className="bg-[#0c151c] py-8 lg:py-16">
      <div className="container1 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-col gap-4 sm:gap-6 text-center mb-8 lg:mb-12">
          <p className="text-base sm:text-lg font-bold text-white leading-[125%]">
            Our projects
          </p>
          <h1 className="font-normal text-4xl sm:text-5xl lg:text-[78px] text-white leading-[87%]">
            Case studies
          </h1>
          <p className="font-light text-sm sm:text-base leading-[150%] text-[rgba(255,255,255,0.7)] max-w-4xl">
            When it comes to creating a high quality website and adjusting the
            marketing strategy, experience matters a lot. Explore our portfolio
            to view some of the projects we've successfully completed!
          </p>
        </div>
        <div className="mb-8 lg:mb-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
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
            modules={[Pagination]}
            className="projectSwiper pb-12"
          >
            {project.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="hover:scale-[1.02] transition-transform duration-300  rounded-3xl lg:rounded-4xl overflow-hidden h-full flex flex-col">
                  <div className="flex-1">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                    />
                    <div className="p-4 sm:p-5 lg:p-6 text-white">
                      <div className="flex items-center flex-wrap gap-2 mb-3 sm:mb-4">
                        {item.item1 && (
                          <span className="font-bold text-xs leading-[170%] text-white border-solid border-[#8baab7] border-[1px] rounded-[40px] px-3 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                            {item.item1}
                          </span>
                        )}
                        {item.item2 && (
                          <span className="font-bold text-xs leading-[170%] text-white border-solid border-[#8baab7] border-[1px] rounded-[40px] px-3 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
                            {item.item2}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold leading-[112%] text-white line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center">
          <button className="text-center cursor-pointer flex group items-center gap-3 sm:gap-4 bg-[#018abe] hover:bg-[#0178a3] text-white text-sm sm:text-base font-normal leading-[250%] rounded-xl sm:rounded-2xl py-2 sm:py-3 px-4 sm:px-6 transition-all duration-200 hover:scale-105">
            See more
            <img
              className="group-hover:-rotate-45 transition-transform duration-200 w-4 h-4 sm:w-5 sm:h-5"
              src={img}
              alt="Arrow icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
