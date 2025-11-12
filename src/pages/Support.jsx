import React, { useState } from "react";
import {
  FaRegMoneyBillAlt,
  FaLock,
  FaCog,
  FaHospitalUser,
  FaChartLine,
  FaBolt,
  FaDatabase,
  FaIndustry,
  FaHeartbeat,
} from "react-icons/fa";
import {
  MdShoppingCart,
  MdOutlineInventory,
  MdPriceChange,
  MdIntegrationInstructions,
  MdPrecisionManufacturing,
} from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import SecNavbar from "./../components/SecNavbar";
import Footer from "./../components/Footer";
import { BiSupport } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import { MdBusiness } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import ScrollToTop from "../components/ScrollToTop";

const SECTORS = [
  {
    id: "financial",
    label: "Financial Services",
    items: [
      {
        icon: FaRegMoneyBillAlt,
        text: "Real-time detection of transaction anomalies to improve fraud prevention and reduce exposure.",
      },
      {
        icon: FaDatabase,
        text: "Automated regulatory reporting and audit trails using Dynamics-driven workflows.",
      },
      {
        icon: FaChartLine,
        text: "AI-backed forecasting to support liquidity planning and risk assessment.",
      },
      {
        icon: FaLock,
        text: "Secure data masking and encryption to keep sensitive financial records compliant.",
      },
    ],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    items: [
      {
        icon: MdPrecisionManufacturing,
        text: "Predictive maintenance using Dynamics telemetry to reduce downtime and costs.",
      },
      {
        icon: FaIndustry,
        text: "Optimized production scheduling with real-time inventory and demand signals.",
      },
      {
        icon: FaCog,
        text: "Quality control analytics for faster defect detection and root-cause analysis.",
      },
      {
        icon: FaDatabase,
        text: "Seamless ERP integration to unify shop-floor and enterprise data.",
      },
    ],
  },
  {
    id: "retail",
    label: "Retail",
    items: [
      {
        icon: MdShoppingCart,
        text: "Personalized omnichannel experiences powered by Dynamics CRM insights.",
      },
      {
        icon: MdOutlineInventory,
        text: "Demand forecasting and inventory optimization to reduce stockouts and overstocks.",
      },
      {
        icon: MdPriceChange,
        text: "Dynamic pricing and promotion orchestration tied to customer behaviour.",
      },
      {
        icon: MdIntegrationInstructions,
        text: "Integrated POS and e-commerce data for single-source truth reporting.",
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    items: [
      {
        icon: FaHospitalUser,
        text: "Secure patient-data workflows with role-based access via Dynamics integrations.",
      },
      {
        icon: FaHeartbeat,
        text: "Care coordination tools that connect scheduling, billing, and EMR data.",
      },
      {
        icon: FaChartLine,
        text: "Analytics for population health, outcomes tracking, and operational efficiency.",
      },
      {
        icon: FaLock,
        text: "Compliance-ready audit trails and data governance for regulated environments.",
      },
    ],
  },
  {
    id: "energy",
    label: "Energy & Utilities",
    items: [
      {
        icon: FaBolt,
        text: "Real-time grid monitoring and asset telemetry integrations with Dynamics.",
      },
      {
        icon: FaChartLine,
        text: "Demand forecasting and load optimization using historical and sensor data.",
      },
      {
        icon: FaCog,
        text: "Automated field service scheduling for faster outage response and repairs.",
      },
      {
        icon: AiOutlineLineChart,
        text: "Sustainability reporting and carbon-tracking dashboards driven by Dynamics data.",
      },
    ],
  },
];

const Support = () => {
  const [active, setActive] = useState(SECTORS[0].id);

  const [openIndex, setOpenIndex] = useState(null);

  const values = [
    {
      icon: <BiSupport className="text-[#0A3161] text-4xl" />,
      title: "Immediate help",
      description:
        "Immediate help ensures timely resolutions, minimizing downtime and enhancing productivity. With instant access to expertise, businesses can swiftly address challenges, maintain operational flow, and focus on achieving their goals without unnecessary delays.",
    },
    {
      icon: <GiAlarmClock className="text-[#0A3161] text-4xl" />,
      title: "Prompt assistance",
      description:
        "Prompt assistance ensures swift resolution of issues, minimizing downtime and enhancing productivity. It fosters trust by addressing challenges efficiently, empowering businesses to stay agile, maintain momentum, and deliver seamless operations in competitive environments.",
    },
    {
      icon: <MdBusiness className="text-[#0A3161] text-4xl" />,
      title: "Accelerated support",
      description:
        "Accelerated Support ensures businesses receive timely assistance to address challenges swiftly. By prioritizing speed and efficiency, it minimizes downtime, resolves issues proactively, and empowers teams to maintain seamless operations and focus on growth.",
    },
  ];

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const values1 = [
    {
      icon: <FaCircleArrowRight />,
      Title: "Getting Started",
      description:
        "Getting started, Begin your journey with simple, clear steps forward",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: <FaUserAlt />,
      Title: "Business Management",
      description:
        "Manage personal information, security & specific configurations.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: <FaHandPaper />,
      Title: "Trust & Safety",
      description:
        "Ensures platform integrity & compliance against harmful activities.",
      color: "text-yellow-500", // Red color for this icon
    },
    {
      icon: <IoSettings />,
      Title: "Spam Free Support",
      description:
        "Spam Free, Ensuring clean, secure, & reliable digital communication.",
      color: "text-teal-500", // Yellow color for this icon
    },
    {
      icon: <IoIosCheckmarkCircle />,
      Title: "Services Advice",
      description:
        "Deliver reliable, customer-focused solutions with innovation.",
      color: "text-pink-500", // Purple color for this icon
    },
    {
      icon: <GrPersonalComputer />,
      Title: "Where to Find Us",
      description:
        "Discover our location with an interactive map offering geographic insights & navigation guidance.",
      color: "text-violet-500", // Pink color for this icon
    },
  ];

  return (
    <>
      <SecNavbar />
      <ScrollToTop />

      <div className="lg:pt-24 pt-20">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-4">
              <div className="p-4">
                <div class="block py-4 lg:py-6">
                  <div class="flex items-center relative rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] overflow-hidden h-fit min-h-[550px] pl-[1rem] md:pl-[3rem] lg:pl-[4rem] py-[4rem] md:pt-[3rem] md:pb-[5rem] lg:pt-[4rem] lg:pb-[6rem]">
                    <div
                      className="absolute inset-0 h-full w-full bg-cover
                    bg-center"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0)), url("https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg")',
                      }}
                    ></div>
                    <div class="relative z-10 h-full flex flex-col text-[#F4F2F2] gap-[16px] md:w-[90%] lgspace-y-4">
                      <h1 class="text-[26px] md:text-[28px] lg:text-[40px] font-semibold">
                        Microsoft Dynamics Data Strategy and Consulting
                      </h1>
                      <p class="text-[15px] md:text-[18px] leading-relaxed md:max-w-[65%] whitespace-break-spaces">
                        Unlock the full potential of your Microsoft Dynamics
                        data with expert consulting, seamless integration, and
                        decisions.
                      </p>

                      <button className="w-fit md:mt-4 px-[28px] py-[12px] rounded-[10px] text-[14px] font-semibold bg-[#0A3161] text-white shadow-lg hover:bg-[#00A3EE] transition-colors duration-300 cursor-pointer">
                        Connect with Us
                      </button>
                    </div>
                    <div class="absolute bottom-2 left-[2px] z-20 text-sm   font-medium">
                      <p class="text-xl font-semibold">
                        Support /{" "}
                        <span className="text-[#00A3EE]">
                          Support System We Offer
                        </span>
                      </p>
                    </div>
                    <div class="absolute bottom-0 left-0 w-full leading-none z-0">
                      <svg
                        width="447"
                        height="72"
                        viewBox="0 0 447 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 72H447C438.605 72 430.818 67.6089 426.462 60.4175L411.463 35.6595C407.107 28.4681 399.32 24.077 390.925 24.077H24.0265C10.757 24.077 0 13.2973 0 0V72Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 1 */}
      <div className="md:pt-16 pt-4">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-6 mx-auto">
              <div className="p-4">
                <div className="flex flex-col space-y-6">
                  {/* Heading */}
                  <div className="flex flex-col items-center pb-3">
                    <div className="text-center mt-4 relative">
                      <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                        Uncover Your Business Scope{" "}
                        <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                          With Us
                        </span>
                      </h3>
                      {/* Animated Accent */}
                      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 block w-32 h-2 bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] rounded-full animate-pulse opacity-80"></span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-lg text-gray-600 text-center">
                      Trescor specializes in Dynamics implementations, offering
                      expertise in customization, business intelligence,
                      analytics, and seamless integration, ensuring tailored
                      solutions for diverse business needs.
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
                            {/* Gradient Border Accent (optional, adjust or remove) */}
                            <span className="absolute -top-2 -left-2 w-16 h-16 rounded-full"></span>

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

        {/* Optional: Microsoft Dynamics / Banner Section can go here */}
      </div>

      {/* section 2 */}

      <div className="lg:pt-20 lg:pb-16 pt-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-8 items-center">
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
                          className="relative flex h-[50px] md:w-60 w-3/4 items-center bg-white border-[#0A3161] text-[#0A3161] justify-center overflow-hidden border transition-all before:absolute before:h-0 before:w-0 before:bg-[#B31942] hover:text-white hover:border-[#B31942] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-full rounded text-lg"
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

      <div className="lg:pt-20 lg:pb-16 pt-12 select-none">
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
                        ensuring seamless implementations, optimized workflows,
                        and innovative strategies. Trust us to enhance your
                        business processes with cutting-edge insights and proven
                        results.
                      </p>

                      <div className="flex lg:justify-start justify-center">
                        <a
                          href="/contact-trescor"
                          className="relative flex h-[50px] md:w-60 w-3/4 items-center bg-white border-[#0A3161] text-[#0A3161] justify-center overflow-hidden border transition-all before:absolute before:h-0 before:w-0 before:bg-[#B31942] hover:text-white hover:border-[#B31942] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-full rounded text-lg"
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

      <div className="md:pt-16 pt-4">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-6 mx-auto">
              <div className="p-4">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 w-full min-h-[500px] px-[1rem] md:px-[3rem] lg:px-[4rem] py-[3rem] flex flex-col gap-[30px] lg:gap-[36px]">
                  {/* Heading */}
                  <div className="flex flex-col">
                    <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#0A3161]">
                      Comprehensive Microsoft Solutions for <br />
                      <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                        Every Sector
                      </span>
                    </h3>
                  </div>

                  {/* Tabs */}
                  <div
                    dir="ltr"
                    className="w-full flex flex-col gap-[140px] tabs-custom-gap md:gap-[120px] lg:gap-[48px]"
                  >
                    {/* Desktop Tabs */}
                    <div
                      role="tablist"
                      aria-orientation="horizontal"
                      className="h-9 items-center justify-center rounded-lg p-[3px] hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-y-4 lg:gap-y-0"
                    >
                      {SECTORS.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setActive(s.id)}
                          className={`h-[calc(100%-1px)] flex-1 items-center gap-1.5 px-2 py-1 whitespace-nowrap cursor-pointer
                          font-semibold flex justify-start lg:justify-center w-full text-[16px] md:text-[20px]
                          border-[2px] rounded-none border-[#C6C6C6] border-b-[#DEDADA] text-[#696969]
                          ${
                            active === s.id
                              ? "border-b-[#0072DE] text-black"
                              : ""
                          } border-t-0 border-r-0 border-l-0`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>

                    {/* Mobile Tabs */}
                    <div className="md:hidden flex justify-start gap-2 flex-wrap w-fit gap-y-4">
                      {SECTORS.map((s) => (
                        <button
                          key={s.id + "-mobile"}
                          onClick={() => setActive(s.id)}
                          className={`items-center gap-1.5 flex-0 inline-flex font-semibold w-fit justify-center
                          text-[16px] bg-white text-black border-[1px] border-[#C6C6C6]
                          px-[16px] py-[16px] rounded-[30px]
                          ${
                            active === s.id
                              ? "border-[#3BA4FF] bg-[#C5E6FF]"
                              : ""
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 outline-none w-full">
                      <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-[36px] lg:gap-x-[56px] gap-y-[30px] md:gap-y-[50px]">
                        {SECTORS.find((s) => s.id === active).items.map(
                          (item, idx) => {
                            const Icon = item.icon;
                            return (
                              <div
                                key={idx}
                                className="w-full gap-[16px] flex flex-col"
                              >
                                <Icon className="text-[#0A3161] lg:text-3xl text-2xl" />
                                <p className="text-[16px] text-gray-600 leading-[1.2em]">
                                  {item.text}
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Support;
