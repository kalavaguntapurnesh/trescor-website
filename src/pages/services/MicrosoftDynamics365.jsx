import React from "react";
import Footer from './../../components/Footer';
import SecNavbar from './../../components/SecNavbar';
import FOne from "../../assets/FOne.webp"
import FTwo from "../../assets/FTwo.webp"
import FThree from "../../assets/FThree.webp"
import FFour from "../../assets/FFour.webp"
import FFive from "../../assets/FFour.webp"
import FSix from "../../assets/FSix.webp"
import CPI from "../../assets/CPI.png"
import Lock from "../../assets/Lock.png"
import Sales from "../../assets/Sales.png"
import Maintenance from "../../assets/Maintenance.png"
import Growing from "../../assets/Growing.png"
import ScrollToTop from "../../components/ScrollToTop";

const MicrosoftDynamics365 = () => {
    const services = [
        {
            imageUrl: FOne,
            title: "Enhanced Collaboration",
            description:
                "Enhanced collaboration in Business Intelligence analytics fosters teamwork by enabling real-time data sharing, streamlined workflows, and unified insights, driving informed decisions and aligning cross-functional teams for improved organizational performance and agility.",
        },
        {
            imageUrl:
                FTwo,
            title: "Operational Efficiency",
            description:
                "Business Intelligence (BI) analytics enhances operational efficiency by providing real-time insights, streamlining processes, optimizing resource allocation, reducing costs, and enabling data-driven decisions for improved productivity and strategic growth.",
        },
        {
            imageUrl:
                FThree,
            title: "Seamless integration",
            description:
                "Seamless integration of business intelligence analytics enables organizations to unify data, streamline decision-making, and enhance operational efficiency by embedding advanced insights directly into workflows, tools, and processes for actionable outcomes.",
        },
        {
            imageUrl:
                FFour,
            title: "Customer Satisfaction",

            description:
                "Customer satisfaction in business intelligence analytics reflects how effectively analytics tools meet user needs by providing actionable insights, improving decision-making, and enhancing operational efficiency, ultimately driving business growth and success.",
        },
        {
            imageUrl:
                FFive,
            title: "Demand Forecasting",

            description:
                "Demand forecasting in business intelligence analytics leverages historical data, machine learning, and statistical methods to predict future demand, enabling informed decision-making, inventory optimization, and enhanced operational efficiency for businesses.",
        },
        {
            imageUrl:
                FSix,
            title: "Real Time Insights",

            description:
                "Real-time business intelligence analytics delivers instant insights by processing live data streams, enabling swift decision-making, proactive responses, improved efficiency, and a competitive edge through continuous monitoring and dynamic visualization.",
        },
    ];
    return (
        <div>

            <SecNavbar />
                <ScrollToTop />

            {/* section 2 */}
            <div className="w-full lg:pt-36 pt-28 pb-8 select-none">
                <div className="relative">
                    <div className="max-w-[1400px] mx-auto px-4 sm-px-6 ">
                        <div className="flex flex-col gap-4 space-y-8">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                {/* grid 1 */}
                                <div

                                    className="flex flex-col space-y-8 w-full justify-center"
                                >
                                    <div className="flex items-center lg:justify-start justify-center ">

                                        <h1 className="uppercase font-bold text-[#B31942] ">
                                            Dynamics 365 Supply Chain
                                        </h1>
                                    </div>
                                    <div className="lg:text-4xl text-3xl
                                     text-center text-[#0A3161] lg:text-start font-bold">
                                        Trescor Transforming
                                        Businesses with Enterprise Solutions
                                    </div>

                                    <p className="text-gray-600 lg:text-start text-sideHeading">
                                        Microsoft Dynamics 365 Enterprise represents the future of
                                        intelligent business applications, empowering organizations
                                        to innovate, grow, and adapt in an ever-changing landscape.
                                        At Trescor, we harness the power of Dynamics 365 to deliver
                                        tailored solutions that drive transformation. By unifying
                                        CRM functionalities, Microsoft Dynamics 365 Business
                                        Editions offers purpose-built applications designed to
                                        seamlessly integrate and optimize specific business
                                        processes. This unified approach enables organizations to
                                        meet customer demands effectively, seize new opportunities,
                                        and achieve sustainable success with confidence.
                                    </p>

                                    <div className="lg:flex items-center lg:justify-start justify-center hidden">
                                        <a
                                            href="https://www.linkedin.com/in/sumanthdama/"
                                            class="relative h-[50px] w-48 mt-2 flex items-center justify-center overflow-hidden border border-[#0A3161] text-[#0A3161] transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#0A3161] before:duration-300 before:ease-out hover:text-white hover:shadow-[#0A3161] hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                                        >
                                            <span class="relative z-10">Know More</span>
                                        </a>
                                    </div>

                                    <div className="mx-8 lg:hidden block">
                                        <a
                                            href="https://www.linkedin.com/in/sumanthdama/"
                                            className="bg-[#0A3161] flex items-center justify-center hover:bg-white hover:text-[#0A3161] hover:border-[1px] hover:border-[#0A3161] outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                                {/* grid 2 */}

                                <div

                                    className="flex flex-col space-y-6 w-full"
                                >
                                    <div className="flex justify-center lg:justify-start w-full h-full">
                                        <img
                                            src="https://www.tectura.com/wp-content/uploads/2023/01/Mask-Group-30.png"
                                            // src={sc_one}
                                            className="h-auto lg:w-[95%] w-auto"
                                            alt="one"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3 */}

            <div className="w-full pt-20 pb-8  select-none">
                <div className="relative">
                    <div className="max-w-[1400px] mx-auto px-4 sm-px-6 ">
                        <div className="flex flex-col gap-2 space-y-3">

                            <div className="flex flex-wrap flex-col items-center">
                                <div className="text-center mt-4">
                                    <h3 className="lg:text-3xl text-2xl font-bold text-[#0A3161]">
                                        Features of our BI Analytics
                                    </h3>
                                </div>
                                <div className="md:w-28 w-20 h-1 border-b-[2px] border-[#B31942] mt-[1px]"></div>
                            </div>

                            <div

                            >
                                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                                    {services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="p-6 border border-gray-200 space-y-4 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-2   bg-transparent"
                                        >
                                            <div className="text-3xl text-[#0A3161] mb-4 flex justify-center">
                                                {/* Optional: You can remove the icon if not used */}
                                            </div>
                                            <div className="flex justify-center items-center  bg-transparent ">
                                                {/* Replace image URLs with actual URLs for the service */}
                                                <img
                                                    src={service.imageUrl} // Assuming each service object has an 'imageUrl' property
                                                    alt="icon"
                                                    className="w-[30%] h-[30%] object-cover none  "
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold text-center text-[#0a3161]">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-700 text-center">
                                                {service.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 4 */}

            <div className="w-full pt-16 pb-12 select-none">
                <div className="relative">
                    <div className="max-w-[1400px] mx-auto px-4 sm-px-6 ">
                        <div className="flex flex-col gap-4 space-y-8">

                            <div className="flex flex-wrap flex-col items-center">
                                <div className="text-center mt-4">
                                    <h3 className="lg:text-3xl text-2xl font-bold text-[#0A3161]">
                                        Accelerate impact and drive efficiency with Microsoft Dynamics
                                        365
                                    </h3>
                                </div>
                                <div className="md:w-40 w-20 h-1 border-b-[2px] border-[#B31942] mt-[1px]"></div>
                            </div>

                            <div

                                className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4 lg:h-[300px] "
                            >
                                <div className="shadow rounded border border-gray-200 flex flex-col items-center justify-center space-y-4 w-full p-4">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={CPI}
                                            className="w-24 h-24 object-cover  "
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="text-gray-600 text-center ">
                                        Drive more revenue by connecting sales and marketing
                                    </p>
                                </div>

                                <div className="shadow rounded border border-gray-200  flex flex-col items-center justify-center space-y-4 w-full p-4 ">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={Growing}
                                            className="w-24 h-24 object-cover  "
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="text-gray-600 text-center ">
                                        Build finance and business operation agility
                                    </p>
                                </div>

                                <div className="shadow rounded border border-gray-200 flex flex-col items-center justify-center space-y-4 w-full p-4 ">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={Lock}
                                            className="w-24 h-24 object-cover  "
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="text-gray-600 text-center ">
                                        Adapt and thrive with a digital supply chain
                                    </p>
                                </div>

                                <div className="shadow rounded border border-gray-200 flex flex-col items-center justify-center space-y-4 w-full p-4 ">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={Sales}
                                            className="w-24 h-24 object-cover  "
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="text-gray-600 text-center ">
                                        Reimagine the way you deliver customer service
                                    </p>
                                </div>

                                <div className="shadow rounded border border-gray-200 flex flex-col items-center justify-center space-y-4 w-full p-4 ">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={Maintenance}
                                            className="w-24 h-24 object-cover  "
                                            alt="icon"
                                        />
                                    </div>
                                    <p className="text-gray-600 text-center ">
                                        Innovate, scale and drive business growth
                                    </p>
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

export default MicrosoftDynamics365;