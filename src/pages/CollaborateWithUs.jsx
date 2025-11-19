import React from "react";
import { FaHandshake } from "react-icons/fa";
import Footer from "../components/Footer.jsx";
import SecNavbar from "../components/SecNavbar.jsx";
import { MdAutoGraph } from "react-icons/md";
import { BiSolidNavigation } from "react-icons/bi";
import { FaInbox } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { RiEmotionHappyFill } from "react-icons/ri";
// import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ContactOne from "../components/ContactOne.jsx";

const CollaborateWithUs = () => {
  const values1 = [
    {
      icon: <FaHandshake />,
      Title: "Best in class partner experience",
      description:
        "We have a value-driven partnerships philosophy which relies on trust & collaboration, a joint focus on our customers backed up by ownership and accountability, and constant learning and growth.",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: <FaInbox />,
      Title: "Diverse product and ecosystem",
      description:
        "We are leaders in the emerging Headless CMS category, MACH Alliance Certified and we have a strong ecosystem and marketplace of native integrations.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: <BiSolidNavigation />,
      Title: "Revenue potential",
      description:
        "We offer diverse opportunities for growth and revenue - our partners can benefit from cost efficiencies and 10% revenue share, active demand generation.",
      color: "text-yellow-400", // Red color for this icon
    },
    {
      icon: <FaMessage />,
      Title: "Perks",
      description:
        "As a token of our appreciation for our partnership, you will receive practical or limited edition Hygraph swag, invitations to workshops, conferences & events, as well as a lifetime license for company website.",
      color: "text-teal-500", // Yellow color for this icon
    },
    {
      icon: <MdAutoGraph />,
      Title: "Collaboration",
      description:
        "We develop mutual business plans with our partners, focusing on co-marketing, ensuring both parties align goals, resources effectively. We track progress in joint quarterly reviews.",
      color: "text-pink-500", // Purple color for this icon
    },
    {
      icon: <RiEmotionHappyFill />,
      Title: "Enablement and support",
      description:
        "Our partners have priority admittance to technical & commercial trainings, they gain insider access to new product features, and they benefit from community support for swift issue resolution.",
      color: "text-violet-500", // Pink color for this icon
    },
  ];

  return (
    <>
      <SecNavbar />
      <div>
        {/* Section 1 */}

        <div className="lg:pt-28 pt-24">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] pb-6 mx-auto">
                <div className="p-4">
                  <div className="flex flex-col space-y-6">
                    {/* Heading */}
                    <div className="flex flex-col items-center pb-3">
                      <div className="text-center mt-4 relative">
                        <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                          Why collaborate with{" "}
                          <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                            Trescor?
                          </span>
                        </h3>
                        {/* Animated Accent */}
                        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 block w-32 h-2 bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] rounded-full animate-pulse opacity-80"></span>
                      </div>
                    </div>
                    {/* Description */}
                    <div>
                      <p className="text-lg text-gray-600 text-center">
                        Collaborating with us unlocks an opportunity to elevate
                        your offerings and maximize growth opportunities
                        together.
                      </p>
                    </div>
                    {/* Cards Grid */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-8 max-w-full">
                      {values1.map((value, index) => (
                        <div
                          key={index}
                          className="flex lg:justify-start justify-center"
                        >
                          <div className="w-full">
                            <div className="glass-card group transition-all duration-300 shadow-xl rounded-2xl p-7 border border-transparent bg-white/60 backdrop-blur-lg hover:bg-white/80 hover:border-[#00A3EE] hover:scale-[1.03] relative">
                              {/* Gradient Border Accent */}
                              <span className="absolute -top-2 -left-2 w-16 h-16 rounded-full "></span>
                              <div
                                className={`lg:text-4xl text-3xl flex lg:justify-start justify-center lg:items-start items-center ${value.color} drop-shadow-md mb-2`}
                              >
                                {value.icon}
                              </div>
                              <div className="flex lg:justify-start justify-center md:items-start items-center">
                                <h1 className="lg:text-2xl text-xl font-bold lg:text-start text-center text-[#0A3161]">
                                  {value.Title}
                                </h1>
                              </div>
                              <div className="flex text-gray-600 lg:justify-start justify-center lg:items-start items-center pt-2">
                                <p className="lg:text-start text-center">
                                  {value.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI-Driven DataOps Banner Section */}
        </div>

        <div className="lg:pt-2">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] pb-12 mx-auto">
                <div className="p-4">
                  <div className="md:flex md:h-[363px] mt-8">
                    <div
                      className="px-[1rem] md:px-[3rem] lg:px-[4rem] py-[3rem] w-[100%] lg:w-[70%] h-full flex"
                      style={{
                        backgroundImage:
                          "url(https://ctwebsite2025.blob.core.windows.net/media/celebalwebsite2025/assets_webp/common/images/footer_left.webp)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="flex flex-col justify-center text-[#FFFFFF] gap-[20px] w-full">
                        <div className="flex flex-col gap-[8px]">
                          <p className="text-[24px] md:text-[28px] lg:text-[32px] font-bold whitespace-break-spaces">
                            Empower Your Business with Expert MS Dynamics
                            Support!
                          </p>
                          <h4 className=" w-auto md:max-w-[80%] whitespace-break-spaces">
                            Maximize productivity, streamline operations, and
                            ensure seamless performance with our dedicated
                            Microsoft Dynamics 365 support.
                          </h4>
                        </div>
                        <div>
                          <h4 className="text-[20px] md:text-[16px] lg:text-[20px] font-medium font-jakarta"></h4>
                        </div>
                        <a
                          href="/contact-trescor"
                          className="w-fit px-[28px] py-[12px] rounded-full text-[14px] font-[500] bg-white text-black cursor-pointer"
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                    <div className="hidden lg:block w-[100%] md:w-0 lg:w-[30%] h-[100%]">
                      <img
                        src="https://ctwebsite2025.blob.core.windows.net/media/celebalwebsite2025/assets_webp/common/images/footer_right.webp"
                        className="object-cover h-[100%] w-full rounded-r-xl"
                        alt="AI DataOps Banner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}

        <div className="pt-8 pb-8">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] ">
                <div className="p-4">
                  <div className="grid lg:grid-cols-2 grid-cols-1s gap-8 items-center">
                    {/* Left: Text Card */}
                    <div className="flex flex-col w-full lg:justify-start justify-center">
                      <div className="glass-card group transition-all duration-300 py-8 border border-transparent bg-white/60 backdrop-blur-lg relative">
                        {/* Gradient Accent */}
                        <h1 className="uppercase font-bold text-[#B31942] tracking-wide mb-4">
                          Building a better future
                        </h1>

                        <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161] mb-4">
                          Collaborate with Trescor for Seamless{" "}
                          <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                            Synergy
                          </span>
                        </h3>
                        <p className="text-lg text-gray-600 lg:text-start text-center mb-8">
                          With extensive experience in Dynamics 365 Finance &
                          Operations, we bring unparalleled expertise to every
                          project. Our deep understanding of these platforms
                          enables us to deliver tailored solutions that optimize
                          business processes, enhance financial management, and
                          drive operational efficiency.
                        </p>
                        <div className="flex lg:justify-start justify-center">
                          <a
                            href="/contact-trescor"
                            className="relative flex h-[50px] md:w-60 w-3/4 items-center bg-white border-[#0A3161] text-[#0A3161] justify-center overflow-hidden border transition-all before:absolute before:h-0 before:w-0 before:bg-[#B31942] hover:text-white hover:border-[#B31942] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-full rounded-full text-lg"
                          >
                            <span className="relative z-10">Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Right: Image */}
                    <div className="flex flex-col w-full">
                      <div className="flex justify-center md:justify-start w-full h-full">
                        <img
                          src="https://global.hitachi-solutions.com/wp-content/uploads/2025/10/Hero-2025-V2.webp"
                          className="rounded-xl w-full max-w-[550px] h-auto object-contain z-10 mx-auto"
                          alt="benefits_one"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}

        <div className="pt-8 pb-8">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px]">
                <div className="p-4">
                  <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-8 items-center">
                    {/* Left: Image */}
                    <div className="flex flex-col w-full">
                      <div className="flex justify-center md:justify-start w-full h-full">
                        <img
                          src="https://global.hitachi-solutions.com/wp-content/uploads/2023/12/CloudPlatform_Hero-Graphic.webp"
                          className="rounded-xl w-full max-w-[550px] h-auto object-contain z-10 mx-auto"
                          alt="benefits_two"
                        />
                      </div>
                    </div>

                    {/* Right: Text Card */}
                    <div className="flex flex-col w-full lg:justify-start justify-center">
                      <div className="glass-card group transition-all duration-300 py-8 border border-transparent bg-white/60 backdrop-blur-lg relative">
                        {/* Gradient Accent */}
                        <h1 className="uppercase font-bold text-[#B31942] tracking-wide mb-4">
                          Collaborate with us for success
                        </h1>

                        <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161] mb-4">
                          Certified Professionals Delivering Unmatched{" "}
                          <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                            Solutions
                          </span>
                        </h3>

                        <p className="text-lg text-gray-600 lg:text-start text-center mb-8">
                          Our expert team specializes in Dynamics 365 Finance &
                          Operations, bringing unmatched expertise to streamline
                          financial management and operational efficiency.
                          Certified professionals deliver tailored solutions,
                          ensuring seamless implementations, optimized
                          workflows, and innovative strategies. Trust us to
                          enhance your business processes with cutting-edge
                          insights and proven results.
                        </p>

                        <div className="flex lg:justify-start justify-center">
                          <a
                            href="/contact-trescor"
                            className="relative flex h-[50px] md:w-60 w-3/4 items-center bg-white border-[#0A3161] text-[#0A3161] justify-center overflow-hidden border transition-all before:absolute before:h-0 before:w-0 before:bg-[#B31942] hover:text-white hover:border-[#B31942] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-full rounded-full text-lg"
                          >
                            <span className="relative z-10">Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Right */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 4 */}

        <ContactOne />
      </div>

      <Footer />
    </>
  );
};

export default CollaborateWithUs;
