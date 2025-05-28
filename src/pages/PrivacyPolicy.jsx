import React, { useEffect } from "react";
import Footer from "../components/Footer";
import SecNavbar from './../components/SecNavbar';
import ScrollToTop from "../components/ScrollToTop";

const PrivacyPolicy = () => {

  return (
    <div>
      <SecNavbar />
      <ScrollToTop />

      <div className="relative lg:pt-32 pt-24 pb-12">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div>
                  <section className="py-8 border border-gray-300 rounded">
                    <div className="py-2">
                      <h1 className="text-center font-bold text-xl text-[#0A3161]">
                        Privacy Policy
                      </h1>
                    </div>

                    <div className="relative flex my-2 items-center mx-4">
                      <div className="flex-grow border-t border-gray-400"></div>
                      <span className="flex-shrink mx-4 text-gray-400 text-sm">
                        Effective from May 2025
                      </span>
                      <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                    <div className="text-center my-2">
                      <h1 className="text-sm text-[#43474e] md:mx-0 mx-1">
                        This Privacy Policy outlines how Trescor collects, uses, stores,
                        and protects personal and non-personal information from its users.
                        By using our website, you agree to the terms of this policy.
                      </h1>
                    </div>

                    <div className="px-4 space-y-6 text-sm text-[#43474e]">
                      <div>
                        <h2 className="text-lg font-semibold">1. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            <strong>Personal Information:</strong> Name, email, contact
                            details, etc., voluntarily provided via forms, subscriptions, or inquiries.
                          </li>
                          <li>
                            <strong>Non-Personal Information:</strong> IP address, device info,
                            browser type, and usage data via cookies and similar tools.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-lg font-semibold">2. How We Use Information</h2>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>To provide and manage services requested by you.</li>
                          <li>To improve website content and user experience.</li>
                          <li>To send promotional emails based on your preferences.</li>
                          <li>To analyze usage trends for platform optimization.</li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-lg font-semibold">3. Data Sharing & Security</h2>
                        <p>We do not sell or rent personal data. We may share it with:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Trusted third-party vendors for website operations.</li>
                          <li>Legal entities when required by law or for legal protection.</li>
                        </ul>
                        <p>
                          We implement security measures, but no system is 100% secure.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-lg font-semibold">4. Your Rights & Choices</h2>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Access or correct your data via your account or contact us.</li>
                          <li>Opt out of emails via unsubscribe links or by contacting us.</li>
                          <li>Request deletion of data (subject to legal obligations).</li>
                        </ul>
                        <p>
                          We may update this policy periodically. Changes will be posted here.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-lg font-semibold">
                          5. Why We Collect Your Information
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>To manage relationships and communication.</li>
                          <li>To improve services and conduct operations.</li>
                          <li>
                            To share updates (with consent), adhering to applicable laws like Canada’s Anti-Spam Legislation.
                          </li>
                          <li>To comply with legal obligations and protect legal rights.</li>
                        </ul>
                      </div>

                      <div>
                        <h2 className="text-lg font-semibold">
                          6. How We Collect Information
                        </h2>
                        <p>
                          We collect data with your consent via website, email, phone,
                          or in person. Occasionally, third-party sources may be used.
                        </p>
                        <p>
                          Anonymous technical data (e.g., IP, device type) may be collected
                          and combined with personal data only under specific conditions
                          such as consent or legal necessity.
                        </p>
                        <p>
                          We use cookies and Google services like Analytics & Tag Manager.
                          <a
                            href="https://policies.google.com/technologies/partner-sites"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-500 ml-1"
                          >
                            Learn more
                          </a>
                        </p>
                      </div>

                      <div>
                        <h2 className="text-lg font-semibold">
                          7. Information Disclosure by Trescor
                        </h2>
                        <p>
                          We may share information with third-party service providers
                          for IT services or data analytics. No information is sold, rented,
                          or traded. We share only with consent or legal obligation.
                        </p>
                      </div>

                      <div>
                        <h2 className="text-lg font-semibold">8. Contact Us</h2>
                        <p>
                          For questions or concerns about this policy, please email us at{" "}
                          <a
                            href="mailto:info@trescor.com"
                            className="text-blue-500 underline"
                          >
                            info@trescor.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </section>




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

export default PrivacyPolicy;