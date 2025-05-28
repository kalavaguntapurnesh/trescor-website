import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import One from "../assets/One.svg";
import Two from "../assets/Two.svg";
import Three from "../assets/Three.webp";
import Four from "../assets/Four.svg";
import HandsOn from "../assets/comm.png"
import career from "../assets/career.png"
import expert from "../assets/students.png"
import World from "../assets/globe.png"
import graph from "../assets/investment.png"
import Finance from "../assets/Finance.png"
import Lock from "../assets/Lock.png"
import settings from "../assets/Maintenance.png"
import business from "../assets/business.png"
import CPI from "../assets/CPI.png"


const Carousel = () => {


  const values1 = [
    {
      icon: World,
      Title: "Worldwide Accessiblity",
      description:
        "Wherever you are, our online platform brings world-class services right to your doorstep.",
    },
    {
      icon: HandsOn,
      Title: "Hands-On Working",
      description:
        "We emphasize application-based training with projects, case studies, and real-world simulations.",
    },
    {
      icon: career,
      Title: "Career-Centric Approach",
      description:
        "Our services are designed to help you not just learn but launch and grow your career.",
    },

    {
      icon: expert,
      Title: "Expert Handlers",
      description:
        "Learn from trainers with 10+ years of real industry experience who focus on practical, industry skills.",
    },
    {
      icon: CPI,
      Title: "Continuous Innovation",
      description:
        "Our services are designed to help you not just learn but launch and grow your career.",
    },
    {
      icon: Lock,
      Title: "Trusted Community",
      description:
        "Join a thriving network of learners, mentors, and success stories growing stronger every day.",
    },
  ];

  return (
    <div>
      <div className="relative select-none">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] pb-12">
            <div className="w-full px-4 mx-auto max-w-[1400px] mt-12">

              <div className="flex flex-wrap flex-col items-center pb-3">
                <div className="text-center mt-4">
                  <h3 className="lg:text-4xl text-2xl font-bold text-[#0A3161]">
                    Explore Our Range of Products
                  </h3>
                </div>
                <div className="md:w-40 w-20 h-1 border-b-2 border-[#B31942] mt-[1px]"></div>
              </div>



              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="text-center mt-4"
              >
                <p className="leading-relaxed tracking-wide font-normal text-base text-gray-600 dark:text-gray-800 ">
                  Discover the Comprehensive Suite of Microsoft Dynamics 365 and
                  other Microsoft Solutions for Your Business Transformation
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-8"
              >
                <div className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-2">
                      <div className="flex justify-start items-center mt-2">
                        <img src={One} alt="c_twelve" className="lg:w-14 lg:h-14 w-12 h-12" />
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
                        <img src={Two} alt="c_thirteen" className="lg:w-14 lg:h-14 w-12 h-12" />
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
                        <img src={Four} alt="c_fifteen" className="lg:w-14 lg:h-14 w-12 h-12" />
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
              </motion.div>


            </div>


            <div className="pt-16">
              <div className="bg-white">
                <div className="w-full ">
                  <div className="w-full px-4 mx-auto max-w-[1400px]">
                    <div className="justify-center w-full ">
                      <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                        <div className="items-center px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
                          <motion.div
                            variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            className="col-span-2 mb-8 space-y-3"
                          >
                            <div className="flex items-center lg:justify-start justify-center ">

                              <p className="uppercase font-bold text-[#B31942] ">
                                Why Trescor is best?
                              </p>
                            </div>
                            <h3 className="text-4xl font-bold text-[#0A3161] lg:text-start text-center">
                              Empowering Business Innovation through Deep Expertise.
                            </h3>

                            <div className="lg:text-start text-center mt-4 mb-1">
                              <p className=" text-base text-gray-600">
                                Trescor specializes in Dynamics AX
                                implementations with core focus on Dynamics AX +
                                Analytics. Our expertise with Dynamics AX
                                includes customization in X++, Business
                                intelligence with SSRS, Analytics with OLAP,
                                Power BI and AX Integration with external
                                systems.
                              </p>
                            </div>
                            <div className=" mt-6 space-y-4">
                              <div className="flex lg:justify-start justify-center items-center pb-4">
                                <a
                                  href="/contact-trescor"
                                  className="relative flex h-[50px] md:w-60 w-3/4 items-center bg-[#0A3161] border-[#0A3161] text-white justify-center overflow-hidden border  transition-all before:absolute before:h-0 before:w-0  before:bg-[#B31942] hover:text-white hover:border-[#B31942] before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                                >
                                  <span className="relative z-10">
                                    Request a Demo
                                  </span>
                                </a>
                              </div>
                            </div>
                          </motion.div>
                          <motion.div
                            variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
                          >
                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src={graph}
                                alt="c_sixteen"
                                className="w-20 h-20 mb-2 text-mainColor"
                              />
                              <h4 className="mb-2 text-2xl lg:text-start text-center font-bold text-[#0A3161] ">
                                Business Intelligence Analytics
                              </h4>
                              <p className=" text-gray-600 lg:text-start text-center">
                                Seamless integration with apps, data and
                                processes.
                              </p>
                            </div>
                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src={Finance}
                                alt="c_seventeen"
                                className="w-16 h-16 mb-2 text-mainColor"
                              />
                              <h4 className="mb-2 text-2xl font-bold lg:text-start text-center text-[#0A3161]">
                                Dynamic 365 Finance & Operations
                              </h4>
                              <p className=" text-gray-600 lg:text-start text-center">
                                Turn relevant and timely business data into
                                actionable insights.
                              </p>
                            </div>

                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src={business}
                                className="w-16 h-16 mb-2 text-mainColor"
                                alt="carousel_one"
                              />
                              <h4 className="mb-2 text-2xl text-[#0A3161] font-bold lg:text-start text-center">
                                Support & Managed Services
                              </h4>
                              <p className=" text-gray-600 lg:text-start text-center">
                                Ongoing support and partnership after the
                                go-live activities.
                              </p>
                            </div>

                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src={settings}
                                className="w-16 h-16 mb-2 text-mainColor"
                                alt="carousel_two"
                              />
                              <h4 className="mb-2 text-2xl text-[#0A3161] font-bold md:text-start text-center">
                                Tailoring Applications in X++
                              </h4>
                              <p className=" text-gray-600 md:text-start text-center">
                                Tailoring Dynamics AX to meet specific business
                                requirements.
                              </p>
                            </div>
                          </motion.div>
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
                        <div className="flex flex-wrap flex-col items-center pb-3">
                          <div className="text-center mt-4">
                            <p className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                              Our Core Values
                            </p>
                          </div>
                          <div className="w-32 h-1 border-b-2 border-[#B31942] mt-[1px]"></div>
                        </div>

                        <div className="text-gray-600 text-center">
                          <p>
                            Trescor is engaged in solving critical business problems
                            through digital transformation and innovative cloud
                            technology solutions. We are not only helping businesses
                            become resilient but also empowering them to stay ahead of
                            the curve.
                          </p>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                        {values1.map((value, index) => (
                          <div
                            key={index}
                            className="flex md:justify-start justify-center"
                          >
                            <div className="w-full bg-white border border-gray-200 rounded p-6">
                              <div className="space-y-2">
                                <div className="flex justify-center items-center">
                                  <img
                                    src={value.icon}
                                    alt={value.Title}
                                    className="w-20 h-20"
                                  />
                                </div>

                                <div className="flex justify-center items-center">
                                  <p className="text-2xl text-[#0A3161] font-bold text-center">
                                    {value.Title}
                                  </p>
                                </div>
                                <div className="flex justify-center items-center text-gray-600 text-center">
                                  <p>{value.description}</p>
                                </div>
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











          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;