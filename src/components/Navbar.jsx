import { FaFacebook, FaThreads } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaMoneyCheck } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { MdSupport } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { FaIntercom } from "react-icons/fa6";
import Logo from "../assets/Logo.png";
import {
  FaCogs,
  FaChartBar,
  FaTools,
  FaMoneyCheckAlt,
  FaIndustry,
  FaLaptopCode,
  FaUniversity,
  FaPuzzlePiece,
  FaLightbulb,
  FaQuestionCircle,
  FaLock,
  FaLifeRing,
} from "react-icons/fa";

import { FaChartPie, FaUserTie } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown));
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white py-6" : "bg-transparent py-6"
      }`}
    >
      <div
        className={`max-w-[1400px] mx-auto flex justify-between items-center px-6  ${
          isScrolled ? "lg:py-0" : "lg:py-0"
        }`}
      >
        <a href="/" className="flex items-center flex-row">
          <img src={Logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12" />

          <span
            className={`text-2xl transition-all duration-300 ease-in-out ${
              isScrolled ? "font-bold text-[#F14F21]" : "text-white font-bold"
            }`}
          >
            Trescor
          </span>
        </a>

        <ul className="hidden lg:flex flex-grow justify-center space-x-8 items-center">
          <Tabs />
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="/contact-trescor"
            className={`border-[1px] relative lg:px-6 md:px-4 py-2 rounded-full text-sm  transition duration-500 ${
              isScrolled
                ? "border-[#0A3161] hover:border-none text-[#0A3161] font-medium overflow-hidden transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-auto before:w-0 before:bg-[#00A3EE] before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 "
                : "border-navGray font-light text-white"
            }`}
          >
            <span className="relative z-10">Contact Us</span>
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose
                className={`w-5 h-5 ${
                  isScrolled ? "text-[#0A3161]" : "text-white"
                }`}
              />
            ) : (
              <RiMenu3Fill
                className={`w-5 h-5 ${
                  isScrolled ? "text-[#0A3161]" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        <div
          className={
            !isMobileMenuOpen
              ? "lg:hidden fixed left-[-100%] h-[100%] ease-in-out duration-1000 "
              : "lg:hidden fixed left-0 top-0 w-[100%] h-[100%] bg-white ease-in-out duration-1000 rounded-b-lg z-10 shadow-sm-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <a href="/" className="flex items-center  flex-row ml-4 pt-4 ">
            {/* <img src={HomeImg} alt="logo" className="md:w-8 md:h-8 h-6 w-6 " /> */}
            <span className="text-2xl text-[#F14F21] ml-1 mt-[2px] transition-all duration-300 ease-in-out font-bold">
              Trescor
            </span>
          </a>

          <ul className="p-4 mt-4">
            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("home")}
                className="flex items-center justify-between cursor-pointer text-[#0a3161] font-medium"
              >
                Our Services
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "home"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "home" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center hover:bg-[#d9d9d9] transition-colors">
                      <FaCogs className="text-[#0a3161]" />
                      <a
                        href="/services-microsoft-dynamics-365-finance"
                        className="block text-sm text-gray-700"
                      >
                        Dynamic F & O
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center hover:bg-[#d9d9d9] transition-colors">
                      <FaChartBar className="text-[#0a3161]" />
                      <a
                        href="/bi-analytics-services"
                        className="block text-sm text-gray-700"
                      >
                        BI Analytics
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center hover:bg-[#d9d9d9] transition-colors">
                      <FaTools className="text-[#0a3161]" />
                      <a
                        href="/services-microsoft-dynamics-365-finance"
                        className="block text-sm text-gray-700"
                      >
                        Support & Managed
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("services")}
                className="flex items-center justify-between cursor-pointer text-[#0a3161] font-medium"
              >
                Industries we serve
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "services"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "services" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaMoneyCheckAlt className="text-[#0a3161]" />
                      <a
                        href="/industries"
                        className="block text-sm text-gray-700"
                      >
                        Financial
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaIndustry className="text-[#0a3161]" />
                      <a
                        href="/industries/manufacturing"
                        className="block text-sm text-gray-700"
                      >
                        Manufacturing
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLaptopCode className="text-[#0a3161]" />
                      <a
                        href="/industries"
                        className="block text-sm text-gray-700"
                      >
                        Software
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaUniversity className="text-[#0a3161]" />
                      <a
                        href="/industries"
                        className="block text-sm text-gray-700"
                      >
                        Public Sector
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("products")}
                className="flex items-center justify-between cursor-pointer text-[#0a3161] font-medium"
              >
                Our Solutions
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "products"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "products" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaPuzzlePiece className="text-[#0a3161]" />
                      <a href="/" className="block text-sm text-gray-700">
                        Integration Consulting
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLightbulb className="text-[#0a3161]" />
                      <a href="/" className="block text-sm text-gray-700">
                        Business Needs
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("technologies")}
                className="flex items-center justify-between cursor-pointer text-[#0a3161] font-medium"
              >
                About Trescor
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "technologies"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "technologies" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaQuestionCircle className="text-[#0a3161]" />
                      <a
                        href="/about-trescor"
                        className="block text-sm text-gray-700"
                      >
                        Why Trescor
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaHandshake className="text-[#0a3161]" />
                      <a
                        href="/collaborate-with-us"
                        className="block text-sm text-gray-700"
                      >
                        Collaborate with us
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLock className="text-[#0a3161]" />
                      <a
                        href="/privacy-policy"
                        className="block text-sm text-gray-700"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("mobile-app")}
                className="flex items-center justify-between cursor-pointer text-[#0a3161] font-medium"
              >
                Need Support
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "mobile-app"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "mobile-app" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLifeRing className="text-[#0a3161]" />
                      <a
                        href="/contact-trescor"
                        className="block text-sm text-gray-700"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLifeRing className="text-[#0a3161]" />
                      <a
                        href="/dynamics-365-support-services"
                        className="block text-sm text-gray-700"
                      >
                        Find with us
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 mt-10 w-[100%] flex justify-center items-center">
              <a
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="border-[1px] relative py-[10px] bg-trumpOne text-white rounded-full border-[#0a3161] text-sm bg-[#0a3161]  flex justify-center items-center font-semibold overflow-hidden text-center w-[100%]"
              >
                <span className="relative z-10">Close</span>
              </a>
            </li>
          </ul>

          <div className="px-4">
            <h5 className="p-4 text-xl text-center text-[#0a3161] font-semibold">
              Follow us on
            </h5>
            <div className="p-4">
              <div className="grid grid-cols-5 ">
                <div className="flex justify-center items-center">
                  <a href="https://www.linkedin.com/in/trescor-software-solutions-546012369/">
                    <FaLinkedinIn className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out " />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href="https://x.com/Trescor1226">
                    <FaXTwitter className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href="https://www.instagram.com/trescorsoftware/">
                    {" "}
                    <FaInstagram className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href="https://www.facebook.com/profile.php?id=61576887840484">
                    {" "}
                    <FaFacebook className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>

                <div className="flex justify-center items-center">
                  <a href="https://www.threads.com/@trescorsoftware">
                    {" "}
                    <FaThreads className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full md:text-sm lg:text-base px-3 py-1.5 transition-colors  ${
        isScrolled ? "text-[#0A3161]" : "text-white"
      }  ${selected === tab ? "text-[#0A3161]" : "text-[#0A3161]"}`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-1/2 top-[calc(100%_+_1px)] w-[1400px] max-w-[90vw] -translate-x-1/2 bg-white rounded-lg shadow overflow-hidden"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden " key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-white"
    />
  );
};

const Blog = () => {
  return (
    <div className="flex min-h-[300px]">
      {/* Left Section - 30% */}
      <div className="w-[30%] bg-gradient-to-br from-[#F14F21] to-[#00A3EE] p-6 rounded-l-lg flex flex-col justify-center">
        <div className="text-white">
          <FaCogs className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Our Services</h3>
          <p className="opacity-90 text-lg">
            Comprehensive Microsoft Dynamics 365 and business solutions
          </p>
        </div>
      </div>

      {/* Right Section - 70% */}
      <div className="w-[70%] p-6 bg-white rounded-r-lg">
        <div className="grid grid-cols-2 gap-4">
          <a
            href="/services-microsoft-dynamics-365-finance"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaMoneyCheck className="w-8 h-8 text-[#F14F21] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#F14F21]">
                Dynamics 365 Finance & Operations
              </h4>
            </div>
            <p className=" text-gray-600">
              Complete ERP solution for financial management and operations
            </p>
          </a>

          <a
            href="/bi-analytics-services"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <VscGraph className="w-8 h-8 text-[#00A3EE] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#00A3EE]">
                Business Intelligence & Analytics
              </h4>
            </div>
            <p className=" text-gray-600">
              Transform data into actionable insights with advanced analytics
            </p>
          </a>

          <a
            href="/services-dynamics-365-implementation"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaTools className="w-8 h-8 text-[#F14F21] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#7EB900]">
                Implementation & Deployment
              </h4>
            </div>
            <p className=" text-gray-600">
              Expert implementation of Dynamics 365 solutions for your business
            </p>
          </a>

          <a
            href="/services-support-managed-services"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <MdOutlineSupportAgent className="w-8 h-8 text-[#00A3EE] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#FEB800]">
                Support & Managed Services
              </h4>
            </div>
            <p className=" text-gray-600">
              Ongoing support and maintenance for your Dynamics 365 environment
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

const Homebar = () => {
  return (
    <div className="flex min-h-[300px]">
      {/* Left Section - 30% */}
      <div className="w-[30%] bg-gradient-to-br from-[#7EB900] to-[#FEB800] p-6 rounded-l-lg flex flex-col justify-center">
        <div className="text-white">
          <FaIntercom className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Solutions</h3>
          <p className="opacity-90 text-lg">
            Comprehensive business solutions tailored to your needs
          </p>
        </div>
      </div>

      {/* Right Section - 70% */}
      <div className="w-[70%] p-6 bg-white rounded-r-lg">
        <div className="grid grid-cols-2 gap-4">
          {/* 1. Microsoft Dynamics CRM for Asset Management */}

          <a
            href="/solutions/microsoft-fabric"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <GiFactory className="w-8 h-8 text-[#7EB900] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#7EB900]">
                Microsoft Dynamics 365 Fabric Solutions
              </h4>
            </div>
            <p className="text-gray-600">
              Streamline production, supply chain, and fabric operations
              effortlessly.
            </p>
          </a>

          <a
            href="/solutions/microsoft-dynamics-365-for-finance"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaUniversity className="w-8 h-8 text-[#FEB800] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#FEB800]">
                Microsoft Dynamics 365 for Banking and Finance
              </h4>
            </div>
            <p className="text-gray-600">
              Modernize financial operations with automation and advanced
              analytics.
            </p>
          </a>
          <a
            href="/"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaChartPie className="w-8 h-8 text-[#7EB900] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#7EB900]">
                Microsoft Dynamics CRM for Asset Management
              </h4>
            </div>
            <p className="text-gray-600">
              Manage assets, monitor performance, and improve operational
              visibility.
            </p>
          </a>

          {/* 2. Microsoft Dynamics 365 for Banking and Finance */}

          {/* 3. Microsoft Dynamics 365 Fabric Solutions */}

          {/* 4. Microsoft Dynamics 365 Professional Solutions */}
          <a
            href="/"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaUserTie className="w-8 h-8 text-[#FEB800] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#FEB800]">
                Microsoft Dynamics 365 Professional Solutions
              </h4>
            </div>
            <p className="text-gray-600">
              End-to-end solutions tailored for consulting and professional
              services.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="flex min-h-[300px]">
      {/* Left Section - 30% */}
      <div className="w-[30%] bg-gradient-to-br from-[#00A3EE] to-[#7EB900] p-6 rounded-l-lg flex flex-col justify-center">
        <div className="text-white">
          <MdFactory className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Industries We Serve</h3>
          <p className="opacity-90 text-lg">
            Tailored solutions across diverse industry sectors
          </p>
        </div>
      </div>

      {/* Right Section - 70% */}
      <div className="w-[70%] p-6 bg-white rounded-r-lg">
        <div className="grid grid-cols-2 gap-4">
          <a
            href="/industries/manufacturing"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <MdFactory className="w-6 h-6 text-[#7EB900] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#7EB900]">
                Manufacturing
              </h4>
            </div>
            <p className=" text-gray-600">
              Streamlined production and supply chain optimization
            </p>
          </a>
          <a
            href="/industries"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaSackDollar className="w-8 h-8 text-[#00A3EE] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#00A3EE]">
                Financial Services
              </h4>
            </div>
            <p className=" text-gray-600">
              Comprehensive financial solutions and compliance management
            </p>
          </a>

          <a
            href="/industries"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaLaptop className="w-8 h-8 text-[#00A3EE] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#00A3EE]">
                Technology & Software
              </h4>
            </div>
            <p className=" text-gray-600">
              Digital transformation and software development solutions
            </p>
          </a>

          <a
            href="/industries"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaUsers className="w-8 h-8 text-[#7EB900] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#7EB900]">
                Public Sector
              </h4>
            </div>
            <p className=" text-gray-600">
              Government and public administration solutions
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

const SupportBar = () => {
  return (
    <div className="flex min-h-[300px]">
      {/* Left Section - 30% */}
      <div className="w-[30%] bg-gradient-to-br from-[#FEB800] to-[#F14F21] p-6 rounded-l-lg flex flex-col justify-center">
        <div className="text-white">
          <MdSupport className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Need Support</h3>
          <p className="opacity-90 text-lg">
            Get the help and assistance you need from our team
          </p>
        </div>
      </div>

      {/* Right Section - 70% */}
      <div className="w-[70%] p-6 bg-white rounded-r-lg">
        <div className="grid grid-cols-2 gap-4">
          <a
            href="/dynamics-365-support-services"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <MdSupport className="w-8 h-8 text-[#FEB800] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#F14F21]">
                Where to find us
              </h4>
            </div>
            <p className=" text-gray-600">
              We are here to assist you with all your technical needs
            </p>
          </a>

          <a
            href="/contact-trescor"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaLifeRing className="w-8 h-8 text-[#F14F21] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#00A3EE]">
                Contact Support
              </h4>
            </div>
            <p className=" text-gray-600">
              Get in touch with our support team for immediate assistance
            </p>
          </a>

          <a
            href="/documentation"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaQuestionCircle className="w-8 h-8 text-[#FEB800] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#7EB900]">
                Documentation
              </h4>
            </div>
            <p className=" text-gray-600">
              Access comprehensive guides and documentation
            </p>
          </a>

          <a
            href="/faq"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaLightbulb className="w-8 h-8 text-[#F14F21] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#FEB800]">
                FAQ
              </h4>
            </div>
            <p className=" text-gray-600">
              Find answers to frequently asked questions
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

const AboutBar = () => {
  return (
    <div className="flex min-h-[300px]">
      {/* Left Section - 30% */}
      <div className="w-[30%] bg-gradient-to-br from-[#7EB900] to-[#00A3EE] p-6 rounded-l-lg flex flex-col justify-center">
        <div className="text-white">
          <GrCloudSoftware className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">About Trescor</h3>
          <p className="opacity-90 text-lg">
            Learn more about our company, mission, and values
          </p>
        </div>
      </div>

      {/* Right Section - 70% */}
      <div className="w-[70%] p-6 bg-white rounded-r-lg">
        <div className="grid grid-cols-2 gap-4">
          <a
            href="/about-trescor"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <GrCloudSoftware className="w-8 h-8 text-[#7EB900] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#7EB900]">
                Why Trescor?
              </h4>
            </div>
            <p className=" text-gray-600">
              Discover what makes us the right choice for your business
            </p>
          </a>

          <a
            href="/collaborate-with-us"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaHandshake className="w-8 h-8 text-[#00A3EE] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#F14F21]">
                Collaborate with us
              </h4>
            </div>
            <p className=" text-gray-600">
              Partner with us to build innovative solutions together
            </p>
          </a>

          <a
            href="/privacy-policy"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <MdPrivacyTip className="w-8 h-8 text-[#7EB900] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#00A3EE]">
                Privacy Policy
              </h4>
            </div>
            <p className=" text-gray-600">
              Understanding how we protect and handle your data
            </p>
          </a>

          <a
            href="/careers"
            className="flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center mb-2">
              <FaUsers className="w-8 h-8 text-[#00A3EE] mr-3" />
              <h4 className="font-bold text-lg text-[#0A3161] group-hover:text-[#FEB800]">
                Join Our Team
              </h4>
            </div>
            <p className=" text-gray-600">
              Explore career opportunities and grow with us
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "Services",
    Component: Blog,
  },
  {
    title: "Industries",
    Component: ContactBar,
  },
  { title: "Solutions", Component: Homebar },

  {
    title: "About Us",
    Component: AboutBar,
  },
  {
    title: "Support",
    Component: SupportBar,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
