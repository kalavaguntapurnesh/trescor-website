import React, { useEffect } from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from hash
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        // Add a delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, []);
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
                        Privacy Policy
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
                  <div className="text-center my-2">
                    <h1 className="  text-[#43474e] md:mx-0 mx-1">
                      This Privacy Policy belongs to the Terms of Service of
                      Trescore Software Solutions and should be followed as a
                      part of it. Your Privacy is our priority and
                      responsibility what we always remain committed to. This
                      Privacy Policy comprises how we protect your data and what
                      sort of measuring tools we adopt just to ensure
                      confidentiality and integrity for all the personal or
                      non-personal data that you entrust to us. This Privacy
                      Policy consists of how we collect, use, and distribute
                      your data that imbibes your identity or personal
                      information as well as how we manage the security and
                      protection part of your confidential data.
                    </h1>
                  </div>
                  <div className="px-4 space-y-6   text-[#43474e]">
                    <div>
                      <h2 className="text-xl font-bold mt-4 text-[#0A3161]">
                        Information That We Collect & Process
                      </h2>
                      <p className="mb-4 text-gray-600">
                        The only purpose of collecting data from you is just to
                        serve an improved experience to you every time when you
                        visit our website. Initially, we collect information
                        including your name, email, contact number, and your
                        postal address. All such information we receive from you
                        when you create your employer account with us, when you
                        register for any event/webinar we organize, you
                        communicate through contact, query, feedback form, etc.,
                        or subscribe to our newsletters.
                      </p>
                    </div>
                    <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                      Cookies That We Use
                    </h3>
                    <p className="mb-4 text-gray-600">
                      We use cookies that help us to identify your browsing
                      data, clicks you ensure, and the time you spent while
                      navigating our website. All such information helps us to
                      improve your experience whenever you come back to our
                      website. This helps us to understand your preferences and
                      the last web activities that you ensured so that we can
                      serve what is anticipated by you.
                    </p>
                    <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                      Data Disclosure
                    </h3>
                    <p className="mb-4 text-gray-600">
                      To improve our user experience, we may share our users'
                      personal-identifiable information with certain third-party
                      sources including our business partners, stakeholders, and
                      vendors. We may also share your information with our
                      search engine or digital providers.
                    </p>
                    <p className="mb-4 text-gray-600">
                      When it comes to complying with any legal obligation,
                      protect our rights, and ensuring the safety of our
                      customers or any other terms, etc., we share our users'
                      data.
                    </p>
                    <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                      Data Security
                    </h3>
                    <p className="mb-4 text-gray-600">
                      We use security measures to protect and prevent your data
                      from being misused, lost, or accessed by unauthorized
                      sources. We do not share your data with any sources that
                      may use it as a business source. If there is a need to
                      share your data in case of a suspected data breach, we
                      will notify you in advance.
                    </p>
                    <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                      User Rights
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Users can anytime unsubscribe from the notifications for
                      newsletters, events/webinars, or from any of our incoming
                      calls. You can either change your notification preference
                      or can simply opt-out of any future notifications. You can
                      also notify your concern or write to us at{" "}
                      <a
                        className="text-blue-500 underline"
                        href="mailto:info@trescoresoftwaresolutions.com"
                      >
                        info@trescoresoftwaresolutions.com
                      </a>
                    </p>
                    <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                      Changes & Amendments
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Trescore Software Solutions has the right to make changes
                      and amendments anytime whenever requires. We can modify or
                      update the provisions made in our privacy policy. Hence,
                      to remain updated with our latest privacy policy, you are
                      required to visit our page at frequent intervals.
                    </p>
                    <p className="mb-4 text-gray-600">
                      We always welcome you to connect with us in any term. If
                      you have any queries, questions, or suggestions, please
                      write us at{" "}
                      <a
                        className="text-blue-500 underline"
                        href="mailto:info@trescoresoftwaresolutions.com"
                      >
                        info@trescoresoftwaresolutions.com
                      </a>
                    </p>

                    <div id="ccpa-compliance" className="scroll-mt-32">
                      <h3 className="text-2xl font-bold mt-8 mb-2 text-[#0A3161]">
                        CCPA Compliance Statement
                      </h3>

                      <p className="mb-2 text-gray-600">
                        The California Consumer Privacy Act (CCPA) provides
                        California residents with specific rights regarding
                        their personal information. Trescor Software Solutions
                        respects these rights and maintains full transparency in
                        how data is collected and used. We only collect your
                        business name and business email when you voluntarily
                        submit our Contact Us form. Under the CCPA, you may
                        request access, correction, or deletion of your
                        information at any time. We do not sell or share
                        personal information with third parties. To exercise
                        your rights, contact us at support@trescor.com.
                      </p>
                    </div>
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

export default PrivacyPolicy;
