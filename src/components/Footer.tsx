import React from "react";
import { useScrollLinks } from "../components/ScrollTo";

const Footer: React.FC = () => {
  const { scrollToId } = useScrollLinks();
  return (
    <footer className="bg-[var(--dark-blue-2)] text-white mt-15 py-12">
      <div className=" mx-auto xl:px-[150px] lg:px-[100px] md:px-[60px] px-[30px]">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0 md:w-1/2 lg:w-1/3">
            <h2 className="heading-2 mb-4">LAHIRU TRADERS</h2>
            <p className="body-1 text-[var(--grey-1)] max-w-md">
              LTMS delivers smart, reliable marine services tailored to your
              needs.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:w-1/3 lg:w-1/4">
            <h3 className="heading-5 mb-4">NAVIGATION</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a
                    onClick={() => scrollToId("landing")}
                    className="text-[var(--grey-1)] hover:text-[var(--orange)] transition-colors body-1 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToId("about")}
                    className="text-[var(--grey-1)] hover:text-[var(--orange)] transition-colors body-1 cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToId("services")}
                    className="text-[var(--grey-1)] hover:text-[var(--orange)] transition-colors body-1 cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToId("contact")}
                    className="text-[var(--grey-1)] hover:text-[var(--orange)] transition-colors body-1 cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white border-dashed my-6"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white subheading-1 mb-4 md:mb-0">
            COPYRIGHT © 2025 LAHIRU TRADERS
          </p>
          <p className="text-white subheading-1">
            DESIGNED BY{" "}
            <a
              href="https://www.scalex.global"
              target="_blank"
              className="hover:text-[var(--orange)] transition-colors"
            >
              {" "}
              SCALEX{" "}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
