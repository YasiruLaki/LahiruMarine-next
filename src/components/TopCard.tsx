import React from "react";
import { useScrollLinks } from "../components/ScrollTo";

const TopCard: React.FC = () => {
  const { scrollToId } = useScrollLinks();
  return (
    <div>
      <div className="justify-between items-center bg-white  xl:px-[150px] lg:px-[100px] md:px-[60px] px-[30px] py-[10px] hidden md:flex">
        <div className="flex felx-row gap-5">
          <p className="subheading-2 text-[var(--dark-blue-2)] uppercase border-r-1 border-dashed pr-5 py-1">
            ops@lahirumarine.com
          </p>
          <p className="subheading-2 text-[var(--dark-blue-2)] uppercase py-1">
            +94 77 790 1504
          </p>
        </div>
        <div>
          <button
            className=" btn bg-[var(--orange)] text-white px-8 py-3 rounded-md transition duration-300 uppercase hover:bg-[var(--dark-blue-2)]"
            onClick={() => scrollToId("contact")}
          >
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
