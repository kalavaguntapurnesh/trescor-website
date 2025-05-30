import { FaThreads } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaXTwitter,
} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
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
  FaLifeRing
} from 'react-icons/fa';

const SecNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
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

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown));
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out select-none ${isScrolled ? "bg-white shadow-sm-md py-6" : "bg-white py-6"
        }`}
    >
      <div
        className={`lg:rounded-full max-w-[1400px] mx-auto flex justify-between items-center px-6 lg:bg-navColor ${isScrolled ? "lg:py-0" : "lg:py-[12px]"
          }`}
      >
        <a href="/" className="flex items-center flex-row">
          {/* <img src={HomeImg} alt="logo" className="md:w-8 md:h-8 h-6 w-6" /> */}

          <span
            className={`text-2xl ml-1 mt-[2px] transition-all duration-300 ease-in-out ${isScrolled ? "font-bold text-[#B31942]" : "text-[#B31942] font-bold"
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
            className={`border-[1px] font-medium relative  lg:px-6 md:px-4 py-2 rounded text-sm border-[#0A3161] transition duration-500 ${isScrolled
              ? "border-[#0A3161] hover:border-none text-[#0A3161] font-medium overflow-hidden transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-auto before:w-0 before:bg-[#B31942] before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 "
              : "border-[#0A3161] text-[#0A3161]"
              }`}
          >
            <span className="relative z-10">Contact Us</span>
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose
                className={`w-5 h-5 ${isScrolled ? "text-[#0A3161]" : "text-[#0A3161]"
                  }`}
              />
            ) : (
              <RiMenu3Fill
                className={`w-5 h-5 ${isScrolled ? "text-[#0A3161]" : "text-[#0A3161]"
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
          <a href="/" className="flex items-center flex-row ml-4 pt-4 ">
            {/* <img src={HomeImg} alt="logo" className="md:w-8 md:h-8 h-6 w-6 " /> */}
            <span className="text-2xl ml-1 mt-[2px] transition-all duration-300 ease-in-out text-[#B31942] font-bold">
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
                  className={`transition-transform ${openDropdownMobile === "home"
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
                      <a href="/services-microsoft-dynamics-365-finance" className="block text-sm text-gray-700">
                        Dynamic F & O
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center hover:bg-[#d9d9d9] transition-colors">
                      <FaChartBar className="text-[#0a3161]" />
                      <a href="/services-microsoft-dynamics-365" className="block text-sm text-gray-700">
                        BI Analytics
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center hover:bg-[#d9d9d9] transition-colors">
                      <FaTools className="text-[#0a3161]" />
                      <a href="/services-microsoft-dynamics-365-finance" className="block text-sm text-gray-700">
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
                  className={`transition-transform ${openDropdownMobile === "services"
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
                      <a href="/industries" className="block text-sm text-gray-700">
                        Financial
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaIndustry className="text-[#0a3161]" />
                      <a href="/industries" className="block text-sm text-gray-700">
                        Manufacturing
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLaptopCode className="text-[#0a3161]" />
                      <a href="/industries" className="block text-sm text-gray-700">
                        Software
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaUniversity className="text-[#0a3161]" />
                      <a href="/industries" className="block text-sm text-gray-700">
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
                  className={`transition-transform ${openDropdownMobile === "products"
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
                  className={`transition-transform ${openDropdownMobile === "technologies"
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
                      <a href="/about-trescor" className="block text-sm text-gray-700">
                        Why Trescor
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaHandshake className="text-[#0a3161]" />
                      <a href="/collaborate-with-us" className="block text-sm text-gray-700">
                        Collaborate with us
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLock className="text-[#0a3161]" />
                      <a href="/privacy-policy" className="block text-sm text-gray-700">
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
                  className={`transition-transform ${openDropdownMobile === "mobile-app" ? "rotate-180 text-mainColor" : ""
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
                      <a href="/contact-trescor" className="block text-sm text-gray-700">
                        Contact Us
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLifeRing className="text-[#0a3161]" />
                      <a href="/dynamics-365-support-services" className="block text-sm text-gray-700">
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
                  <a href="https://www.linkedin.com/company/alchemindssolutions">
                    <FaLinkedinIn className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out " />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href="https://x.com/alchemindsindia">
                    <FaXTwitter className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href="https://www.instagram.com/alchemindssolutions/">
                    {" "}
                    <FaInstagram className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href="https://www.threads.net/@alchemindssolutions">
                    {" "}
                    <FaThreads className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>

                <div className="flex justify-center items-center">
                  <a href="https://www.threads.net/@alchemindssolutions">
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

export default SecNavbar;

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
      className="relative flex h-fit gap-2 "
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`flex items-center gap-1 rounded-full md:text-sm lg:text-base px-3 py-1.5 transition-colors  ${isScrolled ? "text-[#0A3161]" : "text-[#0A3161]"
        }  ${selected === tab ? "text-[#0A3161]" : "text-[#0A3161]"}`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${selected === tab ? "rotate-180" : ""
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
      className="absolute left-0 top-[calc(100%_+_24px)] w-[100%] bg-white rounded-lg shadow p-4"
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
    <div className="grid grid-cols-2 gap-4 ">
      <a
        href="/services-microsoft-dynamics-365-finance"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <FaMoneyCheck className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Dynamics 365 F & O
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>

      <a
        href="/services-microsoft-dynamics-365"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <VscGraph className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Business Intelligence Analytics
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>


      <a
        href="/services-microsoft-dynamics-365-finance"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <MdOutlineSupportAgent className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Support & Managed Services
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>

    </div>
  );
};

const Homebar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <a
        href="/"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <FaIntercom className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Integration Consulting
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>

      <a
        href="/"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <FaBusinessTime className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Business Needs
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>




    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <a
        href="/industries"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <FaSackDollar className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Financial Services
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>

      <a
        href="/industries"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <MdFactory className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Manufacturing Services
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>


      <a
        href="/industries"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <FaLaptop className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Software Services
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>
      </a>

      <a
        href="/industries"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <FaUsers heck className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Public Sector Services
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>

    </div>
  );
};


const SupportBar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <a
        href="/dynamics-365-support-services"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <MdSupport className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Where to find us
            </p>
            <p className="text-[12px] mt-1">We are here to assist you</p>
          </div>
        </div>
      </a>
    </div>
  );
};

const AboutBar = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <a
        href="/about-trescor"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <GrCloudSoftware className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Why Tresccor?
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>

      <a
        href="/collaborate-with-us"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <FaHandshake className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Collaborate with us
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>


      <a
        href="/privacy-policy"
        className="flex w-full flex-col items-start justify-start text-[#0A3161] transition-colors hover:bg-[#ffffff] rounded-xl px-4 py-1.5 hover:text-[#B31942] hover:shadow-sm "
      >
        <div className="flex flex-row items-center">
          <MdPrivacyTip className=" w-6 h-6" />
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-[14px] ">
              Privacy Policy
            </p>
            <p className="text-[12px] mt-1">Dynamics 365 F & O solutions</p>
          </div>
        </div>


      </a>




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
