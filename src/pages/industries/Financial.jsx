import React from "react";
import SecNavbar from "../../components/SecNavbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

import {
  FaUniversity,
  FaFileInvoiceDollar,
  FaChartLine,
  FaCreditCard,
  FaShieldAlt,
  FaChartBar,
} from "react-icons/fa";

const Financial = () => {
  // Industries data array
  const industries = [
    {
      name: "Digital Banking Operations",
      image:
        "https://plus.unsplash.com/premium_photo-1661333496070-9420cb8cf9e8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Microsoft 365 helps banks enhance service efficiency with secure workflows, unified communication, and faster customer issue resolution across all channels.",
    },
    {
      name: "Risk & Compliance Management",
      image:
        "https://images.unsplash.com/photo-1545005785-a4a5554b8efe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "With automated approvals, audit trails, and controlled document access, Microsoft 365 strengthens regulatory compliance and reduces operational risks.",
    },
    {
      name: "Wealth & Investment Services",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2600&auto=format&fit=crop",
      description:
        "Financial advisors can collaborate securely, access client insights, and deliver personalized investment experiences powered by Teams, Power BI, and SharePoint.",
    },
    {
      name: "Insurance & Claims Processing",
      image:
        "https://plus.unsplash.com/premium_photo-1702598604444-8ac3b474b86d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Microsoft 365 modernizes policy management, accelerates claims processing, and improves communication between agents, underwriters, and customers.",
    },
    {
      name: "Fraud Prevention & Security",
      image:
        "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Advanced security, identity protection, and real-time monitoring tools help financial institutions safeguard data and reduce fraud risks.",
    },
    {
      name: "Customer Insights & Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "With Power BI and customer analytics, Microsoft 365 provides a unified view of customer behavior, enabling better segmentation and targeted financial offerings.",
    },
  ];

  return (
    <>
      {/* Section 1 */}

      <SecNavbar />
      <ScrollToTop />

      <div className="relative h-[900px] lg:h-[700px] lg:mt-[104px] mt-[100px] mx-auto max-w-[1400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Microsoft Dynamics Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#13151ABF] z-[1]"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-[1440px] mx-auto">
          <div className="h-full flex flex-col justify-center pt-[80px] lg:pt-[100px]">
            {/* HERO + SIDEBAR */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Hero */}
              <div className="lg:col-span-7 col-span-1">
                <div className="max-w-2xl">
                  <p className="inline-block uppercase text-sm tracking-widest text-[#00A3EE] bg-white/5 px-3 py-1 rounded-full backdrop-blur-sm">
                    Financial Services
                  </p>

                  <h1 className="mt-6 text-white text-[30px] md:text-[40px] lg:text-[56px] leading-[1.02] font-extrabold">
                    Transforming finance with Microsoft Dynamics
                    <br />
                    <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                      365 for Financial Services
                    </span>
                  </h1>

                  <p className="mt-6 lg:block hidden text-[#D6D8DB] text-lg md:text-[18px] max-w-xl">
                    Dynamics 365 helps financial institutions streamline
                    operations, improve compliance, and deliver personalized
                    customer experiences. With unified data, automated
                    workflows, and real-time insights, banks, insurers, and
                    wealth firms can operate more efficiently and make smarter
                    decisions faster.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact-trescor"
                      className="inline-flex items-center justify-center gap-3 bg-[#00A3EE] text-white px-[28px] py-3 rounded-full font-medium shadow-2xl transform-gpu transition hover:-translate-y-1"
                    >
                      Get Consultation
                    </a>
                  </div>

                  {/* Trust strip */}
                </div>
              </div>

              {/* Right: Highlight panel with industry cards */}
              <div className="lg:col-span-5 col-span-1">
                <div className="w-full bg-white/6 backdrop-blur-md border border-white/8 rounded-3xl p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Financial Services Highlights
                      </h3>
                      <p className="text-sm text-[#C9CDD0] mt-1">
                        Dynamics 365 scenarios that deliver measurable impact
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      {
                        name: "Digital Banking",
                        icon: <FaUniversity className="w-5 h-5" />,
                        accent: "from-[#F14F21] to-[#FFD166]",
                        sub: "Smarter customer experiences and unified banking services",
                      },
                      {
                        name: "Insurance",
                        icon: <FaFileInvoiceDollar className="w-5 h-5" />,
                        accent: "from-[#7EB900] to-[#00A3EE]",
                        sub: "Faster policy handling and automated claims",
                      },
                      {
                        name: "Wealth Management",
                        icon: <FaChartLine className="w-5 h-5" />,
                        accent: "from-[#00A3EE] to-[#7EB900]",
                        sub: "Real-time insights for advisors and clients",
                      },
                      {
                        name: "Payments",
                        icon: <FaCreditCard className="w-5 h-5" />,
                        accent: "from-[#F14F21] to-[#00A3EE]",
                        sub: "Secure transactions and better cashflow visibility",
                      },
                      {
                        name: "Risk & Compliance",
                        icon: <FaShieldAlt className="w-5 h-5" />,
                        accent: "from-[#8E6FF8] to-[#00A3EE]",
                        sub: "Automated controls and regulatory alignment",
                      },
                      {
                        name: "Analytics",
                        icon: <FaChartBar className="w-5 h-5" />,
                        accent: "from-[#00A3EE] to-[#FFD166]",
                        sub: "360° insights powered by unified financial data",
                      },
                    ].map((it, idx) => (
                      <button
                        key={idx}
                        className="group relative flex flex-col items-start gap-2 p-3 rounded-xl bg-gradient-to-r from-white/3 to-white/2 hover:from-white/6 hover:to-white/4 transform-gpu transition shadow-sm hover:shadow-xl focus:outline-none"
                        aria-label={it.name}
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg p-2 bg-gradient-to-br to-white/6 from-white/3 group-hover:scale-105 transform transition">
                            <div
                              className={`w-8 h-8 rounded-md bg-gradient-to-r ${it.accent} p-2 text-white flex items-center justify-center shadow-md`}
                            >
                              {it.icon}
                            </div>
                          </div>
                          <div>
                            <div className="text-white text-start font-semibold text-sm">
                              {it.name}
                            </div>
                            <div className="text-xs text-start text-[#BFC4C8]">
                              {it.sub}
                            </div>
                          </div>
                        </div>

                        {/* micro CTA */}
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition text-xs text-[#9FB3C8]">
                          Learn how Dynamics 365 accelerates{" "}
                          {it.name.split(" ")[0]}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-20 pt-8 ">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="p-4">
                <div className="space-y-3 pb-4">
                  <div className="flex items-center lg:justify-start justify-center">
                    <h1 className=" font-bold text-[#B31942] uppercase">
                      Financial Services
                    </h1>
                  </div>

                  <div className="text-start mt-4 relative">
                    <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                      Empowering the future of{" "}
                      <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                        Financial Services
                      </span>
                    </h3>
                  </div>

                  <div className="text-gray-600 lg:text-start text-center">
                    <p>
                      Trescor helps banks, insurers, and financial institutions
                      modernize their operations with secure, cloud-driven
                      Microsoft solutions. From improving customer experiences
                      and streamlining compliance to enhancing risk management
                      and accelerating digital transformation, we deliver
                      technology that enables smarter decisions, stronger
                      governance, and long-term business resilience in a rapidly
                      evolving financial landscape.˝
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className={`flex justify-center items-center ${
                        index >= 3 ? "lg:pt-4" : ""
                      }`}
                    >
                      <div className="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border border-gray-200">
                        <img
                          className="w-full h-60"
                          src={industry.image}
                          alt={industry.name}
                        />
                        <div className="px-6 pt-4">
                          <div className="font-bold lg:text-start text-center text-[#0A3161] text-xl mb-2">
                            {industry.name}
                          </div>
                          <p className="text-gray-600 text-base lg:text-start text-center">
                            {industry.description}
                          </p>
                        </div>
                        <div className="px-6 pb-4 flex lg:justify-start justify-center">
                          <a
                            href="/contact-trescor"
                            className="relative h-[44px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-[#0A3161] text-[#0A3161] font-semibold text-base rounded-lg "
                            tabIndex={0}
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              Know More
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                          </a>
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

      {/* Section 2 */}

      <div className="lg:pt-12 pt-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] lg:pb-12 pb-4">
              <div className="p-4">
                <div className="w-full pb-4">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center min-h-[500px]">
                    {/* Left content */}
                    <div className="flex flex-col space-y-8 w-full justify-center h-full">
                      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 px-2 md:px-0">
                        <h1 className="uppercase font-bold text-[#B31942]">
                          Transformative power
                        </h1>

                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md text-[#0A3161]">
                          Dynamics 365 for{" "}
                          <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                            Financial Services
                          </span>
                        </h2>
                      </div>

                      <div className="text-gray-600 lg:text-lg text-base lg:text-start text-center lg:ml-2 px-2 md:px-0">
                        <p>
                          Dynamics 365 modernizes financial institutions by
                          unifying customer data, automating compliance
                          workflows, and bringing real-time risk and performance
                          insights to the front line. Whether for retail
                          banking, insurance, wealth management, or treasury
                          operations, Dynamics 365 helps firms reduce costs,
                          accelerate processes, strengthen security, and deliver
                          personalized client experiences at scale.
                        </p>
                      </div>
                    </div>

                    {/* Right image with accents */}
                    <div className="flex justify-center items-center w-full h-full min-h-[400px]">
                      <div className="relative flex justify-center items-center w-full h-full">
                        {/* Accent blobs */}
                        <div className="absolute -top-4 -left-12 border border-red-500 w-40 h-40 bg-gradient-to-br from-[#00A3EE] via-[#7EB900] to-[#F14F21] rounded-full blur-2xl opacity-30"></div>
                        <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-gradient-to-br from-[#00A3EE] via-[#FEB800] to-[#0A3161] rounded-full blur-2xl opacity-40"></div>

                        {/* Image */}
                        <img
                          src="https://global.hitachi-solutions.com/wp-content/uploads/2023/12/Cybersecurity_Hero-Graphic.webp"
                          alt="Dynamics 365 for Financial Services"
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

      {/* <ContactUsButton /> */}

      <Footer />
    </>
  );
};

export default Financial;
