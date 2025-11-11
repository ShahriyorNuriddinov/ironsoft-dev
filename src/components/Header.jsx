import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { nav } from "../static/main";
import img from "../assets/logos.svg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0c151c]">
      <div className="container1 flex items-center justify-between py-3 px-4 md:px-0">
        <div>
          <a className="hidden lg:block" href="/">
            <img src={logo} alt="Logo" className="h-8 md:h-10" />
          </a>
          <a className="block lg:hidden" href="/">
            <img src={img} alt="Logo" className="h-8 md:h-10" />
          </a>
        </div>

        <nav className="hidden lg:flex gap-5 items-center">
          {nav.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="font-normal text-xl text-white leading-[130%] hover:text-[#018abe] transition"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button className="rounded-2xl py-3 px-5 bg-[#018abe] font-bold text-xs leading-[170%] text-white cursor-pointer hover:bg-[#00b5e2] transition">
            Get Started
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? (
              <i class="fa-solid fa-xmark fa-lg"></i>
            ) : (
              <i class="fa-solid fa-bars fa-lg"></i>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="lg:hidden container1 bg-[#0c151c] px-4 pb-4 flex flex-col gap-3">
          {nav.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="font-normal text-lg text-white leading-[130%] hover:text-[#018abe] transition"
            >
              {item.title}
            </a>
          ))}
          <button className="rounded-2xl py-3 px-5 bg-[#018abe] font-bold text-xs leading-[170%] text-white mt-2 cursor-pointer hover:bg-[#00b5e2] transition">
            Get Started
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
