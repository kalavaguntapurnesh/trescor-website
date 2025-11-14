import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import SecNavbar from "../../components/SecNavbar";
// import { FiDatabase, FiZap, FiShield } from "react-icons/fi";
import { motion } from "framer-motion"; // optional - for smoother entrance animation
import fabric from "../../assets/FabricAI.png";
import { FiLink, FiRefreshCcw } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";

const MicrosoftFabric = () => {
  const values1 = [
    {
      icon: <FiLink className="w-12 h-12" />,
      Title: "Unified Data Foundation",
      description:
        "Bring all your organizational data together across lakes, warehouses, and pipelines through a single, scalable Fabric platform.",
    },
    {
      icon: <FaUsers className="w-12 h-12" />,
      Title: "AI-Driven Insights",
      description:
        "Turn raw data into real-time intelligence with Fabric’s built-in AI models, automated analytics, and powerful copilots.",
    },
    {
      icon: <FiRefreshCcw className="w-12 h-12" />,
      Title: "End-to-End Automation",
      description:
        "Automate data movement, analytics workflows, and decision-making with Fabric's fully integrated and future-ready ecosystem.",
    },
  ];

  const SHARED_IMAGE =
    "https://ctwebsite2025.blob.core.windows.net/media/celebalwebsite2025/assets_webp/news-and-press/finalist-2025/homeCard.webp";

  const TAB_DATA = {
    realtime: {
      title: "Real-time Analytics",
      cards: [
        {
          title: "Streaming ETL Pipelines",
          desc: "Continuously ingest, enrich and transform streaming data with fault-tolerant pipelines that keep analytics current and reliable.",
          read: "4min read",
          href: "#",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        },
        {
          title: "Monitoring & Anomaly Detection",
          desc: "Detect operational issues automatically using KQL-powered anomaly detection and real-time alerts tied to business SLAs.",
          read: "5min read",
          href: "#",
          image:
            "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=2670&auto=format&fit=crop",
        },
        {
          title: "Low-Latency ML Inferencing",
          desc: "Run near-real-time ML inference on streaming data to power recommendations, fraud checks, and automated decisioning close to the source.",
          read: "6min read",
          href: "#",
          image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2670&auto=format&fit=crop",
        },
      ],
    },

    bi: {
      title: "Business Intelligence (BI)",
      cards: [
        {
          title: "Native Power BI Experiences",
          desc: "Author, publish and share interactive reports directly on Fabric for faster insights and collaboration.",
          href: "#",
          read: "5min read",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
        },
        {
          title: "Semantic Models & Delta Tables",
          desc: "Build governed semantic models on Delta tables and deliver consistent metrics across the organisation.",
          href: "#",
          read: "4min read",
          image:
            "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=2670&auto=format&fit=crop",
        },
        {
          title: "Self-Serve Analytics",
          desc: "Empower business users with low-code exploration while maintaining strong governance controls.",
          href: "#",
          read: "6min read",
          image:
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2670&auto=format&fit=crop",
        },
      ],
    },

    warehousing: {
      title: "Data Warehousing",
      cards: [
        {
          title: "T-SQL Endpoints & Lakehouse",
          desc: "Enterprise warehousing with SQL endpoints over Delta tables for high-performance analytics.",
          href: "#",
          read: "7min read",
          image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
        },
        {
          title: "ETL Pipelines & Ingestion",
          desc: "Reliable, scheduled pipelines for consistent ingestion from OLTP, Dataverse, and external systems.",
          href: "#",
          read: "5min read",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2670&auto=format&fit=crop",
        },
        {
          title: "High-Volume Query Performance",
          desc: "Optimize large-scale analytical queries using materialized views, caching, and compute scaling.",
          href: "#",
          read: "6min read",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
        },
      ],
    },
  };

  const tabs = [
    { key: "realtime", label: TAB_DATA.realtime.title },
    { key: "bi", label: TAB_DATA.bi.title },
    { key: "warehousing", label: TAB_DATA.warehousing.title },
  ];

  const [active, setActive] = useState("realtime");
  const activeIndex = tabs.findIndex((t) => t.key === active);

  return (
    <div>
      <SecNavbar />
      <ScrollToTop />

      <div className="lg:pt-28 pt-20">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="p-4">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide text-white bg-[#0A3161] shadow-sm">
                      Fabric AI
                    </span>
                  </div>

                  <div className="lg:text-5xl text-4xl text-center font-bold text-[#0A3161]">
                    <h1>
                      Smart Solutions to{" "}
                      <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                        Propel Your{" "}
                      </span>
                      Business Forward
                    </h1>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Fabric AI unifies your data, enhances insights, and
                      automates decisions across industries. From Healthcare to
                      Manufacturing, we deliver tailored solutions that
                      accelerate innovation and boost business performance.
                    </p>
                  </div>

                  <div className="relative h-[350px] md:h-[500px] lg:h-[600px] mx-auto max-w-[1400px] overflow-hidden">
                    <img
                      src={fabric}
                      alt="Business Technology Background"
                      className="absolute top-0 left-0 w-full h-full lg:object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex flex-col items-center pb-3">
                    <div className="text-center mt-4 relative">
                      <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                        Features of Microsoft{" "}
                        <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                          Fabric AI
                        </span>
                      </h3>
                      {/* Animated Accent */}
                      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 block w-32 h-2 bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] rounded-full animate-pulse opacity-80"></span>
                    </div>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Trescor Software Solutions combines Fabric AI with
                      Dynamics 365 to unify data, automate insights, and deliver
                      enterprise-grade analytics.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-10">
                  {values1.map((value, index) => (
                    <div
                      key={index}
                      className="flex justify-center transition-transform duration-500 hover:-translate-y-2 group"
                    >
                      <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 p-8 text-center">
                        <div className="flex justify-center items-center mb-5">
                          <div className="relative w-24 h-24 flex items-center justify-center rounded-full overflow-hidden">
                            <div className="relative w-20 h-20 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-3">
                              <div
                                className={`w-16 h-16 rounded-md p-2 flex items-center justify-center shadow-md ${
                                  index % 4 === 0
                                    ? "bg-gradient-to-r from-[#F14F21] to-[#FEB800] text-white"
                                    : index % 4 === 1
                                    ? "bg-gradient-to-r from-[#00A3EE] to-[#7EB900] text-white"
                                    : index % 4 === 2
                                    ? "bg-gradient-to-r from-[#7EB900] to-[#FEB800] text-white"
                                    : "bg-gradient-to-r from-[#FEB800] to-[#F14F21] text-white"
                                }`}
                              >
                                {value.icon}
                              </div>
                            </div>
                          </div>
                        </div>

                        <h1
                          className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                            index % 4 === 0
                              ? "text-[#0A3161] group-hover:text-[#F14F21]"
                              : index % 4 === 1
                              ? "text-[#0A3161] group-hover:text-[#00A3EE]"
                              : index % 4 === 2
                              ? "text-[#0A3161] group-hover:text-[#7EB900]"
                              : "text-[#0A3161] group-hover:text-[#FEB800]"
                          }`}
                        >
                          {value.Title}
                        </h1>

                        <p className="text-gray-600 leading-relaxed mb-6 px-2">
                          {value.description}
                        </p>

                        <div
                          className={`h-[3px] w-1/2 mx-auto rounded-full ${
                            index % 4 === 0
                              ? "bg-gradient-to-r from-[#F14F21] to-[#FEB800]"
                              : index % 4 === 1
                              ? "bg-gradient-to-r from-[#00A3EE] to-[#7EB900]"
                              : index % 4 === 2
                              ? "bg-gradient-to-r from-[#7EB900] to-[#FEB800]"
                              : "bg-gradient-to-r from-[#FEB800] to-[#F14F21]"
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-[#0A3161] to-[#00A3EE] opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#F14F21] to-[#7EB900] opacity-8 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-28 flex items-center">
          <div className="w-full lg:w-3/5 relative z-10">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide text-white bg-[#0A3161] shadow-sm">
                Fabric AI
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 lg:mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A3161] leading-tight"
            >
              <span>Smart solutions to </span>
              <br className="hidden md:block" />
              <span
                className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent"
                aria-hidden="true"
              >
                propel your
              </span>{" "}
              <br />
              <span className="text-[#0A3161]">business forward</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-gray-600 max-w-2xl text-center lg:text-left"
            >
              Fabric AI unifies your data, enhances insights, and automates
              decisions across industries. From Healthcare to Manufacturing, we
              deliver tailored solutions that accelerate innovation and boost
              business performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] text-white font-semibold shadow-lg hover:scale-105 transform transition"
              >
                Talk to an expert
              </a>

              <a
                href="/solutions"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-gray-200 bg-white text-[#0A3161] font-medium hover:bg-gray-50 transition"
              >
                Explore Fabric AI
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl"
            >
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur rounded-lg p-3 shadow-sm">
                <div className="p-2 rounded-md bg-white">
                  <FiDatabase className="w-5 h-5 text-[#0A3161]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0A3161]">
                    Unified Data
                  </div>
                  <div className="text-xs text-gray-500">
                    Single truth layer
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/60 backdrop-blur rounded-lg p-3 shadow-sm">
                <div className="p-2 rounded-md bg-white">
                  <FiZap className="w-5 h-5 text-[#7EB900]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0A3161]">
                    Intelligent Automation
                  </div>
                  <div className="text-xs text-gray-500">Speed & accuracy</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/60 backdrop-blur rounded-lg p-3 shadow-sm">
                <div className="p-2 rounded-md bg-white">
                  <FiShield className="w-5 h-5 text-[#00A3EE]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0A3161]">
                    Secure & Compliant
                  </div>
                  <div className="text-xs text-gray-500">Enterprise-grade</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:flex lg:w-2/5 justify-end pl-10 relative">
            <div className="w-[420px] bg-white rounded-2xl p-6 shadow-2xl transform -translate-y-6 hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400">Live Demo</div>
                  <div className="text-sm font-semibold text-[#0A3161]">
                    Fabric AI Workspace
                  </div>
                </div>
                <div className="text-sm text-[#7EB900] font-bold">Beta</div>
              </div>

              <div className="mt-4 h-[220px] rounded-md bg-gradient-to-br from-[#F8FAFC] to-white border border-gray-100 flex items-center justify-center text-sm text-gray-400">
                <div className="text-center px-4">
                  <div className="font-medium text-gray-500 mb-2">
                    Power BI • Fabric • AI
                  </div>
                  <div className="text-xs">
                    Interactive insights & pipelines
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="text-xs text-gray-500">Trusted by</div>
                <div className="h-6 w-6 rounded bg-gray-200" />
                <div className="h-6 w-6 rounded bg-gray-200" />
                <div className="h-6 w-6 rounded bg-gray-200" />
              </div>
            </div>

            <div className="absolute -right-8 bottom-0 w-44 h-44 rounded-full bg-gradient-to-br from-[#00A3EE] to-[#7EB900] opacity-6 blur-2xl pointer-events-none" />
          </div>
        </div>
      </section> */}

      <section className="pb-16">
        <div className="relative w-full">
          <div className="w-full mx-auto max-w-[1400px]">
            <div className="p-4">
              {/* Header */}
              <div className="w-full bg-[#fafafa] px-8 py-6 md:py-8 lg:py-10 xl:py-12 flex flex-col gap-8 md:gap-12 lg:gap-16 max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-[18px]">
                  <h3 className="text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#0A3161]">
                    <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                      The Three Components of
                    </span>{" "}
                    Microsoft Fabric AI
                  </h3>
                  <p className="text-base text-gray-600">
                    Microsoft Fabric comprises three core components, each
                    offering distinct capabilities to streamline data and
                    analytics workflows.
                  </p>
                </div>

                {/* Tabs */}
                <div className="w-full">
                  <div className="hidden md:flex flex-wrap items-center gap-[16px]">
                    {tabs.map((t, idx) => (
                      <button
                        key={t.key}
                        onClick={() => setActive(t.key)}
                        className={`border-[1px] cursor-pointer rounded-[32px] px-[28px] py-[10px] text-[16px] font-medium transition ${
                          active === t.key
                            ? "bg-[#C5E6FF] border-[#3BA4FF] text-[#0A3161]"
                            : "bg-white border-[#C6C6C6] text-gray-700"
                        }`}
                        aria-pressed={active === t.key}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  {/* mobile tab strip */}
                  <div className="flex md:hidden justify-between relative border-b border-gray-400">
                    {tabs.map((t, idx) => (
                      <button
                        key={t.key}
                        onClick={() => setActive(t.key)}
                        className={`flex-1 text-center pb-2 text-[12px] font-medium ${
                          active === t.key ? "text-blue-600" : "text-gray-700"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}

                    {/* slider */}
                    <span
                      className="absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-300"
                      style={{
                        width: `${100 / tabs.length}%`,
                        transform: `translateX(${
                          (100 / tabs.length) * activeIndex
                        }%)`,
                      }}
                    />
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                  {TAB_DATA[active].cards.map((card, idx) => (
                    <a
                      key={idx}
                      href={card.href}
                      className="h-auto w-full rounded-[8px] flex flex-col gap-[16px] bg-white shadow-md transition-shadow duration-300 group cursor-pointer"
                    >
                      <div className="h-[218px]">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-[218px] object-cover rounded-t-[8px]"
                        />
                      </div>

                      <div className="bg-white rounded-b-[8px] w-full h-auto p-[20px] pt-0 flex flex-col gap-[12px]">
                        <h2 className="text-[#0A3161] text-xl lg:text-2xl font-bold leading-[1.3] h-[52px] line-clamp-2">
                          {card.title}
                        </h2>

                        <p className="text-gray-600 leading-[1.4] h-[100px] line-clamp-5">
                          {card.desc}
                        </p>

                        <div className="flex flex-col gap-[8px] w-full mt-[8px]">
                          <span className="bg-[#E6E6E6] h-[1px] w-full" />

                          <div className="flex items-center justify-between w-full mt-[8px]">
                            <div className="overflow-hidden text-[#0072DE]">
                              <div className="flex items-center gap-[8px] transform -translate-x-20 group-hover:translate-x-0 transition-all duration-700 ease-in-out">
                                <p>Read more</p>
                                <img
                                  src="https://ctwebsite2025.blob.core.windows.net/media/celebalwebsite2025/assets_webp/HomePage/blueArrow.png"
                                  className="w-[18px] h-[18px]"
                                  alt="arrow"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Explore CTA */}
                <div className="lg:px-0 px-2 pt-6 flex justify-center">
                  <button className="w-fit px-[36px] py-[12px] rounded-full text-[14px] font-[500] bg-[#0A3161] text-white shadow-lg hover:bg-[#00A3EE] transition-colors duration-300 cursor-pointer">
                    Connect with Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                          'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop")',
                      }}
                    ></div>
                    <div className="relative z-10 h-full flex flex-col text-[#F4F2F2] gap-[16px] w-[90%]">
                      <h1 className="text-[26px] md:text-[28px] lg:text-[40px] font-bold ">
                        Manage your operations intelligently with Fabric AI.
                      </h1>
                      <p className="text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed   max-w-[65%] whitespace-break-spaces">
                        Microsoft Fabric AI unifies data across Dynamics 365,
                        Power BI, Dataverse, and cloud sources—delivering
                        real-time insights, predictive intelligence.
                      </p>
                      <button className="w-fit px-[20px] py-[12px] rounded-[10px] text-[14px] font-[500] bg-[#00A3EE]  text-white shadow-lg hover:bg-[#0A3161] transition-colors duration-300 cursor-pointer">
                        Connect with Us
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-[2px] z-20 text-sm   font-medium">
                      <p className="text-[12px] md:text-[12px] lg:text-[18px]">
                        Solutions /{" "}
                        <span className="text-[#0A3161]">
                          Dynamics 365 + Fabric AI
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MicrosoftFabric;
