import React from "react";
import Footer from "./../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AboutHero from "./../components/AboutHero";
import SecNavbar from "./../components/SecNavbar";

const UserConsent = () => {
  return (
    <div>
      <SecNavbar />
      <ScrollToTop />

      <div className="pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-6 mx-auto">
              <div className="p-4">
                <section className="py-4">
                  <div className="flex flex-wrap flex-col items-center">
                    <div className="text-center mt-4">
                      <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161] mb-2">
                        User Consent Policy
                      </h3>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#F14F21] via-[#7EB900] to-[#00A3EE] rounded-full"></div>
                  </div>
                  <div className="relative flex my-6 items-center mx-4">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">
                      Effective from November 2025
                    </span>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>

                  <div className="px-4 space-y-6   text-[#43474e]">
                    <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                      1. Introduction
                    </h3>

                    <p className="mb-2 text-gray-600">
                      This User Consent Policy explains how Trescor Software
                      Solutions (“we”, “our”, “us”) collects, stores, and uses
                      user information submitted through our website. We provide
                      Microsoft Dynamics 365 services, and our digital platforms
                      are designed to offer a secure and transparent experience.
                      This policy outlines how user data is collected, the
                      purpose of collection, and how consent is obtained.
                    </p>

                    <p className="mb-2 text-gray-600">
                      By using our website and submitting your information
                      through the Contact Us form, you acknowledge, understand,
                      and consent to the practices described in this policy.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                      2. Data We Collect
                    </h3>

                    <p className="mb-2 text-gray-600">
                      Trescor Software Solutions collects only the minimum data
                      required to communicate with users who reach out to us
                      through our website. The information we collect is:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Business Name</li>
                      <li>Business Email</li>
                    </ul>

                    <p className="mb-2 text-gray-600">
                      These details are collected exclusively when a user
                      voluntarily fills out the Contact Us form available on our
                      website. We do not collect personal or business
                      information automatically or from any external sources.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                      3. Purpose of Data Collection
                    </h3>

                    <p className="mb-2 text-gray-600">
                      The information collected is used solely for communication
                      and service-related purposes. Specifically, your data
                      helps us to:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        Respond to business inquiries submitted through the
                        Contact Us form
                      </li>
                      <li>
                        Provide requested information about our Microsoft
                        Dynamics 365 services
                      </li>
                      <li>
                        Arrange consultations, demos, or follow-up discussions
                        when requested
                      </li>
                      <li>
                        Maintain accurate records of communication for customer
                        service support
                      </li>
                    </ul>

                    <p className="mb-2 text-gray-600">
                      We do not use this data for marketing purposes without
                      explicit consent, nor do we sell, rent, or share it with
                      unaffiliated third parties.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                      4. How User Consent Is Obtained
                    </h3>

                    <p className="mb-2 text-gray-600">
                      Consent is obtained directly from users at the time they
                      choose to fill out and submit the Contact Us form. By
                      providing your business name and business email, you are
                      voluntarily agreeing to:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>The collection of the information you submit</li>
                      <li>
                        Our use of this information to respond to your inquiry
                      </li>
                      <li>
                        Storing your information securely for communication
                        purposes
                      </li>
                    </ul>

                    <p className="mb-2 text-gray-600">
                      Users are informed that submitting the form is optional,
                      and they may choose not to provide information if they do
                      not wish to be contacted.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                      5. Managing or Withdrawing Consent
                    </h3>

                    <p className="mb-2 text-gray-600">
                      Users have the right to withdraw consent or request
                      deletion of their submitted information at any time. If
                      you wish to withdraw your consent or update/remove your
                      business name or email, you may contact us using the
                      details below:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        Email:{" "}
                        <a
                          className="underline text-blue-500"
                          href="mailto:support@trescorsoftwaresolutions.com"
                        >
                          support@trescorsoftwaresolutions.com
                        </a>
                      </li>
                      <li>
                        Address:{" "}
                        <a
                          className="underline text-blue-500"
                          href="https://maps.app.goo.gl/bTxVirWoKNPPm1xb6"
                        >
                          530 Technology Drive, Irvine, California, United
                          States-92614
                        </a>
                      </li>
                    </ul>

                    <p className="mb-2 text-gray-600">
                      We will process your request promptly and ensure your data
                      is handled in accordance with applicable privacy
                      standards.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserConsent;
