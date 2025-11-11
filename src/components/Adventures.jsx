import React from "react";
import img from "../assets/ironsoft.svg";
import img1 from "../assets/ellepsie.svg";
import img2 from "../assets/ellepsie1.svg";
import img3 from "../assets/ellepsie2.svg";

const Adventures = () => {
  return (
    <div
      style={{ borderRadius: "120px 120px 0 0" }}
      className="bg-white overflow-hidden"
    >
      <div className="container1 px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-5 auto-rows-auto min-h-0">
          <div className="bg-white p-4 sm:p-6 flex flex-col items-start justify-between gap-4 sm:gap-6 rounded-3xl lg:rounded-[48px] order-1">
            <p className="font-bold text-base sm:text-lg leading-[125%] text-[#0c151c]">
              Our advantages
            </p>
            <img src={img} alt="" className="" />
            <p className="font-light text-sm sm:text-base text-[rgba(0,0,0,0.7)] leading-relaxed">
              Team of 12 passionate engineers developing and setting with care
              to make sure our clients are 100% happy.
            </p>
            <span className="flex items-center group cursor-pointer font-bold text-xs sm:text-sm leading-[170%] text-[#000] gap-2 hover:text-blue-400 mt-2">
              more About us
              <svg
                className="group-hover:translate-x-2 group-hover:text-blue-400 transition-transform duration-500"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-blue-400"
                  d="M11.7773 5.48438H11.7891C11.7969 5.49219 11.8027 5.5 11.8066 5.50781C11.8105 5.51562 11.8164 5.52344 11.8242 5.53125L11.7773 5.47266C11.8477 5.54297 11.9023 5.62305 11.9414 5.71289C11.9805 5.80273 12 5.89844 12 6C12 6.01562 11.998 6.03125 11.9941 6.04688C11.9902 6.0625 11.9883 6.07812 11.9883 6.09375L12 6C12 6.10156 11.9785 6.19727 11.9355 6.28711C11.8926 6.37695 11.8398 6.45703 11.7773 6.52734L6.52734 11.7891C6.45703 11.8516 6.37695 11.9023 6.28711 11.9414C6.19727 11.9805 6.10156 12 6 12C5.79688 12 5.62109 11.9277 5.47266 11.7832C5.32422 11.6387 5.25 11.4648 5.25 11.2617C5.25 11.1602 5.26953 11.0625 5.30859 10.9688C5.34766 10.875 5.40234 10.7969 5.47266 10.7344L9.46875 6.75H0.75C0.539062 6.75 0.361328 6.67773 0.216797 6.5332C0.0722656 6.38867 0 6.21094 0 6C0 5.79688 0.0722656 5.62305 0.216797 5.47852C0.361328 5.33398 0.539062 5.26172 0.75 5.26172H9.46875L5.47266 1.27734C5.40234 1.20703 5.34961 1.12695 5.31445 1.03711C5.2793 0.947266 5.26172 0.851562 5.26172 0.75C5.26172 0.664062 5.27539 0.582031 5.30273 0.503906C5.33008 0.425781 5.37109 0.355469 5.42578 0.292969L5.47266 0.222656C5.54297 0.152344 5.62305 0.0976562 5.71289 0.0585938C5.80273 0.0195312 5.89844 0 6 0C6.10156 0 6.19727 0.0195312 6.28711 0.0585938C6.37695 0.0976562 6.45703 0.152344 6.52734 0.222656L11.7773 5.47266V5.48438Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <div className="bg-[#def4fe] flex flex-col justify-between p-4 sm:p-6 gap-3 sm:gap-4 rounded-3xl lg:rounded-[48px] order-2 md:order-2">
            <div>
              <p className="font-normal text-lg sm:text-xl text-[#0c151c] leading-[120%]">
                "I've worked with them several times and have always been happy
                with the results."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src={img1} alt="Olexander" className="" />
              </div>
              <div>
                <p className="font-normal text-lg sm:text-xl leading-[120%] text-[#0c151c]">
                  Olexander Danilkovych
                </p>
                <p className="font-light text-sm sm:text-base leading-[125%] text-[rgba(0,0,0,0.7)]">
                  co-owner of S-8 Trading
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-2">
              <div className="size-8 sm:size-10 lg:size-13 rounded-full border-solid border border-gray-400 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                <i className="fa-solid fa-globe text-sm sm:text-base"></i>
              </div>
              <div className="size-8 sm:size-10 lg:size-13 rounded-full border-solid border border-gray-400 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                <i className="fa-brands fa-linkedin-in text-sm sm:text-base"></i>
              </div>
            </div>
          </div>

          <div className="bg-[#def4fe] flex flex-col justify-between p-4 sm:p-6 gap-3 sm:gap-4 rounded-3xl lg:rounded-[48px] order-3 md:order-3">
            <div>
              <p className="font-normal text-lg sm:text-xl text-[#0c151c] leading-[120%]">
                "We were impressed by how promptly they could go from approval
                of the project to delivering final outputs."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src={img2} alt="Vitaliy" className="" />
              </div>
              <div>
                <p className="font-normal text-lg sm:text-xl leading-[120%] text-[#0c151c]">
                  Vitaliy Stetsenko
                </p>
                <p className="font-light text-sm sm:text-base leading-[125%] text-[rgba(0,0,0,0.7)]">
                  founder of Vital Interiors
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-2">
              <div className="size-8 sm:size-10 lg:size-13 rounded-full border-solid border border-gray-400 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                <i className="fa-solid fa-globe text-sm sm:text-base"></i>
              </div>
              <div className="size-8 sm:size-10 lg:size-13 rounded-full border-solid border border-gray-400 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                <i className="fa-brands fa-linkedin-in text-sm sm:text-base"></i>
              </div>
            </div>
          </div>

          <div className="bg-[#def4fe] flex flex-col justify-between p-4 sm:p-6 gap-3 sm:gap-4 rounded-3xl lg:rounded-[48px] order-4 md:order-4">
            <div>
              <p className="font-normal text-lg sm:text-xl text-[#0c151c] leading-[120%]">
                "Their team really listens and researches the best ways to make
                our partnership the best it can possibly be."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <img src={img3} alt="Oleg" className="" />
              </div>
              <div>
                <p className="font-normal text-lg sm:text-xl leading-[120%] text-[#0c151c]">
                  Oleg Bolebrukh
                </p>
                <p className="font-light text-sm sm:text-base leading-[125%] text-[rgba(0,0,0,0.7)]">
                  founder at Trident Modular
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-2">
              <div className="size-8 sm:size-10 lg:size-13 rounded-full border-solid border border-gray-400 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                <i className="fa-solid fa-globe text-sm sm:text-base"></i>
              </div>
              <div className="size-8 sm:size-10 lg:size-13 rounded-full border-solid border border-gray-400 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                <i className="fa-brands fa-linkedin-in text-sm sm:text-base"></i>
              </div>
            </div>
          </div>

          <div className="bg-white border-[#e2e2e2] p-4 sm:p-6 flex flex-col items-start justify-between gap-4 sm:gap-6 border-solid border rounded-3xl lg:rounded-[48px] order-5 md:order-5">
            <h1 className="font-normal text-4xl sm:text-5xl leading-[67%] text-blue-500">
              04
            </h1>
            <h2 className="font-normal text-2xl sm:text-3xl leading-[112%] text-[#0c151c]">
              Highly process- <br /> oriented
            </h2>
            <p className="font-light text-sm sm:text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
              We follow battle-tested, unique processes for everything that we
              do, ensuring high-quality, efficient, and debt-free delivery
            </p>
          </div>

          <div className="bg-white border-[#e2e2e2] p-4 sm:p-6 flex flex-col items-start justify-between gap-4 sm:gap-6 border-solid border rounded-3xl lg:rounded-[48px] order-6 md:order-6">
            <h1 className="font-normal text-4xl sm:text-5xl leading-[67%] text-blue-500">
              05
            </h1>
            <h2 className="font-normal text-2xl sm:text-3xl leading-[112%] text-[#0c151c]">
              Technical excel <br />
              lency
            </h2>
            <p className="font-light text-sm sm:text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
              Our engineering practices will bring website and marketing
              craftsmanship, quality, and consistency to the table, all in a
              flexible state to guarantee ever-changing requirements.
            </p>
          </div>

          <div className="bg-white border-[#e2e2e2] p-4 sm:p-6 flex flex-col items-start justify-between gap-4 sm:gap-6 border-solid border rounded-3xl lg:rounded-[48px] order-7 md:order-7">
            <h1 className="font-normal text-4xl sm:text-5xl leading-[67%] text-blue-500">
              06
            </h1>
            <h2 className="font-normal text-2xl sm:text-3xl leading-[112%] text-[#0c151c]">
              Full transparency
            </h2>
            <p className="font-light text-sm sm:text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
              We provide transparent and clear communication, project
              management, and budgeting.We provide transparent and clear
              communication, project management, and budgeting.
            </p>
          </div>

          <div className="bg-[#018abe] group p-6 sm:p-8 flex flex-col items-center justify-center gap-4 sm:gap-6 rounded-3xl lg:rounded-[48px] order-8 md:order-8">
            <h1 className="font-normal text-2xl sm:text-3xl lg:text-[44px] leading-[91%] text-white text-center">
              Get a free consultation
            </h1>
            <svg
              className="group-hover:-rotate-45 transition-transform duration-300 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="39" cy="39" r="39" fill="white" />
              <path
                d="M47.4885 28.956L47.5072 28.9374C47.5321 28.9375 47.5538 28.9407 47.5724 28.947C47.591 28.9533 47.6127 28.9565 47.6376 28.9566L47.47 28.9373C47.6935 28.9382 47.9076 28.9795 48.1122 29.0611C48.3167 29.1427 48.4994 29.2646 48.6602 29.4267C48.6849 29.4517 48.7065 29.4797 48.725 29.5108C48.7435 29.542 48.7651 29.57 48.7899 29.5949L48.6602 29.4267C48.8209 29.5889 48.9381 29.7757 49.0117 29.9871C49.0853 30.1985 49.1279 30.4099 49.1394 30.621L49.0867 47.3313C49.0734 47.5423 49.0259 47.7501 48.9443 47.9547C48.8627 48.1593 48.7409 48.342 48.5787 48.5027C48.2544 48.8242 47.8594 48.9871 47.3937 48.9913C46.9279 48.9956 46.5343 48.8355 46.2128 48.5113C46.052 48.3491 45.9286 48.1623 45.8426 47.9508C45.7565 47.7393 45.7202 47.528 45.7335 47.3169L45.8063 34.6307L31.8872 48.4315C31.5505 48.7653 31.1523 48.9313 30.6928 48.9293C30.2333 48.9274 29.8366 48.758 29.5027 48.4213C29.1812 48.097 29.0214 47.7051 29.0234 47.2456C29.0253 46.7861 29.1947 46.3894 29.5315 46.0555L43.4505 32.2548L30.7642 32.2192C30.5406 32.2183 30.3297 32.1739 30.1313 32.0861C29.933 31.9983 29.7535 31.8734 29.5927 31.7112C29.4567 31.574 29.3487 31.4214 29.2686 31.2534C29.1886 31.0854 29.1428 30.9082 29.1312 30.7219L29.0947 30.5355C29.0957 30.3119 29.137 30.0979 29.2186 29.8933C29.3002 29.6887 29.422 29.506 29.5842 29.3453C29.7463 29.1845 29.93 29.0642 30.1353 28.9844C30.3405 28.9045 30.5549 28.8651 30.7785 28.866L47.47 28.9373L47.4885 28.956Z"
                fill="#018ABE"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventures;
