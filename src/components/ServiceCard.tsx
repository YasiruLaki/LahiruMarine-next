import React from "react";
import {Anchor} from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  overlay?: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  overlay = true,
}) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg h-[340px] ${
        overlay ? "text-white" : "text-[var(--dark-blue-1)]"
      }`}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div
        className={`absolute inset-0 p-5 flex flex-col justify-end`}
        style={{
            background: overlay
              ? "linear-gradient(to top, #121D50cc 40%, transparent 100%)"
              : "linear-gradient(to top, #FFFFFFef 40%, transparent 100%)",
          }}
      >
        <div className="flex flex-col gap-2 mb-2">
          <div className="bg-[var(--blue-1)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-2">
            <Anchor size={24}/>
          </div>
          <h3 className="heading-5 uppercase">{title}</h3>
        </div>
        <p
          className={`body-2 ${
            overlay ? "text-white" : "text-[var(--grey-2)]"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
