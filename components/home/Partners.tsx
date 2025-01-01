"use client";

import React, { useState, useRef, useEffect } from "react";

const Partners = () => {
  const partners = [
    { name: "Plesk", logo: "/partners/plesk.png" },
    { name: "SmarterMail", logo: "/partners/smarter-mail.png" },
    { name: "CloudLinux", logo: "/partners/cloudlinux.png" },
    { name: "Facebook", logo: "/partners/facebook.png" },
    { name: "AWS", logo: "/partners/AWS.png" },
    { name: "Virtualizor", logo: "/partners/virtualizor.png" },
  ];

  const imagesContainerRef = useRef(null); // Reference for the image container
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragTimeout, setDragTimeout] = useState(null);

  // Default scroll speed animation keyframe (CSS)
  const autoScrollSpeed = 20; // Default scroll speed for auto-scrolling (in seconds)
  const accelerationFactor = 3; // How much faster the scroll should go when dragging

  // Handle mouse down event to start dragging
  const onMouseDown = (e) => {
    e.preventDefault(); // Prevent default behavior like text selection
    setIsDragging(true);
    setStartPosition(e.clientX); // Get initial mouse position
    setScrollLeft(imagesContainerRef.current.scrollLeft); // Get current scroll position
    if (dragTimeout) {
      clearTimeout(dragTimeout); // Clear the timeout that resumes auto-scrolling
    }
  };

  // Handle mouse move event to scroll the images faster
  const onMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientX - startPosition; // Calculate distance moved by mouse
    imagesContainerRef.current.scrollLeft = scrollLeft - distance * accelerationFactor; // Adjust scroll position
  };

  // Handle mouse up event to stop dragging and resume auto-scrolling
  const onMouseUp = () => {
    setIsDragging(false);
    const timeout = setTimeout(() => {
      setDragTimeout(null); // Allow auto-scrolling to resume after drag ends
    }, 1000); // Delay for a smooth return to normal speed
    setDragTimeout(timeout);
  };

  // Prevent text selection while dragging
  const onMouseLeave = () => {
    setIsDragging(false);
  };

  // UseEffect to manage auto-scrolling behavior (handling animation reset)
  useEffect(() => {
    if (isDragging) {
      // Disable auto-scrolling animation when dragging
      imagesContainerRef.current.style.animation = "none";
    } else {
      // Resume auto-scrolling with default speed after the timeout
      imagesContainerRef.current.style.animation = `scroll-left ${autoScrollSpeed}s linear infinite`;
    }
  }, [isDragging]);

  return (
    <div className=" sm:py-12  lg:mt-[-7.25rem] z-[100]">
      <div className="max-w-screen-xl mx-auto px-4 rounded-full z-[100]">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 border-r bg-[#DEF4FE] rounded-full pl-4 z-[100]">
          <h3 className="text-lg font-medium text-gray-600">Trusted&nbsp;By:</h3>
          <div className="bg-white rounded-l-none rounded-full shadow-lg p-4 sm:p-6 lg:p-8 w-full overflow-hidden">
            <div
              className="flex"
              ref={imagesContainerRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              style={{ cursor: "grab" }} // Change cursor to indicate draggable area
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="transition-all select-none" // Make the images unselectable
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
