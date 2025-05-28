import React from 'react'
import usa from "../assets/usa.svg";
import india from "../assets/india.svg";

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
                                <div>
                                    <div className="mx-2">
                                        <form
                                            // onSubmit={handleSubmit}
                                            className="mt-8 lg:p-6 lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded"
                                        >
                                            <div className="w-full grid grid-cols-1 md:gap-4">
                                                <div className="mb-3 w-full">
                                                    <label
                                                        htmlFor="fullname"
                                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                                    >
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="fullname"
                                                        id="fullname"
                                                        // onChange={(e) => setFullName(e.target.value)}
                                                        placeholder="Your Full Name"
                                                        className="w-full rounded bg-[#f0f0f0] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-5 w-full">
                                                <label
                                                    htmlFor="email"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    // onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Your Email"
                                                    className="w-full rounded bg-[#f0f0f0] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                                                />
                                            </div>

                                            <div className="mb-5 w-full">
                                                <label
                                                    htmlFor="phoneNumber"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="phoneNumber"
                                                    id="phoneNumber"
                                                    // onChange={(e) => setPhoneNumber(e.target.value)}
                                                    placeholder="Your Phone Number"
                                                    className="w-full rounded bg-[#f0f0f0] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                                                />
                                            </div>

                                            <div className="mb-3 w-full">
                                                <label
                                                    htmlFor="message"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    rows="4"
                                                    name="message"
                                                    id="message"
                                                    // onChange={(e) => setMessage(e.target.value)}
                                                    placeholder="Let us know if you’d like to schedule a meeting, discuss opportunities, or have any questions. We're here to help!"
                                                    className="w-full resize-none rounded bg-[#f0f0f0] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                                                ></textarea>
                                            </div>


                                            <button
                                                type="submit"
                                                className="relative flex h-[50px] w-full items-center justify-center overflow-hidden bg-[#0A3161] border border-[#0A3161] text-white transition-all before:absolute before:h-0 before:w-0 before:bg-white hover:text-[#0A3161] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-full rounded font-medium"
                                            >
                                                <span className="relative z-10">Submit</span>
                                            </button>
                                        </form>
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

export default ContactOne