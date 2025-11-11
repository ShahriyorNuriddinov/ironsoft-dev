import React from "react";
import logo from "../assets/logos.svg";
import logo1 from "../assets/showcaselogo.svg";
import logo2 from "../assets/showcaselogo1.svg";
import logo3 from "../assets/showcaselogo2.svg";
import logo4 from "../assets/showcaselogo3.svg";
import img from "../assets/s.png";
import img2 from "../assets/s2.png";
import img3 from "../assets/s3.png";
import img4 from "../assets/svg.svg";
import img5 from "../assets/svg1.svg";
import img6 from "../assets/svg3.svg";

const Showcase = () => {
  return (
    <div className="bg-[#0c151c]">
      <div className="container1 px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col items-center lg:items-start justify-around gap-8 lg:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <img
                src={logo}
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
              />
              <h1 className="font-normal leading-[117%] text-4xl sm:text-5xl lg:text-6xl text-white">
                Your Website <br /> good enough?
              </h1>
            </div>

            <div className="lg:max-w-none">
              <div className="border-solid cursor-pointer group bg-white p-4 sm:p-6 lg:p-3 rounded-[20px] border-[1px] border-[#018abe] flex items-center justify-between gap-3 lg:gap-2">
                <p className="font-normal group-hover:text-[#018abe] text-2xl sm:text-3xl lg:text-[44px] leading-[91%] text-[#0c151c] whitespace-nowrap">
                  Check this now!
                </p>
                <svg
                  className="group-hover:-rotate-45 transition-transform duration-300 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="39" cy="39" r="39" fill="#018ABE" />
                  <path
                    d="M47.4885 28.956L47.5072 28.9374C47.5321 28.9375 47.5538 28.9407 47.5724 28.947C47.591 28.9533 47.6127 28.9565 47.6376 28.9566L47.47 28.9373C47.6935 28.9382 47.9076 28.9795 48.1122 29.0611C48.3167 29.1427 48.4994 29.2646 48.6602 29.4267C48.6849 29.4517 48.7065 29.4797 48.725 29.5108C48.7435 29.542 48.7651 29.57 48.7899 29.5949L48.6602 29.4267C48.8209 29.5889 48.9381 29.7757 49.0117 29.9871C49.0853 30.1985 49.1279 30.4099 49.1394 30.621L49.0867 47.3313C49.0734 47.5423 49.0259 47.7501 48.9443 47.9547C48.8627 48.1593 48.7409 48.342 48.5787 48.5027C48.2544 48.8242 47.8594 48.9871 47.3937 48.9913C46.9279 48.9956 46.5343 48.8355 46.2128 48.5113C46.052 48.3491 45.9286 48.1623 45.8426 47.9508C45.7565 47.7393 45.7202 47.528 45.7335 47.3169L45.8063 34.6307L31.8872 48.4315C31.5505 48.7653 31.1523 48.9313 30.6928 48.9293C30.2333 48.9274 29.8366 48.758 29.5027 48.4213C29.1812 48.097 29.0214 47.7051 29.0234 47.2456C29.0253 46.7861 29.1947 46.3894 29.5315 46.0555L43.4505 32.2548L30.7642 32.2192C30.5406 32.2183 30.3297 32.1739 30.1313 32.0861C29.933 31.9983 29.7535 31.8734 29.5927 31.7112C29.4567 31.574 29.3487 31.4214 29.2686 31.2534C29.1886 31.0854 29.1428 30.9082 29.1312 30.7219L29.0947 30.5355C29.0957 30.3119 29.137 30.0979 29.2186 29.8933C29.3002 29.6887 29.422 29.506 29.5842 29.3453C29.7463 29.1845 29.93 29.0642 30.1353 28.9844C30.3405 28.9045 30.5549 28.8651 30.7785 28.866L47.47 28.9373L47.4885 28.956Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full text-center lg:text-left">
              <p className="font-normal text-xl sm:text-2xl leading-[292%] text-white mb-4">
                They Trust Us
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6">
                <img
                  src={logo1}
                  alt=""
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
                <img
                  src={logo2}
                  alt=""
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
                <img
                  src={logo3}
                  alt=""
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
                <img
                  src={logo4}
                  alt=""
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-1 lg:gap-y-7">
              <img
                src={img}
                alt=""
                className="w-full h-32 sm:h-40 lg:h-auto object-cover col-span-2 sm:col-span-1 sm:row-span-2 lg:row-span-1"
              />
              <img
                src={img2}
                alt=""
                className="w-full h-32 sm:h-40 lg:h-auto object-cover col-span-2 sm:col-span-1 sm:row-span-2 lg:row-span-1"
              />
              <img
                src={img3}
                alt=""
                className="w-full h-32 sm:h-40 lg:h-auto object-cover col-span-2 sm:col-span-1 sm:row-span-2 lg:row-span-1"
              />
              <div className="flex flex-col items-start p-3 sm:p-4 border-solid border-2 border-[#3d4449] rounded-[5px]">
                <img
                  src={img4}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2"
                />
                <p className="font-light text-base sm:text-lg lg:text-2xl text-white leading-[133%]">
                  Web Development
                </p>
              </div>

              <div className="flex flex-col items-start p-3 sm:p-4 border-solid border-2 border-[#3d4449] rounded-[5px]">
                <img
                  src={img5}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2"
                />
                <p className="font-light text-base sm:text-lg lg:text-2xl text-white leading-[133%]">
                  SEOptimisation
                </p>
              </div>

              <div className="flex flex-col items-start p-3 sm:p-4 border-solid border-2 border-[#3d4449] rounded-[5px]">
                <img
                  src={img6}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2"
                />
                <p className="font-light text-base sm:text-lg lg:text-2xl text-white leading-[133%]">
                  PPC and SMM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
