import React from "react";
import SecNavbar from "../../components/SecNavbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import {
  FaMoneyBillWave,
  FaCogs,
  FaChartBar,
  FaClipboardCheck,
  FaSmileBeam,
  FaTruckLoading,
} from "react-icons/fa";
import { FiSettings, FiLayers, FiTrendingUp, FiShield } from "react-icons/fi";

const Manufacturing = () => {
  const industries = [
    {
      name: "Smart Manufacturing Operations",
      image:
        "https://images.unsplash.com/photo-1716194583732-0b9874234218?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Microsoft 365 streamlines factory-floor operations with real-time data access, digitized workflows, and automated task management — enabling teams to work faster, safer, and with more accuracy.",
    },
    {
      name: "Production Planning & Scheduling",
      image:
        "https://images.unsplash.com/photo-1740733448722-82e16d3468bb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "With tools like Microsoft Teams, Power BI, and Planner, manufacturing leaders can optimize production schedules, reduce downtime, and enhance collaboration between planning and shop-floor teams.",
    },
    {
      name: "Quality & Compliance Management",
      image:
        "https://plus.unsplash.com/premium_photo-1661962730207-7f7e3ce04a03?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Microsoft 365 digitizes quality checks, provides automated audit trails, and ensures every process meets regulatory standards through secure documentation, approval workflows,",
    },
    {
      name: "Supply Chain Collaboration",
      image:
        "https://images.unsplash.com/photo-1590497008432-598f04441de8?q=80&w=3382&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Boost supply chain efficiency with cloud-based collaboration, shared workspaces, vendor communication tools, and Power BI dashboards offering end-to-end supply chain visibility.",
    },
    {
      name: "Workplace Safety & Training",
      image:
        "https://images.unsplash.com/photo-1699106359375-2ac57b239f9e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Microsoft 365 enables digital safety training, real-time alerts, incident reporting, and easy access to safety documents — improving overall plant safety and workforce readiness.",
    },
    {
      name: "Maintenance & Asset Management",
      image:
        "https://plus.unsplash.com/premium_photo-1663126432237-66cb611134ea?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Technicians can use Teams, SharePoint, and mobile apps to access manuals, log issues, capture images, and collaborate instantly — accelerating repairs and improving asset lifecycle management.",
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
            src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  <p className="inline-block uppercase text-sm tracking-widest text-[#00A3EE] bg-white/5 px-3 py-1 rounded-full font-bold backdrop-blur-sm">
                    Manufacturing
                  </p>

                  <h1 className="mt-6 text-white text-[30px] md:text-[40px] lg:text-[56px] leading-[1.02] font-extrabold">
                    Dynamics 365 for the Manufacturing
                    <br />
                    <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                      Industry
                    </span>
                  </h1>

                  <p className="mt-6 lg:block hidden text-[#D6D8DB] text-lg md:text-[18px] max-w-xl">
                    We design manufacturing-focused Dynamics 365 solutions —
                    from discrete and process manufacturing to supply chain and
                    production planning — delivering measurable outcomes:
                    streamlined operations, real-time visibility, and
                    higher-quality output with reduced operational costs.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
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
                        Manufacturing Service Highlights
                      </h3>
                      <p className="text-sm text-[#C9CDD0] mt-1">
                        Tailored solutions for manufacturing excellence
                      </p>
                    </div>
                    {/* <div className="text-sm text-[#9DA3A7]">Explore →</div> */}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      {
                        name: "Decrease Operational Costs",
                        icon: <FaMoneyBillWave className="w-5 h-5" />,
                        accent: "from-[#F14F21] to-[#FFD166]",
                      },
                      {
                        name: "Enhance Production Efficiency",
                        icon: <FaCogs className="w-5 h-5" />,
                        accent: "from-[#7EB900] to-[#00A3EE]",
                      },
                      {
                        name: "Gain Actionable Insights",
                        icon: <FaChartBar className="w-5 h-5" />,
                        accent: "from-[#00A3EE] to-[#7EB900]",
                      },
                      {
                        name: "Improve Quality Control",
                        icon: <FaClipboardCheck className="w-5 h-5" />,
                        accent: "from-[#F14F21] to-[#00A3EE]",
                      },
                      {
                        name: "Strengthen Supply Chain",
                        icon: <FaTruckLoading className="w-5 h-5" />,
                        accent: "from-[#8E6FF8] to-[#00A3EE]",
                      },
                      {
                        name: "Enhance Customer Satisfaction",
                        icon: <FaSmileBeam className="w-5 h-5" />,
                        accent: "from-[#00A3EE] to-[#FFD166]",
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
                              Solutions, automation & analytics
                            </div>
                          </div>
                        </div>

                        {/* micro CTA */}
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition text-xs text-[#9FB3C8]">
                          Learn how we improved{" "}
                          {it.name.split(" ")[0].toLowerCase()}
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
                <div className="space-y-4 pb-4">
                  <div className="flex items-center lg:justify-start justify-center">
                    <h1 className="font-bold text-[#B31942] uppercase">
                      Manufacturing Industry
                    </h1>
                  </div>

                  <div className="text-start mt-4 relative">
                    <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                      Enhancing Manufacturing with{" "}
                      <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                        Microsoft 365
                      </span>
                    </h3>
                  </div>

                  <div className="text-gray-600 lg:text-start text-center">
                    <p>
                      Microsoft 365 helps manufacturing companies streamline
                      operations, improve team collaboration, and digitize
                      shop-floor processes. With real-time communication,
                      automated workflows, and better visibility into daily
                      activities, manufacturers can increase productivity,
                      enhance quality, and make faster, data-driven decisions.
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
                            Manufacturing Excellence
                          </span>
                        </h2>
                      </div>

                      <div className="text-gray-600 lg:text-lg text-base lg:text-start text-center lg:ml-2 px-2 md:px-0">
                        <p>
                          Microsoft Dynamics 365 equips manufacturers with
                          intelligent tools to unify production, supply chain,
                          and asset operations on a single, connected platform.
                          From real-time shop-floor visibility to automated
                          quality checks and AI-powered forecasting, Dynamics
                          365 helps manufacturers reduce downtime, increase
                          throughput, and make faster, data-informed decisions.
                          With built-in cloud scalability and seamless workflow
                          automation, it enables a modern, resilient, and highly
                          collaborative manufacturing environment.
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
                          src="https://global.hitachi-solutions.com/wp-content/uploads/2023/07/Financial_Hero-Graphic.png"
                          alt="Manufacturing AI and Cloud solutions"
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

export default Manufacturing;
