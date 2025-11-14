import React, { useState } from "react";
import One from "../assets/One.svg";
import Two from "../assets/Two.svg";
import Three from "../assets/Three.webp";
import Four from "../assets/Four.svg";
import World from "../assets/globe.png";
import graph from "../assets/investment.png";
import Finance from "../assets/Finance.png";
import settings from "../assets/Maintenance.png";
import business from "../assets/business.png";

const Carousel = () => {
  const values1 = [
    {
      icon: World,
      Title: "Integration",
      description:
        "Supporting customers with highly scalable integration end points leveraging multi-threading for scalability, supporting REST and SOAP API’s for B2B, B2C transactional data exchanges. Premium support available for 24/7 SLA.",
    },
    {
      icon: settings,
      Title: "Dynamics F & O",
      description:
        "Boutique Microsoft Dynamics team specializing in core F&O modules, delivering end-to-end solutions across architecture, development, testing, and upgrades. Backed by 11+ years of experience from AX2009 to D365 F&O with Azure CSP-based managed support.",
    },
    {
      icon: business,
      Title: "Business Intelligence",
      description:
        "Dedicated Data Warehouse and BI team delivering data-driven insights, ensuring integrity between Dynamics and Data Marts, and developing interactive Power BI dashboards for informed business decision-making with proactive ongoing support.",
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] pb-12">
            <div className="w-full p-4 mx-auto max-w-[1400px] mt-8">
              <div className="flex flex-col items-center pb-3">
                <div className="text-center mt-4 relative">
                  <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                    Explore our range{" "}
                    <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                      of Services
                    </span>
                  </h3>
                  {/* Animated Accent */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 block w-32 h-2 bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] rounded-full animate-pulse opacity-80"></span>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="leading-relaxed tracking-wide font-normal text-base text-gray-600 dark:text-gray-800 ">
                  Discover the Comprehensive Suite of Microsoft Dynamics 365 and
                  other Microsoft Solutions for Your Business Transformation
                </p>
              </div>

              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                <div className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-2">
                      <div className="flex justify-start items-center mt-2">
                        <img
                          src={One}
                          alt="c_twelve"
                          className="lg:w-14 lg:h-14 w-12 h-12"
                        />
                      </div>
                      <div className="flex justify-start items-center">
                        <h3 className="text-xl text-[#0A3161] font-bold text-start">
                          Dynamics 365 For Business
                        </h3>
                      </div>
                      <div className="flex justify-start items-center text-gray-600 text-start">
                        <p>
                          Create engaging experiences by unifying customer data
                          with real-time journeys and leveraging Copilot to
                          uncover insights for personalized interactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-2">
                      <div className="flex justify-start items-center mt-2">
                        <img
                          src={Two}
                          alt="c_thirteen"
                          className="lg:w-14 lg:h-14 w-12 h-12"
                        />
                      </div>
                      <div className="flex justify-start items-center">
                        <h3 className="text-xl text-[#0A3161] font-bold text-start">
                          Dynamics 365 For Finance
                        </h3>
                      </div>
                      <div className="flex justify-start items-center text-gray-600 text-start">
                        <p>
                          Strengthen your financial and business operating
                          models and get end-to-end financial visibility to make
                          faster growth decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-2">
                      <div className="flex justify-start items-center mt-2">
                        <img
                          src={Three}
                          alt="c_fourteen"
                          className="lg:w-14 lg:h-14 w-12 h-12"
                        />
                      </div>
                      <div className="flex justify-start items-center">
                        <h3 className="text-xl text-[#0A3161] font-bold text-start">
                          Dynamics 365 For Supply Chain
                        </h3>
                      </div>
                      <div className="flex justify-start items-center text-gray-600 text-start">
                        <p>
                          Build a smart adaptable supply chain, meet the growing
                          eCommerce needs, optimize front-end and back-end
                          operations, and stay profitable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-2">
                      <div className="flex justify-start items-center mt-2">
                        <img
                          src={Four}
                          alt="c_fifteen"
                          className="lg:w-14 lg:h-14 w-12 h-12"
                        />
                      </div>
                      <div className="flex justify-start items-center">
                        <h3 className="text-xl text-[#0A3161] font-bold text-start">
                          Dynamics 365 For Sales Management
                        </h3>
                      </div>
                      <div className="flex justify-start items-center text-gray-600 text-start">
                        <p>
                          Empower your sales team with actionable sales
                          intelligence to improve customer relationships, sell
                          at scale and serve customers intelligently.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-16">
              <div className="bg-white">
                <div className="w-full ">
                  <div className="w-full p-4 mx-auto max-w-[1400px]">
                    <div className="justify-center w-full ">
                      <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                        <div className="items-center mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16">
                          <div className="col-span-2 mb-8 space-y-3">
                            <div className="flex items-center lg:justify-start justify-center ">
                              <p className="uppercase font-bold text-[#B31942] ">
                                Why Trescor is best?
                              </p>
                            </div>
                            <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161] lg:text-start text-center">
                              Empowering Business Intelligence with Microsoft
                              Fabric AI
                            </h3>

                            <div className="lg:text-start text-center mt-4 mb-1">
                              <p className=" text-base text-gray-600">
                                We help organisations connect Dynamics 365 to
                                Microsoft Fabric — turning transactional data
                                into a single trusted data foundation, real-time
                                insights and AI-driven decisioning that scales
                                across finance, operations and enterprise
                                analytics.
                              </p>
                            </div>
                            <div className=" mt-6 space-y-4">
                              <div className="flex lg:justify-start justify-center items-center pb-4">
                                <a
                                  href="/contact-trescor"
                                  className="relative flex h-[50px] md:w-60 w-3/4 items-center bg-[#0A3161] border-[#0A3161] text-white justify-center overflow-hidden border  transition-all before:absolute before:h-0 before:w-0  before:bg-[#B31942] hover:text-white hover:border-[#B31942] before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded-full"
                                >
                                  <span className="relative z-10">
                                    Request a Demo
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src={graph}
                                alt="c_sixteen"
                                className="w-20 h-20 mb-2 text-mainColor"
                              />
                              <h4 className="mb-2 text-2xl lg:text-start text-center font-bold text-[#0A3161] ">
                                Fabric-powered BI & OneLake
                              </h4>
                              <p className=" text-gray-600 lg:text-start text-center">
                                Consolidate data into OneLake and deliver
                                governed Power BI experiences.
                              </p>
                            </div>
                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src={Finance}
                                alt="c_seventeen"
                                className="w-16 h-16 mb-2 text-mainColor"
                              />
                              <h4 className="mb-2 text-2xl font-bold lg:text-start text-center text-[#0A3161]">
                                Unified Financial Insights
                              </h4>
                              <p className=" text-gray-600 lg:text-start text-center">
                                Merge Dynamics 365 finance data with Fabric
                                analytics for real-time cashflow.
                              </p>
                            </div>

                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src={business}
                                className="w-16 h-16 mb-2 text-mainColor"
                                alt="carousel_one"
                              />
                              <h4 className="mb-2 text-2xl text-[#0A3161] font-bold lg:text-start text-center">
                                AI Workspaces & Copilots
                              </h4>
                              <p className=" text-gray-600 lg:text-start text-center">
                                Enable data scientists and business users with
                                Fabric notebooks, copilots.
                              </p>
                            </div>

                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src={settings}
                                className="w-16 h-16 mb-2 text-mainColor"
                                alt="carousel_two"
                              />
                              <h4 className="mb-2 text-2xl text-[#0A3161] font-bold md:text-start text-center">
                                Governance & Compliance
                              </h4>
                              <p className=" text-gray-600 md:text-start text-center">
                                Enterprise-grade governance: lineage, access
                                controls and data protection.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 ">
              <div className="relative">
                <div className="w-full">
                  <div className="w-full mx-auto max-w-[1400px] ">
                    <div className="p-4">
                      <div className="space-y-3">
                        <div className="flex flex-col items-center pb-3">
                          <div className="text-center mt-4 relative">
                            <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                              Services We{" "}
                              <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                                Offer
                              </span>
                            </h3>
                            {/* Animated Accent */}
                            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 block w-32 h-2 bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] rounded-full animate-pulse opacity-80"></span>
                          </div>
                        </div>

                        <div className="text-gray-600 pt-2 text-center">
                          <p>
                            Trescor is engaged in solving critical business
                            problems through digital transformation and
                            innovative cloud technology solutions. We are not
                            only helping businesses become resilient but also
                            empowering them to stay ahead of the curve.
                          </p>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-10 px-4 lg:px-8">
                        {values1.map((value, index) => {
                          const bgGrad =
                            index % 4 === 0
                              ? "from-[#F14F21] to-[#FEB800]"
                              : index % 4 === 1
                              ? "from-[#00A3EE] to-[#7EB900]"
                              : index % 4 === 2
                              ? "from-[#7EB900] to-[#FEB800]"
                              : "from-[#FEB800] to-[#F14F21]";

                          const barGrad =
                            index % 4 === 0
                              ? "bg-gradient-to-r from-[#F14F21] to-[#FEB800]"
                              : index % 4 === 1
                              ? "bg-gradient-to-r from-[#00A3EE] to-[#7EB900]"
                              : index % 4 === 2
                              ? "bg-gradient-to-r from-[#7EB900] to-[#FEB800]"
                              : "bg-gradient-to-r from-[#FEB800] to-[#F14F21]";

                          // overlay gradient from bottom to top
                          const overlayGrad =
                            index % 4 === 0
                              ? "bg-gradient-to-t from-[#F14F21]/95 to-[#FEB800]/85"
                              : index % 4 === 1
                              ? "bg-gradient-to-t from-[#00A3EE]/95 to-[#7EB900]/85"
                              : index % 4 === 2
                              ? "bg-gradient-to-t from-[#7EB900]/95 to-[#FEB800]/85"
                              : "bg-gradient-to-t from-[#FEB800]/95 to-[#F14F21]/85";

                          return (
                            <div
                              key={index}
                              className="flex justify-center transition-transform duration-500 hover:-translate-y-2 group"
                            >
                              <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 p-8 text-center relative overflow-hidden">
                                {/* Gradient overlay - animates bottom -> top on hover */}
                                <div
                                  className={`absolute inset-0 rounded-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out ${overlayGrad} pointer-events-none z-10`}
                                  aria-hidden="true"
                                />

                                {/* Optional subtle overlay for blur/gloss (uncomment if desired) */}
                                {/* <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/10 backdrop-blur-sm transition-all duration-500 pointer-events-none z-15" /> */}

                                {/* Content should be above overlay */}
                                <div className="relative z-0 group-hover:z-20 flex flex-col items-center transition-[z-index] duration-300">
                                  <div className="flex justify-center items-center mb-5">
                                    <div className="relative w-24 h-24 flex items-center justify-center rounded-full overflow-hidden">
                                      <img
                                        src={value.icon}
                                        alt={value.Title}
                                        className="relative w-20 h-20 object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-3"
                                      />
                                    </div>
                                  </div>

                                  <h1 className="text-2xl font-bold mb-3 transition-colors duration-300 text-[#0A3161] group-hover:text-white">
                                    {value.Title}
                                  </h1>

                                  <p className="text-gray-600 leading-relaxed mb-6 px-2 transition-colors duration-300 group-hover:text-white">
                                    {value.description}
                                  </p>

                                  <div
                                    className={`h-[3px] w-1/2 mx-auto rounded-full ${barGrad}`}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
