import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="block py-24 bg-gradient-to-br from-white to-blue-50/50">
      <div>
        <h1 className="text-center mb-10 text-[24px]">About Us</h1>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-stretch min-h-max">

        {/* Left Div - Single Image */}
        <div className="relative lg:w-1/3 w-full flex items-center justify-center">
          <img
            src="/about.png"
            alt="Main Visual"
            className="rounded-lg shadow-lg w-[457px] lg:h-[100%] object-cover"
          />
        </div>

        {/* Right Div - Two Blocks */}
        <div className="lg:w-2/3 w-full space-y-8 mt-8 lg:mt-0 lg: relative pb-24">

          {/* Google Partner Logo - Centered Between Images */}
         
            <img
            src="/google.png"
            alt="Google Partner"
            className="absolute -top-[-40rem] left-[-1%] transform -translate-x-1/2 w-[156px] h-[78px] rounded-tl-[24px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[24px]  bg-black  bg-white p-4"
          />
        
          

          {/* First Block - Text */}
          <div className="space-y-2">
            <h2 className="text-[55px] font-bold leading-tight">
              Reliable, affordable & <span className="text-purple-600">Reliable, affordable & site-specific web hosting capabilities </span> beyond comparison
            </h2>
          </div>

          {/* Second Block - Nested Divs */}
          <div className="space-y-6">
            {/* First Flex Div */}
           

            {/* Second Flex Div */}
            <div className="flex items-center space-x-4 ">
              <div className="flex-shrink-0">
                <img
                  src="/about.jpg"
                  alt="Second Partner"
                  className="w-[376px] h-[507px] rounded-lg rounded-2xl"
                />
              </div>
              <div className="flex-grow">
                <p className="text-gray-600 leading-relaxed">
                You are at the right place if you are looking for web hosting in Pakistan, PK domain name, and Windows hosting services with complete reliability, security, affordability and full 24/7 technical support. We don’t just aim to speed up your website with premium web hosting in Pakistan but also speed you up globally. With our ultra-reliable, fast, and super-secure servers, we are here to help your site flow in the air. Not only that but Navicosoft has also been established on the premises of reliable digital marketing services in Pakistan and specialises in healthcare marketing services.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
