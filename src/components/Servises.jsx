import React from "react";
import img from "../assets/reactangle.png";
const Servises = () => {
  return (
    <div className="bg-white">
      <div className="container1">
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-normal text-[78px] leading-[87%] text-[#0c151c]">
              Our servises
            </h1>
            <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
              Partners in every phase of the product lifecycle
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 2xl:grid-cols-2">
            <div className="grid grid-rows-3 gap-3">
              <div className="flex flex-col p-6 gap-2 bg-[#def4fe] rounded-[20px]">
                <div className="">
                  <h2 className="font-normal text-4xl leading-[111%] text-[#0c151c]">
                    Web Development
                  </h2>
                </div>
                <div className="">
                  <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
                    The visualized product concept is being implemented and
                    executed. We will choose the technology that matches the
                    requirements and is sustainable to ensure future development
                    potential.
                  </p>
                </div>
                <div className="flex items-end justify-end">
                  <svg
                    className="hover:-rotate-45 transition-transform duration-300"
                    width="78"
                    height="78"
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
              <div className="flex flex-col p-6 gap-2 bg-[#def4fe] rounded-[20px] w-[85%]">
                <div className="">
                  <h2 className="font-normal text-4xl leading-[111%] text-[#0c151c]">
                    SEO Optimisation
                  </h2>
                </div>
                <div className="">
                  <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
                    The work on a digital project continues after deployment. We
                    can observe how real users interact with the product and
                    identify opportunities for optimization. We will
                    continuously evaluate performance, make updates, and make
                    adjustments to ensure that your product remains secure, up
                    to date, and improves over time.
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-6 gap-2 bg-[#def4fe] rounded-[20px] w-[85%]">
                <div className="">
                  <h2 className="font-normal text-4xl leading-[111%] text-[#0c151c]">
                    PCC, SMM
                  </h2>
                </div>
                <div className="">
                  <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
                    Our Paid Media efforts engage audiences when they are most
                    receptive, resulting in high-quality traffic and increased
                    leads and revenue.We will help you quickly increase targeted
                    traffic from paid advertising channels such as Google,
                    Facebook, Instagram or even LinkedIn.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid p-4 sm:p-6 lg:px-8 gap-6 sm:gap-8 border-solid border-[#e2e2e2] border-[1px] rounded-2xl lg:rounded-[48px]">
              <div className="">
                <div className="flex flex-col lg:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="">
                    <img
                      src={img}
                      alt=""
                      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                    />
                  </div>
                  <div className="w-full lg:w-[75%]">
                    <h2 className="font-normal text-2xl sm:text-3xl lg:text-[32px] text-[#0c151c] leading-[112%]">
                      Product Design
                    </h2>
                    <p className="font-light text-sm sm:text-base text-[rgba(0,0,0,0.7)] leading-[150%] mt-2">
                      Product design is where we bring the idea to life with a
                      functional and aesthetic touch. We will use our creative
                      and technical skills to create an attractive digital
                      product that will convert potential users into loyal
                      customers.
                    </p>
                  </div>
                </div>
                <div className="grid grid-rows-3 gap-3 sm:gap-4 lg:gap-5">
                  <div className="flex flex-col sm:flex-row sm:items-center bg-[#f2f8fb] p-3 sm:p-4 gap-2 rounded-xl">
                    <p className="font-normal text-base sm:text-lg lg:text-[20px] leading-[100%] text-[#018abe] sm:pr-4">
                      USER EXPERIENCE <br /> DESIGN
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        User Flows
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        Wireframing
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        UX Writing
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        Prototyping
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center bg-[#f2f8fb] p-3 sm:p-4 gap-2 rounded-xl">
                    <p className="font-normal text-base sm:text-lg lg:text-[20px] leading-[100%] text-[#018abe] sm:pr-4">
                      USER INTERFACE <br /> DESIGN
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        UI Responsive Design
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        Micro Interactions
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center bg-[#f2f8fb] p-3 sm:p-4 gap-2 rounded-xl">
                    <p className="font-normal text-base sm:text-lg lg:text-[20px] leading-[100%] text-[#018abe] sm:pr-4">
                      BRANDING
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        Building Style Guide
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        Unique assets & animations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col lg:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="mb-2 lg:mb-5">
                    <img
                      src={img}
                      alt=""
                      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                    />
                  </div>
                  <div className="w-full lg:w-[75%]">
                    <h2 className="font-normal text-2xl sm:text-3xl lg:text-[32px] text-[#0c151c] leading-[112%]">
                      Web Development
                    </h2>
                    <p className="font-light text-sm sm:text-base text-[rgba(0,0,0,0.7)] leading-[150%] mt-2">
                      The goal of front-end development is to create an
                      intuitive and enjoyable experience for the end user. We
                      will ensure that everything is accurately displayed, with
                      proper alignment on various devices, and presented exactly
                      as intended.
                    </p>
                  </div>
                </div>
                <div className="grid grid-rows-3 gap-3 sm:gap-4 lg:gap-5">
                  <div className="flex flex-col sm:flex-row sm:items-center  bg-[#f2f8fb] p-3 sm:p-4 gap-2 rounded-xl">
                    <p className="font-normal text-base sm:text-lg lg:text-[20px] leading-[100%] text-[#018abe] sm:pr-5">
                      FRONT-END <br /> DEVELOPMENT
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        HTML CSS JS
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        React
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        Next.js
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        Wordpress
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        PWA
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center bg-[#f2f8fb] p-3 sm:p-4 gap-2 rounded-xl">
                    <p className="font-normal text-base sm:text-lg lg:text-[20px] leading-[100%] text-[#018abe] sm:pr-5">
                      BACK-END <br /> DEVELOPMENT
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        Node.js
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        PHP
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        API Integration
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center bg-[#f2f8fb] p-3 sm:p-4 gap-2 rounded-xl">
                    <p className="font-normal text-base sm:text-lg lg:text-[20px] leading-[100%] text-[#018abe] sm:pr-5">
                      QUALITY <br /> ASSURANCE
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        Manual acceptance tests
                      </span>
                      <span className="rounded-[40px] px-3 py-1 bg-[#8baab7] font-bold text-xs text-white leading-[170%] whitespace-nowrap">
                        Automated unit tests
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servises;
