import React from "react";
import usa from "../assets/usa.svg";
import india from "../assets/india.svg";
import CalendarBooking from "./CalendarBooking";

const ContactOne = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br bg-white">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] ">
            <div className="p-4">
              <div className="space-y-6">
                <div className="flex flex-wrap flex-col items-center">
                  <div className="text-center mt-4">
                    <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161] mb-2">
                      Contact Us
                    </h3>
                  </div>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] rounded-full"></div>
                </div>

                <div className="text-gray-600 text-center max-w-full mx-auto">
                  <p className="text-lg leading-relaxed">
                    Our dedicated team is here for you. Whether you have
                    inquiries about cargo status or want to know more about our
                    solutions, please don't hesitate to contact us, and we will
                    be delighted to assist you.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:pt-16 pt-8">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="lg:text-start text-center">
                    <p className="lg:text-4xl text-3xl font-bold text-[#0A3161] leading-tight">
                      Got more questions? Simply fill out this form, and we'll
                      get back!
                    </p>
                  </div>
                  <div className="lg:text-start text-center">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Have questions or need assistance? Share your queries
                      here, and our dedicated team will provide a prompt
                      response within 24 hours to ensure your needs are met
                      seamlessly.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-white to-green-600"></div>
                      <div className="flex lg:justify-start justify-center mb-4">
                        <img
                          src={india}
                          alt="india"
                          className="md:w-40 md:h-36 h-auto w-[50%] filter drop-shadow-md"
                        />
                      </div>
                      <div className="text-gray-700 flex flex-col lg:items-start items-center space-y-1">
                        <h4 className="text-lg font-semibold text-[#0A3161] mb-2">
                          India Office
                        </h4>
                        <p>1-53, P NO.27, SY NO.41/P,</p>
                        <p>42/P Guttala, Begumpet,</p>
                        <p>Hyderabad, India-500016</p>
                        <a
                          href="mailto:info@trescorsoftwaresolutions.com"
                          className="mt-3 text-[#00A3EE] hover:text-[#0A3161] font-medium transition-colors duration-300"
                        >
                          info@trescorsolutions.com
                        </a>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-white to-blue-600"></div>
                      <div className="flex lg:justify-start justify-center mb-4">
                        <img
                          src={usa}
                          alt="usa"
                          className="md:w-40 md:h-36 h-auto w-[50%] filter drop-shadow-md"
                        />
                      </div>
                      <div className="text-gray-700 flex flex-col lg:items-start items-center space-y-1">
                        <h4 className="text-lg font-semibold text-[#0A3161] mb-2">
                          USA Office
                        </h4>
                        <p>530 Technology Drive,</p>
                        <p>Irvine, California,</p>
                        <p>United States-92614</p>
                        <a
                          href="mailto:info@axseva.com"
                          className="mt-3 text-[#00A3EE] hover:text-[#0A3161] font-medium transition-colors duration-300"
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
  );
};

export default ContactOne;
