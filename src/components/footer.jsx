import React from "react";
import logo from "../assets/logo.svg";
import { nav } from "../static/main";

export const Footer = () => {
  return (
    <footer className="bg-[#0c151c] py-8">
      <div className="container1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="Logo" className="h-8 sm:h-10 lg:h-12" />
            </a>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 items-center order-2 lg:order-1">
            {nav.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="font-normal text-base sm:text-lg text-white leading-[130%] hover:text-[#018abe] transition-colors duration-300 whitespace-nowrap"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="order-1 lg:order-2 flex-shrink-0">
            <button className="rounded-2xl py-2 sm:py-3 px-4 sm:px-6 bg-[#018abe] font-bold text-xs sm:text-sm leading-[170%] text-white cursor-pointer hover:bg-[#00b5e2] transition-colors duration-300 transform hover:scale-105 w-full lg:w-auto">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-[#242c33] gap-4 sm:gap-6">
          <p className="font-light text-xs sm:text-sm text-[#8baab7] leading-[150%] text-center sm:text-left">
            © 2024 Your Company. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="font-light text-xs sm:text-sm text-[#8baab7] leading-[150%] hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-light text-xs sm:text-sm text-[#8baab7] leading-[150%] hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
