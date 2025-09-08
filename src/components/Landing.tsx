"use client";

import { useScrollLinks } from "./ScrollTo";
import Navbar from "./Navbar";
import TopCard from "./TopCard";
import FeatureBlocks from "./FeatureBlocks";
import ServiceCard from "./ServiceCard";
import WhyChoose from "./WhyChoose";
import Contact from "./Contact";
import Footer from "./Footer";
import { Anchor } from "lucide-react";

import Image from "next/image";

export default function Landing() {
  const FeatureBlocksList = [
    { number: "01", title: "EXPERTISE AND EXPERIENCE" },
    { number: "02", title: "COMMITTED TO QUALITY" },
    { number: "03", title: "COMPREHENSIVE SERVICES" },
  ];

  const { scrollToId } = useScrollLinks();

  return (
    <div>
      <TopCard />
      <Navbar />

      {/* HERO SECTION */}
      <section id="landing">
        <div className="relative w-full sm:h-[calc(100vh-100px)] h-[100vh] bg-gray-900 overflow-hidden xl:px-[150px] lg:px-[100px] md:px-[60px] px-[30px]">
          <div className="absolute inset-0 sm:bg-gradient-to-r sm:from-[#121D50] sm:to-blue-900/10 bg-gradient-to-r from-[#121D50]/80 to-blue-900/70 z-10" />

          {/* Background image */}
          <Image
            src="/hero-img.png"
            alt="Ship at sea"
            fill
            priority
            className="object-cover z-0"
          />

          {/* Content container */}
          <div className="relative z-20 h-full flex flex-col justify-center mx-auto sm:text-left text-center">
            <div className="text-white space-y-4 sm:items-start items-center flex flex-col justify-center h-full">
              <h2 className="subheading-1 uppercase">
                WASTE REMOVAL & JUNK DEALING SERVICES
              </h2>
              <h1 className="heading-1 max-w-[900px] drop-shadow-xl/50">
                SHIPBOARD WASTE & JUNK EXPERTS IN SRI LANKA
              </h1>
              <p className="body-1 max-w-xl">
                With over three decades of industry leadership, Lahiru Traders
                proudly stands at the forefront of Marine Contracting, Shipboard
                Waste Removal, and Junk Dealing
              </p>

              <div className="pt-2">
                <button
                  className="btn bg-[var(--orange)] text-white px-8 py-3 rounded-md transition duration-300 uppercase hover:bg-[var(--dark-blue-2)] cursor-pointer"
                  onClick={() => scrollToId("contact")}
                >
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="xl:px-[150px] lg:px-[100px] md:px-[60px] px-[30px] py-10">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-5">
          <div className="lg:w-2/3 lg:pr-8">
            <p className="text-[var(--blue-1)] subheading-2 uppercase text-sm mb-4">
              ABOUT US
            </p>
            <h1 className="heading-2 text-[var(--dark-blue-1)] mb-6">
              POWERING SRI LANKA'S MARINE INDUSTRY FOR OVER 30 YEARS
            </h1>
            <div className="space-y-4 body-1 text-[var(--grey-2)]">
              <p>
                Founded in 1992, Lahiru Traders has been at the forefront of Sri
                Lanka's marine industry for over 30 years. With a strong
                commitment to safety, compliance, and operational excellence, we
                continue to evolve to meet the dynamic needs of Shipping
                Agencies, operators, and maritime businesses both within Sri
                Lanka and across international waters.
              </p>
              <p>
                Our reputation for unmatched precision and unwavering reliability
                positions us as the go-to partner for maritime operations across
                Sri Lanka and beyond.
              </p>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 relative">
            <Image
              src="/about-img.png"
              alt="Container port with cranes"
              width={500}
              height={400}
              className="rounded-[12px] shadow-lg object-cover"
            />

            <div className="absolute top-8 left-3 bg-white lg:p-4 p-2 rounded-lg shadow-md">
              <div className="absolute -top-6 bg-[var(--orange)] text-white lg:p-3 p-2 rounded-full flex items-center justify-center mb-2">
                <Anchor size={24} />
              </div>
              <div className="text-center">
                <h3 className="heading-2 text-[var(--dark-blue-1)] mt-3">20+</h3>
                <div className="bg-blue-700 text-white lg:px-9 lg:py-4 px-3 py-2 rounded">
                  <p className="subheading-1">AWARDS WINNING</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="flex flex-wrap justify-center gap-2 sm:mt-12 mt-5">
          {FeatureBlocksList.map((feature, index) => (
            <div key={index} className="w-full sm:w-[48%] lg:w-[32.5%]">
              <FeatureBlocks number={feature.number} title={feature.title} />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-gray-50 py-16 xl:px-[150px] lg:px-[100px] md:px-[60px] px-[30px]">
        <p className="text-[var(--blue-1)] subheading-2 uppercase mb-2 text-center">
          Our Services
        </p>
        <h2 className="heading-2 text-[var(--dark-blue-1)] uppercase mb-10 text-center">
          Reliable Marine Solutions with LTMS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-lg group h-[340px]">
            <Image
              src="/ship-service-3.jpeg"
              alt="Services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121D50] to-transparent flex items-end p-5">
              <p className="text-white heading-2 uppercase">Services →</p>
            </div>
          </div>

          <ServiceCard
            title="Shipboard Waste Removal"
            description="Safe, compliant and sustainable shipboard waste removal services designed to meet both industry regulations and operational timelines."
            image="/ship-junk-2.jpg"
          />

          <ServiceCard
            title="Junk Dealing"
            description="We buy and deal in a wide range of marine and industrial junk, including scrap metals, decommissioned equipment, old wire ropes, mooring ropes and vessel parts."
            image="/ship-junk.jpg"
            overlay={false}
          />

          <ServiceCard
            title="Marine Contracting"
            description="Skilled, certified labor for marine operations, including tank cleaning, chipping, painting, hatch cleaning, engine room cleaning, and more."
            image="/tank-cleaning.jpg"
            overlay={false}
          />
        </div>
      </section>

      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
}