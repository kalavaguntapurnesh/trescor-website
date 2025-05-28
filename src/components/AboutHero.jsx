import React from 'react'
import { ImPower } from "react-icons/im";
import { FaFlag } from "react-icons/fa6";
import worldMap from "../assets/worldmap.jpg";
import innovation from "../assets/comm.png";
import handshare from "../assets/globe.png";
import growth from "../assets/students.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import star from "../assets/star.svg"

const AboutHero = () => {


  const values1 = [
    {
      icon: innovation,
      Title: "Seamless Integration",
      description:
        " We specialize in integrating Dynamics 365 Finance with your existing systems and workflows, minimizing disruptions and maximizing productivity",
    },
    {
      icon: growth,
      Title: "Team of Professionals",
      description:
        "  Our certified consultants bring years of experience and deep expertise in financial systems, guaranteeing a smooth and efficient implementation process.",
    },
    {
      icon: handshare,
      Title: "Future-Proof Solutions",
      description:
        "We design implementations with scalability in mind, so your financial systems can grow and adapt alongside your business.",
    },
  ];

  return (
    <div>
      <div className="lg:pt-24 pt-20 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="lg:py-12 lg:px-0 px-2 py-8">
                  <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                    <div className="flex flex-col space-y-6 w-full">
                      <div className="flex flex-wrap flex-col lg:items-start items-center">
                        <p className="uppercase font-bold text-sm text-[#B31942]">
                          About TRESCor
                        </p>
                        <div>
                          <p className="lg:text-4xl text-3xl text-start font-bold text-[#0A3161] leading-relaxed pt-2">
                            Empowering a Brighter Financial Future Together
                          </p>
                        </div>
                      </div>

                      <div className="text-start text-base text-gray-600 lg:leading-normal">
                        <p>
                          Trescor  is engaged in solving critical business problems
                          through digital transformation and innovative cloud
                          technology solutions. We are not only helping businesses
                          become resilient but also empowering them to stay ahead of
                          the curve.
                        </p>
                        <p className='pt-2'>
                          This powerful platform has the capacity to revolutionize
                          the way you manage your financial operations, providing
                          real-time insights, automating complex processes, and
                          enabling strategic decision-making like never before
                          through a thoughtful, customized implementation—one that
                          aligns perfectly with your unique business needs and
                          goals.
                        </p>
                      </div>

                      <div className="flex lg:justify-start justify-center items-center pb-4 pt-2">
                        <a
                          href="/contact"
                          className="relative flex h-[50px] md:w-60 w-3/4 items-center bg-white border-[#0A3161] text-[#0A3161] justify-center overflow-hidden border  transition-all before:absolute before:h-0 before:w-0  before:bg-[#B31942] hover:text-white hover:border-[#B31942] before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                        >
                          <span className="relative z-10 text-base">
                            Contact our team
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="flex justify-center items-center w-[100%]">
                      <div className="lg:block hidden">
                        <img
                          src="https://images.pexels.com/photos/8199708/pexels-photo-8199708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="support_one"
                          // width="612"
                          // height="512"
                          className="rounded w-auto h-auto object-cover"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          src="https://images.pexels.com/photos/8199708/pexels-photo-8199708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="support_two"
                          className="rounded lg:hidden block w-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-12">
                    <div className="bg-[#f8f9fa] rounded px-6 py-4 shadow">
                      <div className="space-y-2 text-start md:mx-4">
                        <div className="flex items-center justify-start">

                          <ImPower className="text-[#0A3161] " />
                          <p className="ml-2 text-lg font-bold text-[#0A3161] ">
                            Our Mission
                          </p>
                        </div>
                        <div className="text-gray-600 mb-2">
                          <p>
                            To help you transform your financial operations, so you
                            can focus on what you do best—growing your business. We
                            believe that with the right tools and the right partner,
                            there's no limit to what you can achieve.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded px-6 py-4 shadow">
                      <div className="space-y-2 text-start md:mx-4">
                        <div className="flex items-center justify-start ">
                          {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                          <FaFlag className="text-[#0A3161]" />
                          <p className="ml-2 text-lg font-bold text-[#0A3161] ">
                            Our Vision
                          </p>
                        </div>
                        <div className="text-gray-600 mb-2">
                          <p>
                            To empower businesses to reach their full potential
                            through innovative financial technology solutions. In
                            today's dynamic and competitive marketplace, having a
                            robust financial management system isn't just an
                            advantage—it's a necessity.
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
      </div>


      <div className="pt-6">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div
                  className="space-y-3"
                >
                  <div className="flex flex-wrap flex-col items-center pb-3">
                    <div className="text-center mt-4">
                      <h3 className="lg:text-3xl text-2xl font-bold text-[#0A3161]">
                        About Trescor Solutions
                      </h3>
                    </div>
                    <div className="md:w-28 w-20 h-1 border-b-[2px] border-[#B31942] mt-[1px]"></div>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Our certified consultants bring years of experience
                      and deep expertise in financial systems, guaranteeing
                      a smooth and efficient implementation process.
                    </p>
                  </div>
                </div>

                <div

                  id="world-map"
                  className="max-w-[1100px] my-0 mx-auto p-4 relative mt-6"
                >
                  <img
                    src={worldMap}
                    alt="map"
                    className="w-[100%] h-[100%] object-contain"
                  />
                  <div class="pin usa">
                    <span>United States</span>
                  </div>


                  <div class="pin china">
                    <span>India</span>
                  </div>
                </div>


                {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-16'>


                  <div class="w-[100%] bg-white border border-gray-200 rounded shadow">
                    <a href="#">
                      <img class="rounded" src="https://images.pexels.com/photos/7653990/pexels-photo-7653990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 lg:text-2xl text-xl font-bold text-[#0A3161] ">Improved Cost Saving</h5>
                      </a>
                      <p class="mb-3 text-gray-600 md:text-base text-sm"> Businesses that have upgraded to Dynamics 365 have
                        reported improved cost savings while limiting
                        resources.</p>
                      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium rounded text-center text-white bg-[#f65314]">
                        Read more
                        <svg class="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>


                  <div class="w-[100%] bg-white border border-gray-200 rounded shadow">
                    <a href="#">
                      <img class="rounded" src="https://images.pexels.com/photos/7653990/pexels-photo-7653990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 lg:text-2xl text-xl font-bold text-[#0A3161] ">Businesses Meet Targets</h5>
                      </a>
                      <p class="mb-3 text-gray-600 md:text-base text-sm">  Different businesses have achieved the expected ROI
                        on time after the successful implementation of
                        Dynamics 365.</p>
                      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium rounded text-center text-white bg-[#f65314]">
                        Read more
                        <svg class="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>



                  <div class="w-[100%] bg-white border border-gray-200 rounded shadow">
                    <a href="#">
                      <img class="rounded" src="https://images.pexels.com/photos/7653990/pexels-photo-7653990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 lg:text-2xl text-xl font-bold text-[#0A3161] ">Noteworthy technology acquisitions 2021</h5>
                      </a>
                      <p class="mb-3 text-gray-600 md:text-base text-sm">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium rounded text-center text-white bg-[#f65314]">
                        Read more
                        <svg class="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>








                </div> */}

                <div className="pt-12 pb-16">
                  <div className="relative">
                    <div className="w-full">
                      <div className="w-full mx-auto max-w-[1400px] ">
                        <div className="p-4">
                          <div

                            className="space-y-3"
                          >
                            <div className="flex flex-wrap flex-col items-center pb-3">
                              <div className="text-center mt-4">
                                <h3 className="lg:text-4xl text-2xl font-bold text-[#0A3161]">
                                  An Unmatched Experience
                                </h3>
                              </div>
                              <div className="md:w-40 w-32 h-1 border-b-2 border-[#B31942] mt-1"></div>
                            </div>

                            <div className="text-gray-600 text-center">
                              <p>
                                Trescor Software Solutions is the leading Microsoft solution partner, offering
                                future-ready business solutions to global organizations.
                              </p>
                            </div>
                          </div>

                          <div

                            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8"
                          >
                            {values1.map((value, index) => (
                              <div
                                key={index}
                                className="flex md:justify-start justify-center"
                              >
                                <div className="w-full bg-white border border-gray-200 rounded p-6">
                                  <div className="space-y-3">
                                    <div className="flex justify-center items-center">
                                      <img
                                        src={value.icon}
                                        alt="about_one"
                                        className="w-[80px] h-[80px]"
                                      />
                                    </div>

                                    <div className="flex justify-center items-center">
                                      <h1 className="text-2xl text-[#0A3161] font-bold text-center">
                                        {value.Title}
                                      </h1>
                                    </div>
                                    <div className="flex justify-center  items-center text-gray-600 text-center">
                                      <p>{value.description}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>


                          <div

                            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8"
                          >

                            <div className='col-span-2 bg-[#f2f2f3] rounded-xl py-4 px-6'>

                              <div className='text-2xl py-6 lg:text-3xl font-bold text-[#0A3161]'>
                                <h1>Sumanth Dama</h1>
                              </div>

                              <div className='text-gray-600'>
                                <p>  When I founded AXSeva, my vision was clear: to empower
                                  businesses to reach their full potential through
                                  innovative financial technology solutions. In today's
                                  dynamic and competitive marketplace, having a robust
                                  financial management system isn't just an advantage—it's
                                  a necessity. That's why we've dedicated ourselves to
                                  mastering Microsoft Dynamics 365 Finance & Operations.</p>
                              </div>

                              <div className='flex flex-row justify-between items-center py-4 '>
                                <p className='text-lg text-gray-600'>Follow me on social media:</p>

                                <div className='flex flex-row items-center space-x-4'>

                                  <a href="" className="flex lg:justify-start justify-center items-center">
                                    <FaLinkedin
                                      size={26}
                                      className="cursor-pointer text-[#555]"
                                    />
                                  </a>

                                  <a href="" className="flex lg:justify-start justify-center items-center">
                                    <FaInstagram
                                      size={26}
                                      className="cursor-pointer text-[#555]"
                                    />
                                  </a>

                                  <a href="" className="flex lg:justify-start justify-center items-center">
                                    <FaFacebook
                                      size={26}
                                      className="cursor-pointer text-[#555]"
                                    />
                                  </a>{" "}




                                </div>

                              </div>

                              <div className='border-b border-gray-400 py-4'>

                              </div>

                              <div className='py-4 text-gray-600'>

                                <p className='lg:text-start text-center'>Expertise:</p>

                                <div className='pt-2 flex lg:flex-row gap-2 flex-col items-center justify-between'>
                                  <div className='flex flex-row items-center'>
                                    <img src={star} alt="star" className='w-6 h-6' />
                                    <h1 className='ml-2'>Dynamics 365 Expert</h1>

                                  </div>

                                  <div className='flex flex-row items-center'>
                                    <img src={star} alt="star" className='w-6 h-6' />
                                    <h1 className='ml-2'>Dynamics 365 Expert</h1>

                                  </div>

                                  <div className='flex flex-row items-center'>
                                    <img src={star} alt="star" className='w-6 h-6' />
                                    <h1 className='ml-2'>Dynamics 365 Expert</h1>

                                  </div>
                                </div>

                              </div>


                            </div>

                            <div className='col-span-1 border-2 border-blue-500'>

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
        </div>
      </div>
    </div>
  )
}

export default AboutHero