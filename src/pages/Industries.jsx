import React from "react";
import SecNavbar from "./../components/SecNavbar";
import Footer from "./../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import {
  FaMicrosoft,
  FaHospitalAlt,
  FaTruck,
  FaShoppingBag,
  FaUniversity,
  FaBuilding,
  FaChartLine,
} from "react-icons/fa";

const Industries = () => {
  return (
    <>
      {/* <IndustriesLayout /> */}
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
                    Industries we serve
                  </p>

                  <h1 className="mt-6 text-white text-[30px] md:text-[40px] lg:text-[56px] leading-[1.02] font-extrabold">
                    Transforming businesses with Microsoft Dynamics
                    <br />
                    <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                      365
                    </span>
                  </h1>

                  <p className="mt-6 lg:block hidden text-[#D6D8DB] text-lg md:text-[18px] max-w-xl">
                    We design industry-tailored Dynamics solutions — from retail
                    commerce and logistics to healthcare and education —
                    delivering measurable outcomes: faster processes, unified
                    data, and delightful customer experiences.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-3 bg-[#00A3EE] text-white px-[28px] py-3 rounded font-medium shadow-2xl transform-gpu transition hover:-translate-y-1"
                    >
                      Get Consultation
                    </a>

                    <div className="lg:flex items-center gap-4 hidden">
                      <div className="flex items-center gap-3 opacity-80">
                        <FaMicrosoft className="w-7 h-7 text-white" />
                        <span className="text-white font-medium">
                          Microsoft Certified
                        </span>
                      </div>
                      <div className="h-[1px] w-[1px] bg-white/10 rounded-full" />
                    </div>
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
                        Featured Industries
                      </h3>
                      <p className="text-sm text-[#C9CDD0] mt-1">
                        Tailored Dynamics solutions that move the needle
                      </p>
                    </div>
                    <div className="text-sm text-[#9DA3A7]">Explore →</div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      {
                        name: "Retail & eCommerce",
                        icon: <FaShoppingBag className="w-5 h-5" />,
                        accent: "from-[#F14F21] to-[#FFD166]",
                      },
                      {
                        name: "Manufacturing",
                        icon: <FaChartLine className="w-5 h-5" />,
                        accent: "from-[#7EB900] to-[#00A3EE]",
                      },
                      {
                        name: "Logistics & Supply Chain",
                        icon: <FaTruck className="w-5 h-5" />,
                        accent: "from-[#00A3EE] to-[#7EB900]",
                      },
                      {
                        name: "Healthcare",
                        icon: <FaHospitalAlt className="w-5 h-5" />,
                        accent: "from-[#F14F21] to-[#00A3EE]",
                      },
                      {
                        name: "Education",
                        icon: <FaUniversity className="w-5 h-5" />,
                        accent: "from-[#8E6FF8] to-[#00A3EE]",
                      },
                      {
                        name: "Financial Services",
                        icon: <FaBuilding className="w-5 h-5" />,
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
                            <div className="text-white font-semibold text-sm">
                              {it.name}
                            </div>
                            <div className="text-xs text-[#BFC4C8]">
                              Solutions, automation & analytics
                            </div>
                          </div>
                        </div>

                        {/* micro CTA */}
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition text-xs text-[#9FB3C8]">
                          Learn how we helped a client in{" "}
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

      <div className="lg:pt-32 pt-24 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="p-4">
                <div className="space-y-3 pb-4">
                  <div className="flex items-center lg:justify-start justify-center md:ml-3">
                    <h1 className=" font-bold text-[#B31942] uppercase">
                      Serving Industries
                    </h1>
                  </div>

                  <div className="lg:text-4xl text-3xl lg:text-start text-center font-bold lg:ml-2 px-2 lg:px-0 text-[#0A3161]">
                    <h1>We serve a wide range of Industries</h1>
                  </div>

                  <div className="text-gray-600 lg:text-start text-center lg:ml-2 px-2 lg:px-0">
                    <p>
                      Trescor offers unparalleled expertise across a diverse
                      range of industries. Whether you’re in Healthcare,
                      Manufacturing, Public Sector or beyond, we’ll deliver
                      bespoke solutions that align perfectly with your
                      challenges. By combining our industry expertise with
                      cutting-edge Microsoft technologies, we can help your
                      organization thrive in today’s digital-first world, no
                      matter the sector.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
                  <div className="flex justify-center items-center">
                    <div class="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border border-gray-200">
                      <img
                        class="w-full h-60"
                        src="https://www.tectura.com/wp-content/uploads/2023/04/Industries_EquipmentDistributors.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 pt-4">
                        <div class="font-bold lg:text-start text-center text-[#0A3161] text-xl mb-2">
                          Manufacturing Services
                        </div>
                        <p class="text-gray-600 text-base lg:text-start text-center ">
                          From smart factories to predictive maintenance to
                          inventory management, we help manufacturers unlock
                          deeper insights and improve production efficiency with
                          better manufacturing technology and AI solutions.
                        </p>
                      </div>
                      <div class="px-6 pb-4 flex lg:justify-start justify-center">
                        <a
                          href="/contact-trescor"
                          class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-[#0A3161] text-[#0A3161] transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#0A3161] before:duration-300 before:ease-out hover:text-white hover:shadow-[#0A3161] hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                        >
                          <span class="relative z-10">Know More</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <div class="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border border-gray-200">
                      <img
                        class="w-full h-60"
                        src="https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 pt-4">
                        <div class="font-bold lg:text-start text-center  text-[#0A3161] text-xl mb-2">
                          Financial Services
                        </div>
                        <p class="text-gray-600 text-base lg:text-start text-center ">
                          Our cloud and data solutions increase agility, support
                          data-driven decision making, and enable innovative,
                          secure customer experiences to keep pace with evolving
                          market demands.
                        </p>
                      </div>
                      <div class="px-6 pb-4 flex lg:justify-start justify-center">
                        <a
                          href="/contact-trescor"
                          class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-[#0A3161] text-[#0A3161] transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#0A3161] before:duration-300 before:ease-out hover:text-white hover:shadow-[#0A3161] hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                        >
                          <span class="relative z-10">Know More</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <div class="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border border-gray-200">
                      <img
                        class="w-full h-60"
                        src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 pt-4">
                        <div class="font-bold lg:text-start text-center  text-[#0A3161] text-xl mb-2">
                          Software Services
                        </div>
                        <p class="text-gray-600 text-base lg:text-start text-center ">
                          Our full suite of digital transformation services will
                          help maximize IT investments, meet business goals and
                          support the pace of change in the technology industry
                          using the dynamic capabilities.
                        </p>
                      </div>
                      <div class="px-6 pb-4 flex lg:justify-start justify-center">
                        <a
                          href="/contact-trescor"
                          class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-[#0A3161] text-[#0A3161] transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#0A3161] before:duration-300 before:ease-out hover:text-white hover:shadow-[#0A3161] hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                        >
                          <span class="relative z-10">Know More</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center lg:pt-4">
                    <div class="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border border-gray-200">
                      <img
                        class="w-full h-60"
                        src="https://images.pexels.com/photos/7679444/pexels-photo-7679444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 pt-4">
                        <div class="font-bold lg:text-start text-center  text-[#0A3161] text-xl mb-2">
                          Retail Services
                        </div>
                        <p class="text-gray-600 text-base lg:text-start text-center ">
                          Our retail cloud solutions enhance omni-channel
                          customer experiences, operational efficiency, and
                          real-time insights, helping you meet today’s customer
                          demands.
                        </p>
                      </div>
                      <div class="px-6 pb-4 flex lg:justify-start justify-center">
                        <a
                          href="/contact-trescor"
                          class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-[#0A3161] text-[#0A3161] transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#0A3161] before:duration-300 before:ease-out hover:text-white hover:shadow-[#0A3161] hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                        >
                          <span class="relative z-10">Know More</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center lg:pt-4">
                    <div class="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border border-gray-200">
                      <img
                        class="w-full h-60"
                        src="https://images.pexels.com/photos/19374520/pexels-photo-19374520/free-photo-of-people-on-cicek-pasaji-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 pt-4">
                        <div class="font-bold lg:text-start text-center  text-[#0A3161] text-xl mb-2">
                          Public Sector Services
                        </div>
                        <p class="text-gray-600 text-base lg:text-start text-center ">
                          Empower your citizens with modern cloud-based
                          platforms and management tools for permitting,
                          business licensing, code inspections, maintenance and
                          more.
                        </p>
                      </div>
                      <div class="px-6 pb-4 flex lg:justify-start justify-center">
                        <a
                          href="/contact-trescor"
                          class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-[#0A3161] text-[#0A3161] transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#0A3161] before:duration-300 before:ease-out hover:text-white hover:shadow-[#0A3161] hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                        >
                          <span class="relative z-10">Know More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:pt-4">
                    <div class="max-w-md rounded overflow-hidden shadow border border-gray-200 md:mx-0 mx-2">
                      <img
                        class="w-full h-60"
                        src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 pt-4">
                        <div class="font-bold lg:text-start text-center  text-[#0A3161] text-xl mb-2">
                          Health Care Services
                        </div>
                        <p class="text-gray-600 text-base lg:text-start text-center ">
                          Healthcare technology experts will help you leverage
                          the cloud to optimize operations, increase patient
                          engagement, improve data insights and much more
                          developments.
                        </p>
                      </div>
                      <div class="px-6 pb-4 flex lg:justify-start justify-center">
                        <a
                          href="/contact-trescor"
                          class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-[#0A3161] text-[#0A3161] transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#0A3161] before:duration-300 before:ease-out hover:text-white hover:shadow-[#0A3161] hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                        >
                          <span class="relative z-10">Know More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className="lg:pt-28 pt-16 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                  <div className="flex flex-col space-y-6 w-full">
                    <div className="flex items-center lg:justify-start justify-center md:ml-4">
                      <h1 className="uppercase font-bold text-[#B31942]">
                        Transformative power
                      </h1>
                    </div>

                    <div className="lg:text-4xl text-3xl lg:text-start text-center font-bold md:ml-2 px-2 md:px-0 text-[#0A3161]">
                      <h1>Industry Solutions: AI and Cloud Technology</h1>
                    </div>

                    <div className="text-gray-600 lg:text-start text-center md:ml-2 px-2 md:px-0">
                      <p>
                        Our expert team is having a decade of expertise in
                        Microsoft Industry Modules. It doesn’t if it’s about
                        your Sales, Marketing, Supply chain, Finance, or
                        managing the whole business, we have all the solution.
                        With modernize solution, Make your repetitive task,
                        Automatic. Make a business Apps with no-coding
                        experience. Imagine the whole business in a data form
                        and you can get it on one click and make data centric
                        decision for your business.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:px-0 px-2">
                      <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                        <div className="text-gray-800 text-center">
                          <p>
                            Data-Driven Supply Chain Optimization and
                            Operational Efficiency
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                        <div className="text-gray-800 text-center">
                          <p>
                            End-to-End Project Management for Strategic
                            Execution
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                        <div className="text-gray-800 text-center">
                          <p>
                            Global Compliance Support to Navigate Complex
                            Regulations
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                        <div className="text-gray-800 text-center">
                          <p>
                            Strategic Advisor to CIOs: Empowering Technology
                            Leadership
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-[100%]">
                    <div>
                      <img
                        src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="industries_one"
                        width="612"
                        height="512"
                        className="rounded lg:block hidden"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="industries_two"
                        className="rounded lg:hidden block w-[90%]"
                      />
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

export default Industries;
