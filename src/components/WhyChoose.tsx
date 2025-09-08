import React from "react";
import LabourImage from "../../public/labour.jpg";

const WhyChoose: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white xl:px-[150px] lg:px-[100px] md:px-[60px] px-[30px] sm:py-20 py-10">
      {/* Left side with worker image */}
      <div className="w-full lg:w-2/5 hidden md:block">
        <img
          src={LabourImage.src}
          alt="Marine worker overseeing shipyard"
          className="w-full lg:h-full h-[300px] object-cover rounded-2xl"
        />
      </div>

      {/* Right side with content */}
      <div className="w-full lg:w-3/5  md:py-8 lg:px-8">
        <div className="text-[var(--blue-1)] subheading-2 mb-1 md:text-left text-center">WHY?</div>
        <h2 className="heading-2 text-[var(--dark-blue-1)] mb-8 md:text-left text-center">
          WHY CHOOSE LAHIRU TRADERS
        </h2>

        {/* Feature boxes */}
        <div className="space-y-4">
        <div className="bg-[var(--grey-1)] hover:bg-[var(--dark-blue-1)] transition-all duration-300 hover:text-white hover:scale-103 transform cursor-pointer text-[var(--dark-blue-3)] p-6 rounded-xl">          
          <h3 className="heading-6 mb-2">ESTABLISHED EXPERTISE</h3>
            <p className="body-2">
              Over 30 years of proven success in marine contracting, shipboard
              waste removal, and junk dealing
            </p>
          </div>

          <div className="bg-[var(--grey-1)] hover:bg-[var(--dark-blue-1)] transition-all duration-300 hover:text-white hover:scale-103 transform cursor-pointer p-6 rounded-xl">
            <h3 className="heading-6 mb-2">
              TRUSTED PARTNER
            </h3>
            <p className="body-2">
              Built on a reputation for reliability, integrity, and delivering
              results without compromise
            </p>
          </div>

          <div className="bg-[var(--grey-1)] hover:bg-[var(--dark-blue-1)] transition-all duration-300 hover:text-white hover:scale-103 transform cursor-pointer p-6 rounded-xl">
            <h3 className="heading-6 mb-2">
              SERVICE EXCELLENCE
            </h3>
            <p className="body-2">
              Dedicated teams who bring skill, efficiency, and competence to
              every project
            </p>
          </div>

          <div className="bg-[var(--grey-1)] hover:bg-[var(--dark-blue-1)] transition-all duration-300 hover:text-white hover:scale-103 transform cursor-pointer p-6 rounded-xl">
            <h3 className="heading-6 mb-2">
              COMMITMENT TO COMPLIANCE
            </h3>
            <p className="body-2">
              Strict adherence to safety and environmental regulations, ensuring
              peace of mind for our clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
