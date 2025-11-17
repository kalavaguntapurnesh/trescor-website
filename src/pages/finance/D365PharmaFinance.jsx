import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import SecNavbar from "../../components/SecNavbar";

const D365PharmaFinance = () => {
  return (
    <div>
      <SecNavbar />
      <ScrollToTop />
      <div className="lg:pt-12">
        <div className="w-full bg-white">
          {/* Hero Section */}
          <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
              aria-hidden="true"
            ></div>

            {/* Dark overlay for readability */}
            <div
              className="absolute inset-0 bg-black/50"
              aria-hidden="true"
            ></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
              <h1 className="mt-6 text-white tracking-wide text-3xl md:text-[40px] lg:text-[56px] leading-[1.02] font-extrabold">
                How We Implement Dynamics 365
                <br />
                <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                  for Pharma
                </span>
              </h1>

              <p className="mt-6 text-gray-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                A world-class digital finance foundation designed for global
                pharmaceutical enterprises — engineered for precision,
                compliance, and innovation.
              </p>
            </div>
          </section>

          {/* Implementation Steps Section */}
          <section className="max-w-[1400px] mx-auto py-20 px-6">
            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#0A3161] mb-16">
              Our Implementation Blueprint
            </h2> */}

            <div className="flex flex-col items-center pb-3">
              <div className="text-center mb-5 relative">
                <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                  Our Implementation{" "}
                  <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                    Blueprint
                  </span>
                </h3>
                {/* Animated Accent */}
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 block w-32 h-2 bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] rounded-full animate-pulse opacity-80"></span>
              </div>
            </div>

            <div className="relative w-full">
              {/* Timeline line */}
              <div className="absolute top-10 left-0 right-0 mx-auto w-full h-1 bg-gradient-to-r from-[#004B8D] via-[#FF851B] to-[#2ECC40] opacity-30 rounded-full"></div>

              {/* Grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E8F8FF] border border-gray-200 shadow-lg text-[#004B8D] font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-[#004B8D] mt-4">
                    Design a Global Finance Backbone
                  </h3>

                  <ul className="mt-4 text-gray-700 text-sm space-y-2">
                    <li className="flex gap-2 items-start justify-center">
                      <FiCheckCircle className="text-[#2ECC40] mt-1" />
                      Harmonized chart of accounts & GAAP/IFRS setup
                    </li>
                    <li className="flex gap-2 items-start justify-center">
                      <FiCheckCircle className="text-[#2ECC40] mt-1" />
                      Pharma dimensions — molecule, trial, product, market
                    </li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFF4E6] border border-gray-200 shadow-lg text-[#FF851B] font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-[#FF851B] mt-4">
                    Configure Core Finance & Controls
                  </h3>

                  <ul className="mt-4 text-gray-700 text-sm space-y-2">
                    <li className="flex gap-2 items-start justify-center">
                      <FiCheckCircle className="text-[#FF851B] mt-1" />
                      GL, AP, AR, fixed assets, tax, cash & bank
                    </li>
                    <li className="flex gap-2 items-start justify-center">
                      <FiCheckCircle className="text-[#FF851B] mt-1" />
                      Segregation of duties & workflow approvals
                    </li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F0FFEE] border border-gray-200 shadow-lg text-[#2ECC40] font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-[#2ECC40] mt-4">
                    Enable Pharma-Specific Scenarios
                  </h3>

                  <ul className="mt-4 text-gray-700 text-sm space-y-2">
                    <li className="flex gap-2 items-start justify-center">
                      <FiCheckCircle className="text-[#2ECC40] mt-1" />
                      Project accounting for R&D & clinical trials
                    </li>
                    <li className="flex gap-2 items-start justify-center">
                      <FiCheckCircle className="text-[#2ECC40] mt-1" />
                      Rebates, chargebacks & gross-to-net (GTN)
                    </li>
                    <li className="flex gap-2 items-start justify-center">
                      <FiCheckCircle className="text-[#2ECC40] mt-1" />
                      Batch / lot-based costing
                    </li>
                  </ul>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E6F7F2] border border-gray-200 shadow-lg text-[#0074D9] font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-[#0074D9] mt-4">
                    Integrate & Report End-to-End
                  </h3>

                  <ul className="mt-4 text-gray-700 text-sm space-y-2">
                    <li className="flex gap-2 items-start justify-center">
                      <FiCheckCircle className="text-[#0074D9] mt-1" />
                      Integrate SCM, CRM, LIMS, warehouses & banks
                    </li>
                    <li className="flex gap-2 items-start justify-center">
                      <FiCheckCircle className="text-[#0074D9] mt-1" />
                      Power BI for R&D, COGS & net revenue insights
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="lg:pt-12">
            <div className="relative">
              <div className="w-full">
                <div className="w-full mx-auto max-w-[1400px] lg:pb-12 pb-4">
                  <div className="p-4">
                    <div className="w-full pt-6 pb-4">
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center min-h-[500px]">
                        {/* LEFT CONTENT */}
                        <div className="flex flex-col space-y-8 w-full justify-center h-full">
                          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 px-2 md:px-0">
                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md text-[#0A3161]">
                              Dynamics 365 for Pharma
                              <br />
                              <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                                Manufacturing & Compliance
                              </span>
                            </h1>
                          </div>

                          <div className="text-gray-600 lg:text-lg text-base lg:text-start text-center lg:ml-2 px-2 md:px-0">
                            <p>
                              Microsoft Dynamics 365 empowers pharmaceutical
                              companies to unify production, financials,
                              quality, and regulatory processes on a single
                              compliant platform. From batch-based manufacturing
                              and automated documentation to global supply chain
                              visibility and GxP-ready audit trails, Dynamics
                              365 helps pharma enterprises improve accuracy,
                              reduce risk, and accelerate time-to-market.
                            </p>
                          </div>
                        </div>

                        {/* RIGHT IMAGE WITH ACCENTS */}
                        <div className="flex justify-center items-center w-full h-full min-h-[400px]">
                          <div className="relative flex justify-center items-center w-full h-full">
                            {/* Accent circles */}
                            <div className="absolute -top-4 -left-12 w-40 h-40 bg-gradient-to-br from-[#00A3EE] via-[#7EB900] to-[#F14F21] rounded-full blur-2xl opacity-30"></div>

                            <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-gradient-to-br from-[#00A3EE] via-[#FEB800] to-[#0A3161] rounded-full blur-2xl opacity-40"></div>

                            {/* Pharma Image */}
                            <img
                              src="https://global.hitachi-solutions.com/wp-content/uploads/2023/08/Advisory-Services_Hero-Graphic.jpg"
                              alt="Dynamics 365 Pharma Solutions"
                              className="rounded-xl w-full max-w-[550px] h-auto object-contain z-10 mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual + CTA Section */}

          <div className="lg:pt-2">
            <div className="relative">
              <div className="w-full">
                <div className="w-full lg:mx-auto max-w-[1400px] pb-12 mx-auto">
                  <div className="p-4">
                    <div className="md:flex md:h-[363px] mt-12">
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
                              Transform Your Pharma Finance & Operations with
                              Dynamics 365
                            </p>
                            <h4 className="md:text-base text-sm w-auto md:max-w-[80%] whitespace-break-spaces">
                              Unlock compliance-ready financial management,
                              streamline batch-based production, and modernize
                              clinical and supply chain operations with
                              Microsoft Dynamics 365 tailored for the
                              Pharmaceutical Industry.
                            </h4>
                          </div>

                          <button className="w-fit px-[36px] py-[12px] rounded-full text-[14px] font-[500] bg-white text-black cursor-pointer">
                            Book a Consultation
                          </button>
                        </div>
                      </div>

                      <div className="hidden lg:block w-[100%] md:w-0 lg:w-[30%] h-[100%]">
                        <img
                          src="https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="object-cover h-[100%] w-full rounded-r-xl"
                          alt="Pharma Transformation Banner"
                        />
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
    </div>
  );
};

export default D365PharmaFinance;
