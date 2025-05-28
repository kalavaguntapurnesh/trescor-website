import React from "react";
import SecNavbar from "./../components/SecNavbar";
import Footer from "./../components/Footer";
import { BiSupport } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import { MdBusiness } from "react-icons/md";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
// import SupportLayout from "./../components/SupportLayout";
// import ContactUsButton from "../components/ContactUsButton";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
const Support = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const values = [
        {
            icon: <BiSupport className="text-[#0A3161] text-4xl" />,
            title: "Immediate help",
            description:
                "Immediate help ensures timely resolutions, minimizing downtime and enhancing productivity. With instant access to expertise, businesses can swiftly address challenges, maintain operational flow, and focus on achieving their goals without unnecessary delays.",
        },
        {
            icon: <GiAlarmClock className="text-[#0A3161] text-4xl" />,
            title: "Prompt assistance",
            description:
                "Prompt assistance ensures swift resolution of issues, minimizing downtime and enhancing productivity. It fosters trust by addressing challenges efficiently, empowering businesses to stay agile, maintain momentum, and deliver seamless operations in competitive environments.",
        },
        {
            icon: <MdBusiness className="text-[#0A3161] text-4xl" />,
            title: "Accelerated support",
            description:
                "Accelerated Support ensures businesses receive timely assistance to address challenges swiftly. By prioritizing speed and efficiency, it minimizes downtime, resolves issues proactively, and empowers teams to maintain seamless operations and focus on growth.",
        },
    ];

    const toggleDescription = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const values1 = [
        {
            icon: <FaCircleArrowRight />,
            Title: "Getting Started",
            description:
                "Getting started, Begin your journey with simple, clear steps forward",
            color: "text-green-500", // Blue color for this icon
        },
        {
            icon: <FaUserAlt />,
            Title: "Business Management",
            description:
                "Manage personal information, security & specific configurations.",
            color: "text-blue-500", // Green color for this icon
        },
        {
            icon: <FaHandPaper />,
            Title: "Trust & Safety",
            description:
                "Ensures platform integrity & compliance against harmful activities.",
            color: "text-yellow-500", // Red color for this icon
        },
        {
            icon: <IoSettings />,
            Title: "Spam Free Support",
            description:
                "Spam Free, Ensuring clean, secure, & reliable digital communication.",
            color: "text-teal-500", // Yellow color for this icon
        },
        {
            icon: <IoIosCheckmarkCircle />,
            Title: "Services Advice",
            description:
                "Deliver reliable, customer-focused solutions with innovation.",
            color: "text-pink-500", // Purple color for this icon
        },
        {
            icon: <GrPersonalComputer />,
            Title: "Where to Find Us",
            description:
                "Discover our location with an interactive map offering geographic insights & navigation guidance.",
            color: "text-violet-500", // Pink color for this icon
        },
    ];

    return (
        <>
            <SecNavbar />

            {/* section 1 */}
            <div className="lg:pt-32 pt-24 select-none">
                <div className="relative">
                    <div className="w-full">
                        <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
                            <div className="flex flex-col space-y-4">




                                <div className="flex flex-wrap flex-col items-center pb-3">
                                    <div className="text-center mt-4">
                                        <h3 className="lg:text-4xl text-2xl font-bold text-[#0A3161]">
                                            Uncover Your Business Scope With Us
                                        </h3>
                                    </div>
                                    <div className="md:w-36 w-20 h-1 border-b-2 border-[#B31942] mt-[1px]"></div>
                                </div>

                                {/* Description */}
                                <div

                                >
                                    <p className="text-gray-600 text-center ">
                                        Trescor specializes in Dynamics AX implementations, offering
                                        expertise in customization, business intelligence,
                                        analytics, and seamless integration, ensuring tailored
                                        solutions for diverse business needs.
                                    </p>
                                </div>
                                {/* Cards Grid */}
                                <div

                                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-10 max-w-full"
                                >
                                    {values1.map((value, index) => (
                                        <div
                                            key={index}
                                            className="flex md:justify-start justify-center"
                                        >
                                            <div className="w-full bg-white border border-gray-200 rounded p-6">
                                                <div className="space-y-3">
                                                    <div
                                                        className={`text-4xl flex justify-center items-center ${value.color}`}
                                                    >
                                                        {value.icon}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className="mt-12 select-none">
                <div className="relative">
                    <div className="w-full">
                        <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                {/* grid 1 */}
                                <div

                                    className="flex justify-center items-center w-[100%]"
                                >
                                    <div>
                                        <img
                                            src="https://www.dynamicssquare.com/_next/image/?url=%2Fimg%2Fsupper-img.png&w=1200&q=75"
                                            alt="support_one"
                                            // width="612"
                                            height="512"
                                            className="rounded lg:block hidden"
                                        />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img
                                            src="https://www.dynamicssquare.com/_next/image/?url=%2Fimg%2Fsupper-img.png&w=1200&q=75"
                                            alt="support_two"
                                            className="rounded lg:hidden block w-[90%]"
                                        />
                                    </div>
                                </div>
                                {/* grid 2 */}
                                <div

                                    className="flex flex-col space-y-6 w-full justify-center"
                                >
                                    <div

                                        className="flex items-center md:justify-start justify-center"
                                    >

                                        <h1 className="uppercase font-bold text-[#B31942] ">
                                            We stand by
                                        </h1>
                                    </div>
                                    <div className="lg:text-4xl text-3xl text-center lg:text-start font-bold text-[#0A3161]">
                                        Dedicated Dynamics 365 Finance & Operations Expert
                                    </div>
                                    <p className="text-gray-600 text-center lg:text-start">
                                        To ensure process continuity, stabilize your process
                                        optimization, and focus on your business scope, enterprises
                                        are required to have an optimal support system. A smoother,
                                        reliable, and productive business flow can be achieved
                                        through dedicated Dynamics 365 Support Services designed for
                                        a specific business model and custom business practices.
                                    </p>
                                    <p className="text-gray-600 text-center lg:text-start">
                                        We can help you to diagnose your support requirement and can
                                        provide proactive support to enable productive and scalable
                                        flow across your organizational structure. Through our
                                        dedicated support services, we can promptly identify your
                                        system issues and can resolve them with accuracy and
                                        reliability.
                                    </p>
                                    <div className="flex justify-center lg:justify-start">
                                        <a
                                            href="/contact"
                                            class="relative h-[50px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-[#0A3161] text-[#0A3161] transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#0A3161] before:duration-300 before:ease-out hover:text-white hover:shadow-[#0A3161] hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded font-medium"
                                        >
                                            <span class="relative z-10">Reach out to us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3 */}

            <div className="lg:pt-20 pt-8 pb-12 select-none">
                <div className="relative">
                    <div className="w-full">
                        <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6">
                            <div>
                                {/* Heading */}
                                <div

                                    className="hidden lg:flex flex-col space-y-4 "
                                >
                                    <div

                                        className="flex items-center justify-center"
                                    >

                                     <h1 className="uppercase font-bold text-[#B31942] ">
                                            Our core support
                                        </h1>
                                    </div>
                                    <div className="lg:text-4xl text-3xl text-[#0A3161] font-bold text-center">
                                        Microsoft Dynamics 365 F & O ecosystem
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-center lg:text-start">
                                        Drive innovative and strategic approach through your
                                        business premises with intelligent connected processes, data
                                        insights, and adaptive Dynamics 365 Finance and Operations.
                                    </p>
                                </div>

                                {/* Grid Section */}
                                <div

                                    className="max-w-[1400px] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 justify-center  pt-12 pb-6"
                                >
                                    {/* grid 1 */}
                                    <div className="flex flex-col space-y-4 w-full justify-start lg:pt-8">
                                        {/* <div className="lg:text-4xl text-3xl text-center lg:text-start font-bold text-[#0A3161]">
                                            We Optimize Operational Efficiency
                                        </div> */}
                                        <p className="text-gray-600 text-center lg:text-start">
                                            "Optimize Operational Efficiency" encapsulates the
                                            transformative power of Dynamics 365 Finance & Operations.
                                            It enables businesses to automate workflows, enhance
                                            decision-making, and seamlessly manage resources,
                                            fostering productivity and driving sustainable growth in
                                            day-to-day operations.
                                        </p>
                                        <p className="text-gray-600 text-center lg:text-start">
                                            Dynamics 365 Finance & Operations simplifies complex
                                            tasks, improves collaboration, reduces manual effort,
                                            accelerates reporting, ensures compliance, and integrates
                                            data, delivering unmatched efficiency and scalability for
                                            businesses to thrive in competitive markets.
                                        </p>
                                    </div>

                                    {/* grid 2 */}
                                    <div>
                                        {values.map((value, index) => (
                                            <div
                                                key={index}
                                                className="p-12 border border-gray-200 rounded-lg shadow"
                                            >
                                                <div
                                                    className="flex items-center justify-between cursor-pointer"
                                                    onClick={() => toggleDescription(index)}
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        {value.icon}
                                                        <h3 className="text-lg font-semibold">
                                                            {value.title}
                                                        </h3>
                                                    </div>
                                                    <div className="text-gray-600 text-xl">
                                                        {openIndex === index ? "▲" : "▼"}
                                                    </div>
                                                </div>
                                                {openIndex === index && (
                                                    <p className="mt-4 text-gray-600">
                                                        {value.description}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div

                                    className="flex justify-center pt-8"
                                >
                                    <a
                                        href="/contact"
                                        class="relative mt-2 flex h-[54px] xl:w-1/4 w-3/4 items-center justify-center overflow-hidden bg-white border border-[#0A3161] text-[#0A3161]  transition-all before:absolute before:h-0 before:w-0  before:bg-[#0A3161] hover:text-white before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                                    >
                                        <span class="relative z-10">
                                            Speak with a Managed Services Expert
                                        </span>
                                    </a>
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

export default Support;