import React, { useState, useMemo } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import SecNavbar from "../../components/SecNavbar";

const D365NeoBank = () => {
  const items = [
    {
      title: "Regulatory-grade Finance Backbone",
      color: "#004B8D",
      points: [
        "Cloud-native multi-entity, multi-currency on Azure",
        "Chart of accounts & dimensions aligned to product & risk tiers",
      ],
    },
    {
      title: "Harden Core Finance & Controls",
      color: "#FF851B",
      points: [
        "GL, AP, AR, cash & bank, fixed assets fully configured",
        "Role-based access, maker–checker & audit trails for SOX/regulators",
      ],
    },
    {
      title: "Neobank-specific Finance Scenarios",
      color: "#2ECC40",
      points: [
        "Interest, fees & FX spread recognition by product & segment",
        "Daily settlement, disputes, fraud losses & write-offs tied to GL",
      ],
    },
    {
      title: "Integrate, Automate & Measure",
      color: "#0074D9",
      points: [
        "Real-time integrations: core banking, card schemes, PSPs & KYC/AML",
        "Power BI dashboards for CAC/LTV, product profitability & liquidity",
      ],
    },
  ];

  const [active, setActive] = useState(null);

  // SVG geometry (matching your D365PharmaFinance sizing)
  const r = 160;
  const stroke = 120;
  const outerIncrease = 60;
  const radiusForSVG = r + outerIncrease;
  const circumference = useMemo(
    () => 2 * Math.PI * radiusForSVG,
    [radiusForSVG]
  );
  const segment = useMemo(() => circumference * 0.25, [circumference]);
  const segments = [
    { id: 1, color: "#28A745", title: "Design Regulatory-grade Backbone" },
    { id: 2, color: "#FFC107", title: "Harden Core Finance & Controls" },
    { id: 3, color: "#FF6B45", title: "Enable Neobank Scenarios" },
    { id: 4, color: "#00A3E8", title: "Integrate, Automate & Measure" },
  ];
  const offsets = segments.map((_, i) => -segment * i);

  return (
    <div>
      <SecNavbar />
      <ScrollToTop />
      <div className="lg:pt-20">
        <div className="w-full bg-white">
          {/* Hero */}
          <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
            <div className="relative z-10 text-center px-4">
              <h1 className="mt-6 text-white tracking-wide text-3xl md:text-[40px] lg:text-[56px] leading-[1.02] font-extrabold">
                How We Implement Dynamics 365
                <br />
                <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                  for Neobanks
                </span>
              </h1>

              <p className="mt-6 text-gray-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                A regulatory-grade, cloud-native finance foundation for digital
                banks — engineered for product-level economics, settlement
                resilience and regulator readiness.
              </p>
            </div>
          </section>

          {/* Implementation Blueprint (desktop donut + cards) */}
          <section className="max-w-[1400px] mx-auto pt-12 pb-24 lg:block hidden">
            <div className="text-center mb-8">
              <h3 className="lg:text-4xl text-3xl font-extrabold text-[#08263a]">
                Our Implementation{" "}
                <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                  Blueprint
                </span>
              </h3>
              <p className="mt-3 text-slate-500 max-w-[760px] mx-auto">
                Focused phases for neobanking: regulatory alignment, hardened
                controls, product accounting, and integrated economics.
              </p>
            </div>

            <div className="relative w-full flex items-center justify-center pt-10 pb-14">
              <div
                className="absolute -z-10 rounded-full"
                style={{
                  width: 680,
                  height: 680,
                  filter: "blur(70px)",
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(0,163,238,0.18), rgba(126,185,0,0.12) 35%, rgba(241,79,33,0.1) 70%, rgba(0,0,0,0))",
                }}
                aria-hidden="true"
              />

              {/* Donut SVG */}
              <div
                className="relative z-20"
                role="img"
                aria-label="Donut chart"
              >
                <svg
                  width={680}
                  height={680}
                  viewBox={`${-340} ${-340} ${680} ${680}`}
                  className="block"
                >
                  <g transform="rotate(-90)">
                    {segments.map((seg, i) => {
                      const dashArray = `${segment} ${circumference - segment}`;
                      const dashOffset = offsets[i];
                      const isActive = active === seg.id;
                      return (
                        <g
                          key={seg.id}
                          style={{ transition: "transform 0.28s ease" }}
                          transform={isActive ? "scale(1.035)" : "scale(1)"}
                          onMouseEnter={() => setActive(seg.id)}
                          onMouseLeave={() => setActive(null)}
                          tabIndex={0}
                          role="button"
                          aria-label={seg.title}
                        >
                          <circle
                            cx="0"
                            cy="0"
                            r={radiusForSVG}
                            fill="transparent"
                            stroke={seg.color}
                            strokeWidth={stroke + 40}
                            strokeDasharray={dashArray}
                            strokeDashoffset={dashOffset}
                            strokeLinecap="butt"
                            style={{
                              cursor: "pointer",
                              filter: isActive
                                ? "drop-shadow(0 20px 40px rgba(0,0,0,0.22))"
                                : undefined,
                              transition:
                                "filter 0.25s ease, transform 0.25s ease",
                            }}
                          />
                        </g>
                      );
                    })}

                    <circle
                      cx="0"
                      cy="0"
                      r={r - stroke / 2 + 40}
                      fill="#ffffff"
                    />
                  </g>
                </svg>
              </div>

              {/* Cards */}
              <div className="hidden md:block absolute inset-0 z-30 pointer-events-none">
                {/* TOP */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-[400px] pointer-events-auto">
                  <article
                    className={`bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-xl transition-transform duration-300 transform ${
                      active === 1
                        ? "scale-[1.02] -translate-y-3"
                        : "hover:-translate-y-2"
                    }`}
                    onMouseEnter={() => setActive(1)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#e6fbf0] flex items-center justify-center text-[#20713b] font-bold text-2xl shadow-sm">
                        1
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-[#073151]">
                          Design a Regulatory-grade Backbone
                        </h5>
                        <ul className="mt-3 text-sm text-slate-700 space-y-1.5">
                          <li className="flex gap-2">
                            <FiCheckCircle className="text-[#7EB900] mt-1" />{" "}
                            Cloud-native multi-entity, multi-currency on Azure
                          </li>
                          <li className="flex gap-2">
                            <FiCheckCircle className="text-[#7EB900] mt-1" />{" "}
                            Chart of accounts & dimensions by product, region,
                            risk
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>

                {/* RIGHT */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[400px] pointer-events-auto">
                  <article
                    className={`bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-xl transition-transform duration-300 transform ${
                      active === 2
                        ? "scale-[1.02] translate-x-2"
                        : "hover:-translate-y-2"
                    }`}
                    onMouseEnter={() => setActive(2)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#fff8e6] flex items-center justify-center text-[#8a4a00] font-bold text-2xl shadow-sm">
                        2
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-[#8a4a00]">
                          Harden Core Finance & Controls
                        </h5>
                        <ul className="mt-3 text-sm text-slate-700 space-y-1.5">
                          <li className="flex gap-2">
                            <FiCheckCircle className="text-[#FF9E3B] mt-1" />{" "}
                            GL, AP, AR, cash & bank, fixed assets
                          </li>
                          <li className="flex gap-2">
                            <FiCheckCircle className="text-[#FF9E3B] mt-1" />{" "}
                            Role-based access, maker–checker & audit trails
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>

                {/* BOTTOM */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[400px] pointer-events-auto">
                  <article
                    className={`bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-xl transition-transform duration-300 transform ${
                      active === 3
                        ? "scale-[1.02] translate-y-2"
                        : "hover:-translate-y-2"
                    }`}
                    onMouseEnter={() => setActive(3)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#fff7f2] flex items-center justify-center text-[#9a2f1d] font-bold text-2xl shadow-sm">
                        3
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-[#0a3d2b]">
                          Enable Neobank-specific Scenarios
                        </h5>
                        <ul className="mt-3 text-sm text-slate-700 space-y-1.5">
                          <li className="flex gap-2">
                            <FiCheckCircle className="text-[#7EB900] mt-1" />{" "}
                            Interest, fees & FX spread recognition per product
                          </li>
                          <li className="flex gap-2">
                            <FiCheckCircle className="text-[#7EB900] mt-1" />{" "}
                            Daily settlement, chargebacks, disputes & fraud
                            accounting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>

                {/* LEFT */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[400px] pointer-events-auto">
                  <article
                    className={`bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-xl transition-transform duration-300 transform ${
                      active === 4
                        ? "scale-[1.02] -translate-x-2"
                        : "hover:-translate-y-2"
                    }`}
                    onMouseEnter={() => setActive(4)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-[#e6f9ff] flex items-center justify-center text-[#034e7f] font-bold text-2xl shadow-sm">
                        4
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-[#044a8f]">
                          Integrate, Automate & Measure
                        </h5>
                        <ul className="mt-3 text-sm text-slate-700 space-y-1.5">
                          <li className="flex gap-2">
                            <FiCheckCircle className="text-[#0074D9] mt-1" />{" "}
                            Realtime integrations to core banking, card schemes
                            & KYC/AML
                          </li>
                          <li className="flex gap-2">
                            <FiCheckCircle className="text-[#0074D9] mt-1" />{" "}
                            Power BI dashboards for CAC/LTV, liquidity &
                            coverage ratios
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <style>{`
              @media (prefers-reduced-motion: reduce) {
                * { transition: none !important; animation: none !important; }
              }
            `}</style>
          </section>

          {/* Advantages / Grid (mobile friendly) */}
          <section className="max-w-[1400px] mx-auto py-8 px-6">
            <div className="text-center mb-8">
              <h3 className="lg:text-4xl text-3xl font-extrabold text-[#08263a]">
                Advantages of Dynamics 365{" "}
                <span className="bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] bg-clip-text text-transparent">
                  for Neobanks
                </span>
              </h3>
              <p className="mt-3 text-slate-500 max-w-[760px] mx-auto">
                A structured approach to build resilient finance operations for
                digital-first banks.
              </p>
            </div>

            <div className="relative w-full">
              <div
                className="absolute top-10 left-0 right-0 mx-auto w-full h-1 
                bg-gradient-to-r from-[#004B8D] via-[#FF851B] to-[#2ECC40] 
                opacity-30 rounded-full"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
                {items.map((item, index) => {
                  const gradientClass =
                    index % 4 === 0
                      ? "bg-gradient-to-r from-[#F14F21] to-[#FEB800]"
                      : index % 4 === 1
                      ? "bg-gradient-to-r from-[#00A3EE] to-[#7EB900]"
                      : index % 4 === 2
                      ? "bg-gradient-to-r from-[#7EB900] to-[#FEB800]"
                      : "bg-gradient-to-r from-[#FEB800] to-[#F14F21]";

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div
                        className={`w-16 h-16 flex items-center justify-center rounded-full 
                          border border-gray-200 shadow-lg text-white font-bold text-xl 
                          ${gradientClass}`}
                      >
                        {index + 1}
                      </div>

                      <h3
                        className="text-lg font-semibold mt-4"
                        style={{ color: item.color }}
                      >
                        {item.title}
                      </h3>

                      <ul className="mt-4 text-gray-700 text-sm space-y-2">
                        {item.points.map((p, i) => (
                          <li
                            key={i}
                            className="flex gap-2 items-start justify-center"
                          >
                            <FiCheckCircle
                              className="mt-1"
                              style={{ color: item.color }}
                            />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Two-column content + image */}
          <div className="lg:pt-12">
            <div className="relative">
              <div className="w-full mx-auto max-w-[1400px] lg:pb-12 pb-4">
                <div className="p-4">
                  <div className="w-full pt-6 pb-4">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center min-h-[500px]">
                      <div className="flex flex-col space-y-8 w-full justify-center h-full">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 px-2 md:px-0">
                          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md text-[#0A3161]">
                            Dynamics 365 for Neobanks
                            <br />
                            <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                              Product Economics & Regulatory Readiness
                            </span>
                          </h1>
                        </div>

                        <div className="text-gray-600 lg:text-lg text-base lg:text-start text-center lg:ml-2 px-2 md:px-0">
                          <p>
                            Dynamics 365 equips digital banks to unify product
                            accounting, settlement, dispute handling, and
                            regulatory reporting on a single, auditable platform
                            — reducing reconciliation overhead and improving
                            speed to scale.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center items-center w-full h-full min-h-[400px]">
                        <div className="relative flex justify-center items-center w-full h-full">
                          <div className="absolute -top-4 -left-12 w-40 h-40 bg-gradient-to-br from-[#00A3EE] via-[#7EB900] to-[#F14F21] rounded-full blur-2xl opacity-30"></div>
                          <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-gradient-to-br from-[#00A3EE] via-[#FEB800] to-[#0A3161] rounded-full blur-2xl opacity-40"></div>

                          <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3"
                            alt="Neobank Finance Solutions"
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

          {/* Visual + CTA */}
          <div className="lg:pt-2">
            <div className="relative">
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
                            Transform Your Banking Finance & Ops with Dynamics
                            365
                          </p>
                          <h4 className="md:text-base text-sm w-auto md:max-w-[80%] whitespace-break-spaces">
                            Implement a regulator-ready finance foundation,
                            automate settlement & reconciliations, and measure
                            product-level unit economics with Power BI and
                            connected integrations.
                          </h4>
                        </div>

                        <button className="w-fit px-[36px] py-[12px] rounded-full text-[14px] font-[500] bg-white text-black cursor-pointer">
                          Book a Consultation
                        </button>
                      </div>
                    </div>

                    <div className="hidden lg:block w-[100%] md:w-0 lg:w-[30%] h-[100%]">
                      <img
                        src="https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="object-cover h-[100%] w-full rounded-r-xl"
                        alt="Banking Transformation Banner"
                      />
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

export default D365NeoBank;
