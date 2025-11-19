import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiChevronRight,
  FiCheck,
  FiDollarSign,
} from "react-icons/fi";

const Hero = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Valid email required";
    // phone optional but basic check
    if (form.phone && !/^[\d+()\-\s]{6,20}$/.test(form.phone))
      e.phone = "Enter a valid phone";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    try {
      // Simulate API call (replace with your API)
      await new Promise((r) => setTimeout(r, 900));
      setDone(true);
      // reset form after small delay (optional)
      setTimeout(() => {
        setForm({ name: "", email: "", phone: "", budget: "", message: "" });
        setSubmitting(false);
        setDone(false);
      }, 2200);
    } catch (err) {
      setSubmitting(false);
      // handle error: show toast or setErrors({ global: "Something went wrong" })
    }
  }

  const inputBase =
    "w-full px-4 py-3 rounded-lg bg-white/70 backdrop-blur-sm placeholder-gray-500 text-[#0f1724] focus:outline-none focus:ring-2 focus:ring-opacity-75 transition";

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
        <div className="max-w-[1400px] mx-auto w-full pt-16 lg:pt-32">
          <div className="w-[100%] grid lg:grid-cols-5 grid-cols-1 lg:gap-0 gap-4 ">
            <div className="space-y-4 lg:col-span-3 lg:px-6 flex flex-col lg:justify-center">
              <div>
                <p className="uppercase font-medium text-[#e7e5df]">
                  Empowering Your Business
                </p>
              </div>

              <div>
                <h1 className="xl:text-6xl md:text-5xl text-4xl font-bold text-[#e7e5df] leading-tight">
                  End-to-End Digital
                  <br /> Transformation Powered by
                  <br /> Microsoft{" "}
                  <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                    Dynamics 365
                  </span>
                </h1>
              </div>

              <div>
                {/* <p className="pt-4 xl:text-lg text-[#e7e5df] leading-relaxed">
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
                </p> */}
                <p className="pt-4 xl:text-lg text-[#e7e5df] leading-relaxed">
                  We help organizations tailor Dynamics 365 to their unique
                  goals, needs, and processes. <br />
                  From implementation and configuration to customization,
                  integration, and ongoing <br />
                  maintenance, we provide complete support at every stage.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="/contact-trescor"
                  className="inline-block px-[48px] lg:py-2.5 xl:py-3 border-[1px] bg-[#e7e5df] border-[#e7e5df] text-[#1a1a1a] rounded-full font-medium transition duration-300 hover:bg-transparent hover:text-[#e7e5df]"
                >
                  Contact Us Now
                </a>
              </div>
            </div>

            <div className="lg:p-6 xl:p-8 lg:col-span-2 lg:block hidden">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Decorative top-right gradient blob */}
                <div className="absolute -top-8 -right-6 w-56 h-56 rounded-full bg-gradient-to-tr from-[#00A3EE] to-[#7EB900] opacity-10 blur-3xl pointer-events-none" />

                <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-lg p-6 shadow-xl border border-white/50">
                  <div className="flex flex-col gap-4">
                    <div className="text-center">
                      <h2 className="text-[#05273a] font-extrabold text-2xl xl:text-3xl">
                        <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                          How can we help?
                        </span>
                      </h2>
                      <p className="text-[#0b1620] mt-2">
                        We'll be in touch to schedule your free consultation
                        shortly.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 gap-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <label className="relative">
                          <div className="flex items-center gap-2 mb-1 text-sm font-medium text-[#0f1724]">
                            <FiUser className="w-4 h-4 text-[#0A3161]" />
                            Business Name *
                          </div>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            className={`${inputBase} ${
                              errors.name ? "ring-2 ring-red-300" : "ring-0"
                            }`}
                            placeholder="Enter name"
                            aria-invalid={!!errors.name}
                            aria-describedby={
                              errors.name ? "err-name" : undefined
                            }
                          />
                          {errors.name && (
                            <div
                              id="err-name"
                              className="text-xs text-red-600 mt-1"
                            >
                              {errors.name}
                            </div>
                          )}
                        </label>

                        <label className="relative">
                          <div className="flex items-center gap-2 mb-1 text-sm font-medium text-[#0f1724]">
                            <FiMail className="w-4 h-4 text-[#0A3161]" /> Email
                            *
                          </div>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            className={`${inputBase} ${
                              errors.email ? "ring-2 ring-red-300" : "ring-0"
                            }`}
                            placeholder="Enter your email"
                            aria-invalid={!!errors.email}
                            aria-describedby={
                              errors.email ? "err-email" : undefined
                            }
                          />
                          {errors.email && (
                            <div
                              id="err-email"
                              className="text-xs text-red-600 mt-1"
                            >
                              {errors.email}
                            </div>
                          )}
                        </label>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <label>
                          <div className="flex items-center gap-2 mb-1 text-sm font-medium text-[#0f1724]">
                            <FiPhone className="w-4 h-4 text-[#0A3161]" /> Phone
                          </div>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            className={`${inputBase} ${
                              errors.phone ? "ring-2 ring-red-300" : ""
                            }`}
                            placeholder="Enter phone number"
                            aria-invalid={!!errors.phone}
                          />
                          {errors.phone && (
                            <div className="text-xs text-red-600 mt-1">
                              {errors.phone}
                            </div>
                          )}
                        </label>

                        <label>
                          <div className="flex items-center gap-2 mb-1 text-sm font-medium text-[#0f1724]">
                            <FiDollarSign className="w-4 h-4 text-[#0A3161]" />{" "}
                            What is your rough budget?
                          </div>
                          <select
                            value={form.budget}
                            onChange={(e) =>
                              setForm({ ...form, budget: e.target.value })
                            }
                            className={inputBase}
                          >
                            <option value="">Select budget range</option>
                            <option value="limited">Limited budget</option>
                            <option value="10k-25k">$10k - $25k</option>
                            <option value="25k-50k">$25k - $50k</option>
                            <option value="50k-100k">$50k - $100k</option>
                            <option value="100k+">$100k+</option>
                          </select>
                        </label>
                      </div>

                      <label>
                        <div className="flex items-center gap-2 mb-1 text-sm font-medium text-[#0f1724]">
                          How Can We Help?
                        </div>
                        <textarea
                          rows="4"
                          value={form.message}
                          onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                          }
                          className={inputBase}
                          placeholder="Tell us about your project or requirements..."
                        />
                      </label>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={submitting || done}
                          className="relative inline-flex items-center justify-center w-full px-6 lg:py-2.5 xl:py-3 rounded-full bg-gradient-to-r from-[#00A3EE] to-[#7EB900] text-white font-semibold shadow-xl hover:scale-[1.01] transform transition"
                          aria-live="polite"
                        >
                          {!done ? (
                            <>
                              <span className="mr-2">
                                {submitting
                                  ? "Sending..."
                                  : "Book Your Consultation"}
                              </span>
                              <FiChevronRight className="w-5 h-5 opacity-90" />
                              {/* subtle loading indicator */}
                              {submitting && (
                                <span className="absolute right-3 top-3 w-3 h-3 rounded-full bg-white/40 animate-pulse" />
                              )}
                            </>
                          ) : (
                            <span className="flex items-center gap-2">
                              <FiCheck className="w-5 h-5 text-white bg-white/10 rounded-full p-0.5" />
                              Submitted
                            </span>
                          )}
                        </button>
                      </div>
                    </form>

                    {/* success micro-animation */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={
                        done
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.95 }
                      }
                      transition={{ duration: 0.45 }}
                      className="mt-4 flex items-center gap-3 justify-center"
                      aria-hidden={!done}
                    >
                      {done && (
                        <div className="flex items-center gap-3 bg-white/90 p-3 rounded-full shadow-md">
                          <FiCheck className="w-5 h-5 text-[#0A3161]" />
                          <div>
                            <div className="text-sm font-semibold text-[#0A3161]">
                              Thanks — we’ll reach out shortly
                            </div>
                            <div className="text-xs text-gray-600">
                              Expect an email within 24 hours
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* subtle footer credit */}
                  <div className="text-xs text-gray-500 text-center">
                    We respect your privacy — your details are only used to
                    contact you about this request.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="border-t-[2px] xl:block hidden mt-[90px] border-[#ffffff1a] max-w-[1400px] mx-auto w-[100%] pt-4 lg:px-6"></div>
      </div>
    </section>
  );
};

export default Hero;
