import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="block bg-gradient-to-br from-white to-blue-50/50">
      {/* About Us Heading */}
      <div>
        <h1 className="text-end mb-4 mr-[57.4%] text-[24px] text-[#2F8EAA] font-semibold">
          About Us
        </h1>
      </div>

      <div className="max-w-screen-2xl mx-auto  flex flex-col lg:flex-row items-center lg:items-stretch min-h-max gap-1">
        {/* Left Div - Single Image */}
        <div className="relative lg:w-1/3 w-full flex items-center justify-center">
          <img
            src="/about.png"
            alt="Main Visual"
            className="rounded-lg shadow-lg w-[457px] lg:h-[90%] object-cover"
          />
        </div>

        {/* Right Div - Two Blocks */}
        <div className="lg:w-2/3 w-full space-y-8 mt-8 lg:mt-0 relative pb-24">
          {/* Google Partner Logo */}
          <div className="absolute -top-[-30rem] left-[-12%] transform translate-x-0 bg-[#0008169e] p-4 rounded-tl-[24px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[24px] shadow-lg">
            <img
              src="/google.png"
              alt="Google Partner"
              className="w-[156px] h-[78px] rounded-tl-[24px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[24px]"
            />
          </div>

          {/* First Block - Heading */}
          <div className="space-y-2">
            <h2 className="text-[40px] lg:text-[55px] font-bold leading-tight text-gray-900">
              Reliable, affordable &{" "}
              <span className="text-purple-600">
                site-specific web hosting capabilities
              </span>{" "}
              beyond comparison
            </h2>
          </div>

          {/* Second Block - Content */}
          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Left Image */}
            <div className="flex-shrink-0">
              <img
                src="/about.jpg"
                alt="Second Partner"
                className="w-full max-w-[376px] h-[507px] rounded-xl shadow-md"
              />
            </div>

            {/* Right Text */}
            <div className="flex-grow">
              <p className="text-[#7C859E] font-outfit text-[20px] font-medium leading-[40px]">
                You are at the right place if you are looking for{" "}
                <a
                  href="#"
                  className="text-[#7C859E] underline decoration-solid decoration-auto underline-offset-auto"
                >
                  web hosting in Pakistan
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-[#7C859E] underline decoration-solid decoration-auto underline-offset-auto"
                >
                  PK domain
                </a>{" "}
                name, and Windows hosting services with complete reliability, security,
                affordability, and full 24/7 technical support. We don’t just aim to speed
                up your website with premium web hosting in Pakistan but also speed you up
                globally. With our ultra-reliable, fast, and super-secure servers, we are
                here to help your site flow in the air. Not only that but Navicosoft has
                also been established on the premises of reliable{" "}
                <a
                  href="#"
                  className="text-[#7C859E] underline decoration-solid decoration-auto underline-offset-auto"
                >
                  digital marketing services in Pakistan
                </a>{" "}
                and specializes in{" "}
                <a
                  href="#"
                  className="text-[#7C859E] underline decoration-solid decoration-auto underline-offset-auto"
                >
                  healthcare marketing services.
                </a>
              </p>

              {/* Learn More Button */}
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
    </section>
  );
};
