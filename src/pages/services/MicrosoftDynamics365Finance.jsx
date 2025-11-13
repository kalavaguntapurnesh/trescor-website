import React from "react";
import Footer from "./../../components/Footer";
import SecNavbar from "./../../components/SecNavbar";
import analytics from "../../assets/analytics.png";
import settings from "../../assets/settings.png";
import migrations from "../../assets/migrations.png";
import business from "../../assets/business.png";
import Maintenance from "../../assets/Maintenance.png";
import Nine from "../../assets/Nine.png";
import ScrollToTop from "../../components/ScrollToTop";
import { FiArrowUpRight } from "react-icons/fi";
import { FiSettings, FiLayers, FiTrendingUp, FiShield } from "react-icons/fi";

const MicrosoftDynamics365Finance = () => {
  return (
    <div>
      {/* <AboutLayout /> */}
      <SecNavbar />
      <ScrollToTop />

      {/* section 1 */}

      <div className="lg:pt-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] lg:pb-12 pb-4">
              <div className="p-4">
                <div className="w-full pt-20 pb-4">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center min-h-[500px]">
                    <div className="flex flex-col space-y-8 w-full justify-center h-full">
                      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 px-2 md:px-0">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md text-[#0A3161]">
                          Dynamics 365 Finance <br />
                          <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                            & Operations
                          </span>
                        </h1>
                      </div>
                      <div className="text-gray-600 lg:text-lg text-base lg:text-start text-center lg:ml-2 px-2 md:px-0">
                        <p>
                          Finance is one of the most complex functions of an
                          organization involving data and reports – general
                          ledgers, fixed assets, receivables, payables,
                          reconciliation, cash flow, and more. With Microsoft
                          Dynamics 365 Finance and Operations, you can do much
                          more than a basic accounting or financial software to
                          drive business agility and growth. For instance, you
                          can automate your key processes, streamline your
                          accounting needs, and manage your financial data while
                          integrating it with other parts of your business.
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:px-0 px-2">
                        <div className="flex flex-row md:justify-start justify-center items-center">
                          <FiSettings className="w-8 h-8 text-[#00A3EE]" />
                          <p className="ml-2 text-gray-600 lg:text-lg text-base">
                            Automate key financial processes
                          </p>
                        </div>

                        <div className="flex flex-row md:justify-start justify-center items-center">
                          <FiLayers className="w-8 h-8 text-[#7EB900]" />
                          <p className="ml-2 text-gray-600 lg:text-lg text-base">
                            Integrate systems for a unified view
                          </p>
                        </div>

                        <div className="flex flex-row md:justify-start justify-center items-center">
                          <FiTrendingUp className="w-8 h-8 text-[#F14F21]" />
                          <p className="ml-2 text-gray-600 lg:text-lg text-base">
                            Enable faster & accurate decision-making
                          </p>
                        </div>

                        <div className="flex flex-row md:justify-start justify-center items-center">
                          <FiShield className="w-8 h-8 text-[#0A3161]" />
                          <p className="ml-2 text-gray-600 lg:text-lg text-base">
                            Simplify financial complexity & risk
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-full h-full min-h-[400px]">
                      <div className="relative flex justify-center items-center w-full h-full">
                        <div className="absolute -top-4 -left-12 border border-red-500 w-40 h-40 bg-gradient-to-br from-[#00A3EE] via-[#7EB900] to-[#F14F21] rounded-full blur-2xl opacity-30"></div>
                        {/* Water bubble accent right side */}
                        <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-gradient-to-br from-[#00A3EE] via-[#FEB800] to-[#0A3161] rounded-full blur-2xl opacity-40"></div>
                        <img
                          src="https://global.hitachi-solutions.com/wp-content/uploads/2023/07/Financial_Hero-Graphic.png"
                          alt="Dynamics 365 Finance Hero"
                          className="rounded-xl w-full max-w-[550px] h-auto object-contain z-10 mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* Modern Banner Section */}

      <div className="lg:pt-4">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] lg:pb-12 pb-4">
              <div className="p-4">
                <div className="hidden md:block py-4 lg:py-6">
                  <div className="flex items-center relative rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] overflow-hidden h-fit min-h-[360px] pl-[1rem] md:pl-[3rem] lg:pl-[4rem] py-[4rem] md:pt-[3rem] md:pb-[5rem] lg:pt-[4rem] lg:pb-[6rem]">
                    <div
                      className="absolute inset-0 h-full w-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0)), url("https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                      }}
                    ></div>
                    <div className="relative z-10 h-full flex flex-col text-[#F4F2F2] gap-[16px] w-[90%]">
                      <h1 className="text-[26px] md:text-[28px] lg:text-[40px] font-bold ">
                        Manage your financial operations with us.
                      </h1>
                      <p className="text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed   max-w-[65%] whitespace-break-spaces">
                        To monitor the performance of your global financial
                        operations, Dynamics 365 Finance comes with several
                        features.
                      </p>
                      <button className="w-fit px-[20px] py-[12px] rounded-[10px] text-[14px] font-[500] bg-[#00A3EE]  text-white shadow-lg hover:bg-[#0A3161] transition-colors duration-300 cursor-pointer">
                        Connect with Us
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-[2px] z-20 text-sm   font-medium">
                      <p className="text-[12px] md:text-[12px] lg:text-[16px]">
                        Services /{" "}
                        <span className="text-[#0A3161]">
                          Dynamics 365 Finance & Operations
                        </span>
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full leading-none z-0">
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

                <div className="pt-8">
                  <p className="text-gray-600 lg:text-lg text-base">
                    Our team will help you leverage the full potential of
                    Dynamics 365 finance modules and features, automating tasks
                    and streamlining accounting. This goes beyond basic
                    financial software by providing a unified view of your
                    finances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-4 lg:px-0 px-2 ">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="p-4">
                <div className="flex flex-wrap pb-2 flex-col items-center">
                  <div className="text-center mt-4">
                    <h1 className="md:text-4xl text-3xl font-extrabold leading-tight drop-shadow-md text-[#0A3161]">
                      Microsoft Dynamics 365 Finance:{" "}
                      <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                        Benefits
                      </span>
                    </h1>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-10 ">
                  {[
                    {
                      icon: analytics,
                      Title: "Improved business health",
                      description:
                        "Achieve strong financial health with unified financial reporting that provides clear insights for better strategic planning.",
                    },
                    {
                      icon: settings,
                      Title: "Better financial controls",
                      description:
                        "Gain enhanced control with in-depth reporting capabilities and embedded real-time analytics that improve transparency and accuracy.",
                    },
                    {
                      icon: migrations,
                      Title: "Optimized cash flows",
                      description:
                        "Leverage predictive insights to manage working capital more efficiently and strengthen your organization’s cash flow cycle.",
                    },
                    {
                      icon: Maintenance,
                      Title: "AI-powered decision-making",
                      description:
                        "Make smarter financial decisions with AI capabilities and Microsoft Power BI workspaces designed for advanced analytics.",
                    },
                    {
                      icon: business,
                      Title: "Reduced time, cost & errors",
                      description:
                        "Save time and operational costs while minimizing errors through automation of key financial processes.",
                    },
                    {
                      icon: Nine,
                      Title: "Higher efficiency with Microsoft 365",
                      description:
                        "Boost team productivity through seamless integration with Microsoft Office 365 tools to streamline workflows.",
                    },
                    {
                      icon: analytics,
                      Title: "Compliance-ready financial system",
                      description:
                        "Easily manage changing regulatory requirements using a no-code configuration method that simplifies ongoing compliance updates.",
                    },
                    {
                      icon: settings,
                      Title: "Adapt to global & local needs",
                      description:
                        "Effortlessly support both local and international financial requirements with built-in adaptability and flexibility.",
                    },
                    {
                      icon: migrations,
                      Title: "Improved employee productivity",
                      description:
                        "Enhance employee satisfaction and work-life balance with simplified workflows that reduce manual work and repetitive tasks.",
                    },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="flex justify-center transition-transform duration-500 hover:-translate-y-2 group"
                    >
                      <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 p-8 text-center">
                        <div className="flex justify-center items-center mb-5">
                          <div className="relative w-24 h-24 flex items-center justify-center rounded-full overflow-hidden">
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

                            <img
                              src={value.icon}
                              alt="icon"
                              className="relative w-20 h-20 object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-3"
                            />
                          </div>
                        </div>

                        <h1
                          className={`
            text-2xl font-bold mb-3 transition-colors duration-300
            ${
              index % 4 === 0
                ? "text-[#0A3161] group-hover:text-[#F14F21]"
                : index % 4 === 1
                ? "text-[#0A3161] group-hover:text-[#00A3EE]"
                : index % 4 === 2
                ? "text-[#0A3161] group-hover:text-[#7EB900]"
                : "text-[#0A3161] group-hover:text-[#FEB800]"
            }
          `}
                        >
                          {value.Title}
                        </h1>

                        <p className="text-gray-600 leading-relaxed mb-6 px-2">
                          {value.description}
                        </p>

                        <div
                          className={`
            h-[3px] w-1/2 mx-auto rounded-full 
            ${
              index % 4 === 0
                ? "bg-gradient-to-r from-[#F14F21] to-[#FEB800]"
                : index % 4 === 1
                ? "bg-gradient-to-r from-[#00A3EE] to-[#7EB900]"
                : index % 4 === 2
                ? "bg-gradient-to-r from-[#7EB900] to-[#FEB800]"
                : "bg-gradient-to-r from-[#FEB800] to-[#F14F21]"
            }
          `}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Success Stories Case Study Section */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-4 lg:px-0 px-2 ">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="p-4">
                <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
                  <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 lg:py-8 xl:py-8">
                    <div className="flex md:w-8/10 justify-between flex-col sm:flex-row items-center md:items-start w-full">
                      <div className="w-full">
                        <h3 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#0A3161]">
                          <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                            Features:
                          </span>{" "}
                          Microsoft Dynamics 365 Finance
                        </h3>

                        <div className="my-6">
                          <button className="w-fit px-[32px] py-[8px] rounded-full font-medium bg-[#0A3161] text-white hover:bg-[#00A3EE] transition-colors duration-300 cursor-pointer">
                            Know More
                          </button>
                        </div>
                      </div>
                      <div className="flex sm:justify-end gap-4 w-full md:w-auto mt-3 sm:mt-0"></div>
                    </div>
                    <div className="flex gap-12 md:min-h-[300px] flex-col md:flex-row relative my-4 mb-[3rem]">
                      <div className="md:w-[70%] lg:w-[50%] flex flex-col gap-[40px] z-10 relative">
                        <div>
                           <h5 className="text-lg font-semibold pb-[20px] inline-block">
                            Automate & simplify financial operations
                            <div
                              className="mt-1"
                              style={{
                                boxShadow:
                                  "rgba(0, 0, 0, 0.05) -2px 0px 4px 0px, rgba(0, 0, 0, 0.04) -6px 0px 6px 0px, rgba(0, 0, 0, 0.03) -14px 0px 9px 0px, rgba(0, 0, 0, 0.01) -26px 0px 10px 0px, rgba(0, 0, 0, 0) -40px 0px 11px 0px",
                                borderBottom: "2px solid",
                                borderImageSource:
                                  "linear-gradient(90deg, rgb(0, 114, 211) 0%, rgba(0, 114, 211, 0.5) 100%)",
                                borderImageSlice: 1,
                              }}
                            ></div>
                          </h5>
                          <ul className="list-disc pl-4 space-y-2">
                            <li className=" tracking-[2%] text-[#525252]">
                              Use several work-simplifying tools like vendor
                              invoice automation and expense management
                            </li>
                            <li className=" tracking-[2%] text-[#525252]">
                              Integration with MS Excel, Outlook, and Skype to
                              enhance efficiencies
                            </li>
                          </ul>
                        </div>
                        <div>
                           <h5 className="text-lg font-semibold pb-[20px] inline-block">
                            Monitor performance in real time
                            <div
                              className="h-[2px] bg-transparent mt-1"
                              style={{
                                boxShadow:
                                  "rgba(0, 0, 0, 0.05) -2px 0px 4px 0px, rgba(0, 0, 0, 0.04) -6px 0px 6px 0px, rgba(0, 0, 0, 0.03) -14px 0px 9px 0px, rgba(0, 0, 0, 0.01) -26px 0px 10px 0px, rgba(0, 0, 0, 0) -40px 0px 11px 0px",
                                borderBottom: "2px solid",
                                borderImageSource:
                                  "linear-gradient(90deg, rgb(0, 114, 211) 0%, rgba(0, 114, 211, 0.5) 100%)",
                                borderImageSlice: 1,
                              }}
                            ></div>
                          </h5>
                          <ul className="list-disc pl-4">
                            <li className=" tracking-[2%] text-[#525252]">
                              Workspaces with analytics and processes tailored
                              by role{" "}
                            </li>
                            <li className="tracking-[2%] text-[#525252]">
                              Option for drill throughs & details on every
                              transaction.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8 z-10 relative justify-center items-center">
                        <div
                          className="bg-white p-6 w-[80%] md:w-[300px] lg:w-[400px]"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.05) -2px 0px 4px 0px, rgba(0, 0, 0, 0.04) -6px 0px 6px 0px, rgba(0, 0, 0, 0.03) -14px 0px 9px 0px, rgba(0, 0, 0, 0.01) -26px 0px 10px 0px, rgba(0, 0, 0, 0) -40px 0px 11px 0px",
                          }}
                        >
                           <h5 className="text-lg font-semibold pb-[20px] inline-block">
                            Predict future outcomes
                            <div
                              className="h-[2px] bg-transparent mt-1"
                              style={{
                                boxShadow:
                                  "rgba(0, 0, 0, 0.05) -2px 0px 4px 0px, rgba(0, 0, 0, 0.04) -6px 0px 6px 0px, rgba(0, 0, 0, 0.03) -14px 0px 9px 0px, rgba(0, 0, 0, 0.01) -26px 0px 10px 0px, rgba(0, 0, 0, 0) -40px 0px 11px 0px",
                                borderBottom: "2px solid",
                                borderImageSource:
                                  "linear-gradient(90deg, rgb(0, 114, 211) 0%, rgba(0, 114, 211, 0.5) 100%)",
                                borderImageSlice: 1,
                              }}
                            ></div>
                          </h5>
                          <ul className="text-[#525252] pl-4 list-disc">
                            <li className="text-[14px] tracking-[2%]">
                              Capability to predict invoice payments by
                              analyzing client payment history
                            </li>
                            <li className="text-[14px] tracking-[2%]">
                              Inbuilt Artificial Intelligence, Machine Learning,
                              and predictive analytics to gain strategic
                              insights
                            </li>
                          </ul>
                        </div>
                      </div>
                      <img
                        src="https://images.pexels.com/photos/19825057/pexels-photo-19825057/free-photo-of-close-up-of-a-data-hub-diskstation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Success Story"
                        className="object-cover absolute bottom-[-2rem] md:hidden rounded-lg w-full"
                        style={{ zIndex: 0 }}
                      />
                    </div>
                    <div className="hidden md:block absolute top-0 right-0 w-[20%] h-full z-0">
                      <img
                        src="https://images.pexels.com/photos/19825057/pexels-photo-19825057/free-photo-of-close-up-of-a-data-hub-diskstation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="illustration"
                        className="object-cover w-full h-full rounded-l-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}

        <Footer />
      </div>
    </div>
  );
};

export default MicrosoftDynamics365Finance;
