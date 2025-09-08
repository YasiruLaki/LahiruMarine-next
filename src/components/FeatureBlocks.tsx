import React from "react";

type FeatureBlocksProps = {
  number: string;
  title: string;
};

const FeatureBlocks: React.FC<FeatureBlocksProps> = ({ number, title }) => {
  return (
      <div className="bg-[var(--dark-blue-2)] text-white p-6 rounded-lg">
        <div className="flex items-center">
          <h2 className="heading-2 mr-4">{number}</h2>
          <div className="border-l-2 border-white border-dashed pl-4 hyphens-auto">
            <p className="heading-6">{title}</p>
          </div>
        </div>
      </div>
  );
};

export default FeatureBlocks;
