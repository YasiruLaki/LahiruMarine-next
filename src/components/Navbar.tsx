import React, { useState } from "react";
import LogoWhite from "../../public/logo-white.png"; 
import { useScrollLinks } from "../components/ScrollTo";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToId } = useScrollLinks();

  return (
    <nav className="relative z-50">
      <div className="flex justify-between sm:items-center xl:px-[150px] lg:px-[100px] md:px-[60px] px-[30px] py-[15px] bg-[var(--dark-blue-1)] text-white items-start">
        {/* Logo */}
        <div className="flex items-start">
          <a
            href="/"
            className="flex gap-4"
            onClick={() => scrollToId("landing")}
          >
            <img
              src={LogoWhite.src}
              alt="Lahiru Traders Logo"
              className="h-[40px] object-cover"
            />
            <p className="sm:heading-4 heading-5 uppercase translate-y-1 hidden sm:block">
              Lahiru Traders
            </p>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex sm:flex-row flex-col justify-end sm:text-left text-right">
          {/* Mobile Menu Button */}
          <div className="block sm:hidden">
            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="bg-[var(--orange)] text-white px-4 py-2 rounded-md transition duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links with Animation */}
          <div
            className={`overflow-hidden sm:overflow-visible transition-all duration-500 ease-in-out  sm:opacity-100 sm:pointer-events-auto sm:static absolute top-full right-0 left-0 bg-[var(--dark-blue-1)] sm:bg-transparent ${
              isOpen
                ? "max-h-[500px] opacity-100 translate-y-0 pointer-events-auto"
                : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <ul className="subheading-2 uppercase flex sm:flex-row flex-col sm:space-x-4 sm:mt-0 mt-4 sm:gap-0 gap-5 px-[30px] pb-4 sm:px-0 sm:pb-0">
              <li>
                <a
                  onClick={() => scrollToId("landing")}
                  className="hover:text-[var(--orange)] transition duration-300 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToId("about")}
                  className="hover:text-[var(--orange)] transition duration-300 cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToId("services")}
                  className="hover:text-[var(--orange)] transition duration-300 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToId("contact")}
                  className="hover:text-[var(--orange)] transition duration-300 cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
