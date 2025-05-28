import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Unify capabilities with Dynamics 365",
      paragraph:
        "From integrated workflows to real-time insights, we streamline every part of your operations.",
      buttonText: "Contact With Us",
      buttonLink: "/contact-trescor",
    },

    {
      image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Unify capabilities with Dynamics 365",
      paragraph:
        "From integrated workflows to real-time insights, we streamline every part of your operations.",
      buttonText: "Contact With Us",
       buttonLink: "/contact-trescor",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <section className="relative h-full w-full overflow-hidden select-none">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={slides[currentIndex].image}
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-[#e7e5df] lg:text-start text-center px-4 ">
        <div className="max-w-[1400px] mx-auto w-[100%] mt-16 lg:mt-24 lg:px-6 space-y-4">
          <div

          >
            <p className="uppercase font-medium text-[#e7e5df]">
              Empowering Your Business
            </p>
          </div>
          <div

          >
            <h1 className="md:text-5xl text-4xl font-semibold text-[#e7e5df]">
              {slides[currentIndex].heading}
            </h1>
          </div>
          <div

          >
            <p className="pt-4 lg:text-lg text-[#e7e5df]">
              {slides[currentIndex].paragraph}
            </p>
          </div>
          <div

            className="pt-4"
          >
            <a
              href={slides[currentIndex].buttonLink}
              className="inline-block px-[48px] py-3 border-[1px] bg-[#e7e5df] border-[#e7e5df] text-[#1a1a1a] rounded-full font-medium"
            >
              {slides[currentIndex].buttonText}
            </a>
          </div>
        </div>

        <div

          className="border-t-[2px] xl:block hidden mt-[90px] border-[#ffffff1a] max-w-[1400px] mx-auto w-[100%] pt-4 lg:px-6"
        >
          <div className="grid grid-cols-7 gap-4 mt-8">
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Dynamics 365</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Supply Chain</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>BI Analytics</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Business Targets</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Cost Saving</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Support Service</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Dynamics AX</span>
            </div>
          </div>

          {/* <div className="grid grid-cols-6 gap-4 mt-4 mx-8">
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Find Next Place</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>RMA Credits</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Property Audit</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Track Maintenance</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Landlord Resource</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>RMA Screening</span>
            </div>
          </div> */}
        </div>

        <div

          className="block lg:hidden border-[#ffffff1a] max-w-[1400px] mx-auto w-[100%]"
        >
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Credit Boost</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Rental Listing</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Digital Leases</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-[#ffffff1a] backdrop-blur-md  text-gray-50 font-medium bg-white/20">
              <span>Price Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
