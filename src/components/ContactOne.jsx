import React, { useState } from 'react'
import usa from "../assets/usa.svg";
import india from "../assets/india.svg";
import CalendarBooking from './CalendarBooking';

const ContactOne = () => {




    return (
        <div className="pt-24 pb-16">
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
                                            Contact Us
                                        </h3>
                                    </div>
                                    <div className="md:w-24 w-20 h-1 border-b-2 border-[#B31942] mt-[1px]"></div>
                                </div>

                                <div className="text-gray-600 text-center">
                                    <p>
                                        Reach out to us for tailored solutions, expert guidance,
                                        and dedicated support to drive your business success
                                        forward.
                                    </p>
                                </div>
                            </div>

                            <div

                                className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:pt-12"
                            >
                                <div className="flex flex-col space-y-4 mt-8">
                                    <div className="lg:text-start text-center">
                                        <p className="lg:text-4xl text-2xl font-bold text-[#0A3161]">
                                            Got more questions? Simply fill out this form, and we’ll
                                            get back!
                                        </p>
                                    </div>
                                    <div className="lg:text-start text-center">
                                        <p className=" text-base text-gray-600 md:text-start text-center">
                                            Have questions or need assistance? Share your queries
                                            here, and our dedicated team will provide a prompt
                                            response within 24 hours to ensure your needs are met
                                            seamlessly.
                                        </p>
                                    </div>

                                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                        <div>
                                            <div className="flex lg:justify-start justify-center">
                                                <img
                                                    src={india}
                                                    alt="india"
                                                    className="lg:w-40 lg:h-40 h-auto w-[60%]"
                                                />
                                            </div>
                                            <div className="text-gray-600 flex flex-col lg:items-start items-center">
                                                <p>1-53, P NO.27, SY NO.41/P,</p>
                                                <p>42/P Guttala, Begumpet,</p>
                                                <p>Hyderabad, India-500016</p>
                                                {/* <p>Phone: +91 877 2289 456</p> */}
                                                <a
                                                    href="mailto:info@alchemindssolutions.com"
                                                    className="underline text-blue-600"
                                                >
                                                    info@trescorsolutions.com
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex lg:justify-start justify-center">
                                                <img
                                                    src={usa}
                                                    alt="usa"
                                                    className="lg:w-40 lg:h-40 h-auto w-[60%]"
                                                />
                                            </div>
                                            <div className="text-gray-600 flex flex-col lg:items-start items-center">
                                                <p>530 Technology Drive,</p>
                                                <p>Irvine, California,</p>
                                                <p>United States-92614</p>
                                                {/* <p>Phone: +1 404 508 5757</p> */}
                                                <a
                                                    href="mailto:info@clouddatanetworks.com"
                                                    className="underline text-blue-600"
                                                >
                                                    info@axseva.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <CalendarBooking />




                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ContactOne