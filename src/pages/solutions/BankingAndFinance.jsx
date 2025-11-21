import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import SecNavbar from "../../components/SecNavbar";
import { FiShield, FiCreditCard, FiTrendingUp, FiLock } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { useState } from "react";
import bandf from "../../assets/B&F.png";

const BankingAndFinance = () => {
  const values = [
    {
      icon: <FiShield className="w-12 h-12" />,
      title: "Regulatory Compliance & Risk",
      description:
        "End-to-end compliance frameworks with auditable data lineage, model governance and automated regulatory reporting to meet local and global standards.",
    },
    {
      icon: <FiCreditCard className="w-12 h-12" />,
      title: "Payments & Digital Banking",
      description:
        "Modernize payments, cards, and account experiences with secure, low-latency processing, open APIs, and real-time reconciliation.",
    },
    {
      icon: <FiTrendingUp className="w-12 h-12" />,
      title: "Wealth & Lending Insights",
      description:
        "Drive smarter lending decisions and personalized wealth advice using explainable ML, credit scoring, and portfolio analytics.",
    },
  ];

  const TAB_DATA = {
    retail: {
      title: "Retail Banking",
      cards: [
        {
          title: "Omnichannel Account Opening",
          desc: "Streamline onboarding with digital KYC, document verification and instant account provisioning across web and mobile.",
          read: "4min read",
          href: "#",
          image:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
        },
        {
          title: "Personal Financial Management",
          desc: "Offer budgeting, savings nudges and personalized product recommendations powered by behavioral analytics.",
          read: "5min read",
          href: "#",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
        },
        {
          title: "Real-time Payments & Reconciliation",
          desc: "Support instant payments, RTP rails and automated reconciliation for faster settlement and improved cash flow.",
          read: "6min read",
          href: "#",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2670&auto=format&fit=crop",
        },
      ],
    },

    corporate: {
      title: "Corporate Banking",
      cards: [
        {
          title: "Treasury & Cash Management",
          desc: "Centralized liquidity, FX exposure reporting, and automated sweep and funding controls for corporate clients.",
          href: "#",
          read: "5min read",
          image:
            "https://plus.unsplash.com/premium_photo-1681589451970-ed43fc59d16b?q=80&w=3268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Trade Finance & Supply Chain",
          desc: "Digitize letters of credit, guarantees and receivables financing with smart contracts and document automation.",
          href: "#",
          read: "4min read",
          image:
            "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2670&auto=format&fit=crop",
        },
        {
          title: "Corporate Credit & Limits",
          desc: "Automated credit decisioning, covenant monitoring and exposure dashboards to manage institutional credit risk.",
          href: "#",
          read: "6min read",
          image:
            "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=2670&auto=format&fit=crop",
        },
      ],
    },

    risk: {
      title: "Risk, Compliance & Finance",
      cards: [
        {
          title: "Regulatory Reporting",
          desc: "Pre-built and customizable reporting packs for Basel, IFRS 9, AML and local regulators with traceable data lineage.",
          href: "#",
          read: "7min read",
          image:
            "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2670&auto=format&fit=crop",
        },
        {
          title: "Credit Risk Modeling",
          desc: "Governed ML lifecycle for credit scoring, PD/LGD estimation and stress testing with explainability layers.",
          href: "#",
          read: "5min read",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Fraud & AML",
          desc: "Network analysis, anomaly detection and sanctions screening integrated with case management workflows.",
          href: "#",
          read: "6min read",
          image:
            "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=2670&auto=format&fit=crop",
        },
      ],
    },
  };

  const tabs = [
    { key: "retail", label: TAB_DATA.retail.title },
    { key: "corporate", label: TAB_DATA.corporate.title },
    { key: "risk", label: TAB_DATA.risk.title },
  ];

  const [active, setActive] = useState("retail");
  const activeIndex = tabs.findIndex((t) => t.key === active);

  return (
    <div>
      <SecNavbar />
      <ScrollToTop />

      {/* Hero */}
      <div className="lg:pt-28 pt-20">
        <div className="w-full mx-auto max-w-[1400px] pb-12 p-4">
          <div className="space-y-6 text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide text-white bg-[#0A3161] shadow-sm">
              Dynamics 365
            </span>

            <div className="lg:text-5xl text-4xl text-center font-bold text-[#0A3161]">
              <h1>
                Dynamics 365{" "}
                <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                  for Banking{" "}
                </span>
                and Finance
              </h1>
            </div>

            <div className="text-gray-600 text-center">
              <p>
                Accelerate digital transformation in retail and corporate
                banking with Dynamics 365 integrated with data, AI, and security
                to deliver better customer experiences and stronger financial
                controls.
              </p>
            </div>

            <div className="relative h-[350px] md:h-[500px] lg:h-[600px] mx-auto max-w-[1400px] overflow-hidden group">
              <img
                src={bandf}
                alt="Fabric AI"
                className="absolute top-0 left-0 w-full h-full lg:object-contain object-center
                               "
              />
            </div>

            <div className="flex justify-center">
              <a
                href="/contact-trescor"
                className="w-fit px-[36px] py-[12px] rounded-full text-[14px] font-[500] bg-[#0A3161] text-white shadow-lg hover:bg-[#00A3EE] transition-colors duration-300"
              >
                Talk to our Banking Experts
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      {/* Features (Fabric-style) */}
      <div className="pb-16">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex flex-col items-center pb-3">
                    <div className="text-center mt-4 relative">
                      <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                        Features of Dynamics{" "}
                        <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                          Banking & Finance
                        </span>
                      </h3>
                      {/* Animated Accent */}
                      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 block w-32 h-2 bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] rounded-full animate-pulse opacity-80"></span>
                    </div>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Modern banking capabilities built on Dynamics 365 — from
                      secure payments and KYC to real-time risk analytics and
                      fraud prevention.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-10">
                  {values.map((value, index) => (
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
                          {value.title}
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

      {/* Tabs */}
      {/* Banking Modules (enhanced layout like Fabric example) */}
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
                    Banking & Finance
                  </h3>
                  <p className="text-base text-gray-600">
                    Dynamics 365 delivers modular capabilities across Retail,
                    Corporate and Risk functions — designed to modernize
                    operations, improve customer experiences and strengthen
                    controls.
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                            <span className="text-sm text-gray-500">
                              {card.read}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Explore CTA */}
                <div className="lg:px-0 px-2 pt-6 flex justify-center">
                  <a
                    href="/contact-trescor"
                    className="w-fit px-[36px] py-[12px] rounded-full text-[14px] font-[500] bg-[#0A3161] text-white shadow-lg hover:bg-[#00A3EE] transition-colors duration-300 cursor-pointer"
                  >
                    Connect with Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BankingAndFinance;
