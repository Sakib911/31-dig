"use client";

import { ServiceCard } from "./ServiceCard";
import React, { useState, useEffect } from "react";
import styles from './styles.module.css';

const servicesData = [
  
  {
    image: "/service-1.png",
    title: "Website Design",
    description:
      "Designing your website seems daunting & intimidating, right? Let our expert web designers evaluate your business & have custom website design done at affordable prices!",
  },
  {
    image: "/service-2.png",
    title: "SEO Optimization",
    description:
      "Boost your online presence with our cutting-edge SEO services that deliver tangible results and enhance your website's visibility in search engines.",
  },
  {
    image: "/service-3.png",
    title: "Social Media Marketing",
    description:
      "Expand your reach with targeted social media strategies designed to engage your audience and build your brand online.",
  },
  {
    image: "/service-4.png",
    title: "Content Creation",
    description:
      "Elevate your brand with professional content creation tailored to your audience, ensuring compelling and consistent messaging.",
  },
  {
    image: "/service-5.png",
    title: "App Development",
    description:
      "Transform your ideas into reality with custom app development that ensures seamless user experiences and cutting-edge functionality.",
  },
  {
    image: "/service-6.png",
    title: "Brand Strategy",
    description:
      "Define your brand’s vision and roadmap with expert strategies that differentiate your business in the competitive marketplace.",
  },

  {
    image: "/service-1.png",
    title: "E-commerce Solutions",
    description:
      "Empower your business with advanced e-commerce solutions that streamline operations and improve customer experience.",
  },
  {
    image: "/service-8.png",
    title: "Graphic Design",
    description:
      "Make your brand stand out with captivating visuals created by our expert graphic designers.",
  },
  {
    image: "/service-9.png",
    title: "Video Production",
    description:
      "Create stunning video content that tells your story and captures your audience's attention.",
  },
  {
    image: "/service-10.png",
    title: "UX/UI Design",
    description:
      "Enhance user experience with intuitive UX/UI designs that resonate with your audience.",
  },
  {
    image: "/service-11.png",
    title: "Email Marketing",
    description:
      "Engage with your customers effectively through personalized and impactful email marketing campaigns.",
  },
  {
    image: "/service-12.png",
    title: "Cloud Services",
    description:
      "Optimize your operations with secure and scalable cloud solutions tailored to your needs.",
  },

  {
    image: "/service-13.png",
    title: "Mobile App Design",
    description:
      "Design user-friendly mobile apps that align with your brand and deliver excellent user experiences.",
  },
  {
    image: "/service-14.png",
    title: "Pay-Per-Click Advertising",
    description:
      "Drive targeted traffic to your website with our expert PPC advertising services.",
  },
  {
    image: "/service-15.png",
    title: "Technical Support",
    description:
      "Ensure uninterrupted operations with reliable and efficient technical support services.",
  },
  {
    image: "/service-16.png",
    title: "Custom Software Development",
    description:
      "Develop bespoke software solutions tailored to your business requirements and goals.",
  },
  {
    image: "/service-17.png",
    title: "Photography Services",
    description:
      "Capture moments and create visual content with our professional photography services.",
  },
  {
    image: "/service-18.png",
    title: "Data Analysis",
    description:
      "Unlock the potential of your data with expert analysis that drives informed decision-making.",
  },

];

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(servicesData.length / 6);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 6) % servicesData.length);
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setIsAnimating(false);
      }, 350); // Half of the animation duration
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) =>
          (prev - 6 + servicesData.length) % servicesData.length
        );
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        setIsAnimating(false);
      }, 350); // Half of the animation duration
    }
  };

  const handleDotClick = (pageIndex: number) => {
    if (!isAnimating && pageIndex !== currentPage) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((pageIndex * 6) % servicesData.length);
        setCurrentPage(pageIndex);
        setIsAnimating(false);
      }, 350); // Half of the animation duration
    }
  };

  return (
    <div className="bg-service-lady">
      <div className="bg-[#FFFFFF] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-[49%] pb-10">
            {servicesData.slice(activeIndex, activeIndex + 2).map((item, idx) => (
              <div
                key={idx}
                className={`${styles.transform} ${isAnimating ? styles['animate-flip'] : ''}`}
              >
                <ServiceCard {...item} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-8">
            {servicesData
              .slice(activeIndex + 2, activeIndex + 6)
              .map((item, idx) => (
                <div
                  key={idx}
                  className={`${styles.transform} ${isAnimating ? styles['animate-flip'] : ''}`}
                >
                  <ServiceCard {...item} />
                </div>
              ))}
          </div>
          <div className="flex justify-center items-center pt-10 gap-6">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                <path d="M22.7524 6.34461H3.1651L6.40981 3.11561C6.77186 2.75527 6.77325 2.16968 6.41291 1.80763C6.05257 1.44553 5.46693 1.44419 5.10488 1.80448L0.272122 6.61393C0.271798 6.61421 0.271567 6.61454 0.271289 6.61481C-0.089836 6.97515 -0.0909921 7.56265 0.271197 7.92419C0.27152 7.92446 0.271752 7.92479 0.272029 7.92506L5.10479 12.7345C5.46679 13.0948 6.05244 13.0935 6.41282 12.7314C6.77316 12.3693 6.77177 11.7837 6.40972 11.4234L3.1651 8.19439H22.7524C23.2632 8.19439 23.6773 7.78032 23.6773 7.2695C23.6773 6.75868 23.2632 6.34461 22.7524 6.34461Z" fill="#2F8EAA"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill={currentPage === index ? "#2F8EAA" : "#D9D9D9"} />
                  </svg>
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                <path d="M1.75195 8.19055L21.3389 8.19055L18.0942 11.4195C17.7322 11.7799 17.7308 12.3655 18.0912 12.7275C18.4515 13.0896 19.0371 13.091 19.3992 12.7307L24.2321 7.92122C24.2324 7.92094 24.2326 7.92062 24.2329 7.92034C24.5939 7.56 24.5953 6.97251 24.2329 6.61097C24.2326 6.61069 24.2324 6.61037 24.2321 6.61009L19.3992 1.80064C19.0371 1.44039 18.4515 1.44164 18.0912 1.80378C17.7308 2.16583 17.7322 2.75143 18.0942 3.11177L21.3389 6.34076L1.75195 6.34076C1.24113 6.34076 0.827051 6.75484 0.827051 7.26566C0.827051 7.77648 1.24113 8.19055 1.75195 8.19055Z" fill="#2F8EAA"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
