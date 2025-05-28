import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="select-none bg-[#f0f0f0]">
      <div className="relative ">
        <div className="w-full">
          <div className="w-full p-6">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="pb-8 mb-8 border-b border-gray-300">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 mt-8 mb-6">
                  <div className="flex flex-col lg:mb-0 mb-8 gap-4 col-span-2">
                    <div className="w-full flex flex-col">
                      <a
                        href="/"
                        className="flex flex-row items-center md:justify-start justify-center mb-4"
                      >
                        <h3 className="ml-1 text-2xl text-[#B31942] font-bold cursor-pointer">
                          Trescor

                        </h3>

                      </a>
                      <p className="mb-4 text-[#0A3161] lg:text-start text-center">Unify capabilities with Dynamics 365—modern that help move your business forward</p>

                      <div className="flex flex-row md:justify-start justify-center items-center gap-2 mb-8 text-[#0A3161]">
                        <a href="/about-trescor">View More</a>
                        <FaAngleRight className="w-3 h-3" />
                      </div>

                      <div className="grid grid-cols-5 mb-8">
                        <a href="" className="flex md:justify-start justify-center items-center">
                          <FaLinkedin
                            size={20}
                            className="cursor-pointer text-[#0A3161]"
                          />
                        </a>
                        <a href="" className="flex md:justify-start justify-center items-center">
                          <FaXTwitter
                            size={20}
                            className="cursor-pointer text-[#0A3161]"
                          />
                        </a>
                        <a href="" className="flex md:justify-start justify-center items-center">
                          <FaInstagram
                            size={20}
                            className="cursor-pointer text-[#0A3161]"
                          />
                        </a>
                        <a href="" className="flex md:justify-start justify-center items-center">
                          <FaGoogle
                            size={20}
                            className="cursor-pointer text-[#0A3161]"
                          />
                        </a>
                        <a href="" className="flex md:justify-start justify-center items-center">
                          <FaFacebook
                            size={20}
                            className="cursor-pointer text-[#0A3161]"
                          />
                        </a>{" "}
                      </div>


                      <div className="flex flex-col  text-[#0A3161] text-sm">
                        <p className="md:text-start text-center">1-53, P NO.27, SY NO.41/P, 42/P Guttala,</p>
                        <p className="md:text-start text-center">Begumpet, Hyderabad, India-500016</p>
                      </div>

                    </div>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="font-bold tracking-wide text-lg flex md:justify-start justify-center items-start mt-1 text-[#B31942]">
                        About Us
                      </h4>
                    </div>
                    <ul className="pl-0 mt-3 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Our Privacy Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-trescor"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          About Trescor
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-trescor"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Our Leadership
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/terms-and-conditions"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/collaborate-with-us"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Collaborate with us
                        </a>
                      </li>
                    </ul>
                  </div>


                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="font-bold tracking-wide text-lg flex md:justify-start justify-center items-start mt-1 text-[#B31942]">
                        Services
                      </h4>
                    </div>
                    <ul className="pl-0 mt-3 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/services-microsoft-dynamics-365-finance"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Dynamic 365 Finance & Operations
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/services-microsoft-dynamics-365"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          BI Analytics
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/services-microsoft-dynamics-365-finance"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Support & Managed Services
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Customer Engagement
                        </a>
                      </li>

                      {/* <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-us#location_map"
                      className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Where to Find Us
                        </a>
                      </li> */}
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="font-bold tracking-wide text-lg flex md:justify-start justify-center items-start mt-1 text-[#B31942]">
                        Quick Links
                      </h4>
                    </div>
                    <ul className="pl-0 mt-3 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Integration Consulting
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-us"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Business Needs
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="https://www.linkedin.com/company/Trescor/"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          LinkedIn Page
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="https://www.google.com/maps/place/1691+Kettering+St,+Irvine,+CA+92614,+USA/@33.6979191,-117.8467571,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcdebc76905421:0xc9b403b589d3cb99!8m2!3d33.6979191!4d-117.8467571!16s%2Fg%2F11bw3yyf27?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Location Map
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="font-bold tracking-wide text-lg flex md:justify-start justify-center items-start mt-1 text-[#B31942]">
                        Industries
                      </h4>
                    </div>
                    <ul className="pl-0 mt-3 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/industries"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Financial Services
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/industries"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Manufacturing Services
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/industries"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Software Services
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/industries"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-[#0A3161]   transition duration-300 font-medium ease-in-out"
                        >
                          Public Sector Services
                        </a>
                      </li>
                    </ul>
                  </div>




                </div>
              </div>


            </div>

            <div className="text-center  pb-6">

              <p className="text-sm text-[#0A3161]">Trescor uses cookies to ensure you get the best experience on our site. To consent, please continue browsing.</p>

              <div className="flex items-center justify-center space-x-4 text-sm text-[#0A3161] mt-4">
                {/* <p>Return & Refund Policy</p>
                <div className="h-4 w-px bg-[#0A3161]" /> */}
                <a href="/privacy-policy">Terms of Service</a>
                <div className="h-4 w-px bg-[#0A3161]" />
                <a href="/privacy-policy">Privacy Policy</a>
              </div>


              <p className="text-[#0A3161] text-xs mt-4">
                © 2025 Trescor - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
