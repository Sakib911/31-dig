import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
  }
  
  export const ServiceCard = ({ image, title, description }: ServiceCardProps) => (
    <div className="bg-white rounded-2xl max-w-[368px]  ">
      <div className="px-[10px] py-[10px]">
      <div className="bg-service-bg bg-cover rounded-xl flex items-center py-12 justify-center ">
       <div className="w-[182px] h-[147px]">
       <Image 
          src={image} 
          alt={title} 
          width={182}
          height={147}
          className=" object-contain"
        />
       </div>
      </div>
      
      <div className="px-[20px]">
      <h3 className="text-[#310138] font-sans text-[16px] font-bold mt-6 mb-3">
        {title}
      </h3>
      
      <p className="text-[#7E7E7E] font-outfit text-[16px] mb-6 leading-[23px] text-justify">
        {description}
      </p>
      
      <div className=" ">
      <button
                
                className="mt-4 text-[#2F8EAA] font-outfit hover:no-underline no-underline font-medium text-[20px] leading-[40px] flex items-center gap-2 "
              >
                Learn More{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className= ' border gap-4 border-[#2F8EAA] rounded-full' fill="none">
                  <path d="M5 12H19" stroke="#2F8EAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="" />
                  <path d="M15 8L19 12L15 16" stroke="#2F8EAA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="" />
                  
                </svg>
              </button>
      </div>
      </div>
      </div>
    </div>
  );
  