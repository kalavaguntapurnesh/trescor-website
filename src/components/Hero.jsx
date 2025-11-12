import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source
            src="https://www.pexels.com/download/video/11548675/"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          <img
            src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Technology background"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </video>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 bg-opacity-50 text-[#e7e5df] lg:text-start text-center">
        <div className="max-w-[1400px] mx-auto w-full mt-16 lg:mt-24 ">
          <div className="w-[100%] grid lg:grid-cols-5 grid-cols-1 lg:gap-0 gap-4 ">
            <div className="space-y-4 lg:col-span-3 lg:px-6 flex flex-col lg:justify-center">
              <div>
                <p className="uppercase font-medium text-[#e7e5df]">
                  Empowering Your Business
                </p>
              </div>

              <div>
                <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-[#e7e5df] leading-tight">
                  AI Powered Digital
                  <br /> Transformation & Product
                  <br /> Engineering{" "}
                  <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                    Services
                  </span>
                </h1>
              </div>

              <div>
                <p className="pt-4 lg:text-lg text-[#e7e5df] leading-relaxed">
                  Our Dynamics 365 Consultants work with you to tailor Dynamics
                  to your organization's
                  <br />
                  unique goals, needs, and processes. Whether you need help with
                  the implementation,
                  <br />
                  configuration, customization, integration, or ongoing
                  maintenance, our M365
                  <br />
                  Consultants are ready to help.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block px-[48px] py-3 border-[1px] bg-[#e7e5df] border-[#e7e5df] text-[#1a1a1a] rounded font-medium transition duration-300 hover:bg-transparent hover:text-[#e7e5df]"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="p-8 lg:col-span-2 lg:block hidden">
              <div className="bg-[#e7e5df] backdrop-blur-md rounded-lg p-6">
                <div className="space-y-4">
                  <h2 className="bg-gradient-to-r text-center from-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent font-bold lg:text-2xl">
                    How can we help?
                  </h2>
                  <p className="text-black text-center">
                    We'll be in touch to schedule your free consultation
                    shortly.
                  </p>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 bg-[#f9f9f9] rounded-md text-[#1a1a1a] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#00A3EE]/40 focus:border-[#00A3EE]"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-black">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 bg-[#f9f9f9] rounded-md text-[#1a1a1a] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#00A3EE]/40 focus:border-[#00A3EE]"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 bg-[#f9f9f9] rounded-md text-[#1a1a1a] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#00A3EE]/40 focus:border-[#00A3EE]"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        What is your rough budget?
                      </label>
                      <select className="w-full px-3 py-2 bg-[#f9f9f9] rounded-md text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#00A3EE]/40 focus:border-[#00A3EE]">
                        <option value="">Select budget range</option>
                        <option value="limited">Limited budget</option>
                        <option value="10k-25k">$10k - $25k</option>
                        <option value="25k-50k">$25k - $50k</option>
                        <option value="50k-100k">$50k - $100k</option>
                        <option value="100k+">$100k+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        How Can We Help?
                      </label>
                      <textarea
                        rows="4"
                        className="w-full px-3 py-2 bg-[#f9f9f9] rounded-md text-[#1a1a1a] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#00A3EE]/40 focus:border-[#00A3EE]"
                        placeholder="Tell us about your project or requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#00A3EE] to-[#7EB900] text-white font-medium rounded-md transition duration-300 hover:opacity-90"
                    >
                      Book Your Free Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[2px] xl:block hidden mt-[90px] border-[#ffffff1a] max-w-[1400px] mx-auto w-[100%] pt-4 lg:px-6"></div>
      </div>
    </section>
  );
};

export default Hero;
