import React, { useState, useEffect, useRef } from "react";
import { FaMicrosoft } from "react-icons/fa";
import worldMap from "../assets/worldmap.jpg";
import innovation from "../assets/comm.png";
import handshare from "../assets/globe.png";
import growth from "../assets/career.png";

const AboutHero = () => {
  const values1 = [
    {
      icon: innovation,
      Title: "Seamless Integration",
      description:
        " We specialize in integrating Dynamics 365 Finance with your existing systems and workflows, minimizing disruptions and maximizing productivity",
    },
    {
      icon: growth,
      Title: "Team of Professionals",
      description:
        "  Our certified consultants bring years of experience and deep expertise in financial systems, guaranteeing a smooth and efficient implementation process.",
    },
    {
      icon: handshare,
      Title: "Future-Proof Solutions",
      description:
        "We design implementations with scalability in mind, so your financial systems can grow and adapt alongside your business.",
    },
  ];

  // Animated Counter Component
  const AnimatedCounter = ({ endValue, duration = 2000, suffix = "%" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
      if (!isVisible) return;

      let startTime = null;
      const startValue = 0;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(
          startValue + (endValue - startValue) * easeOutQuart
        );

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, endValue, duration]);

    return (
      <h1 ref={counterRef} className="text-[28px] md:text-[32px] font-[700]">
        {count}
        {suffix}
      </h1>
    );
  };

  return (
    <div>
      <div className="relative h-[900px] lg:h-[700px] lg:mt-[104px] mt-20 mx-auto max-w-[1400px] overflow-hidden">
        {/* Background Video */}
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            {/* Fallback for unsupported browsers */}
            Your browser does not support the video tag.
          </video>
          {/* Fallback image if video fails */}
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Business Technology Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ display: "none" }}
            onLoad={(e) => {
              const video = e.target.previousElementSibling;
              if (video && video.tagName === "VIDEO") {
                video.addEventListener("error", () => {
                  e.target.style.display = "block";
                });
              }
            }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#13151ABF] z-[1]"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-[1440px] mx-auto">
          <div className="h-full flex flex-col gap-[7rem] lg:gap-[3.2rem] justify-center pt-[100px] lg:pt-[120px]">
            {/* Main Hero Content */}
            <div className="flex flex-col items-start lg:flex-row lg:items-center gap-[2rem] lg:gap-[14rem]">
              {/* Hero Title */}
              <h1 className="text-white text-[34px] md:text-[42px] lg:text-[62px] leading-[46px] md:leading-[52px] lg:leading-[72px] font-bold">
                Your strategic
                <br />
                partner for
                <br />
                <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                  Microsoft Solutions
                </span>
              </h1>

              {/* Latest Updates Card */}
              <div className="flex w-[290px] md:w-[406px] text-white gap-[24px] h-[176px]">
                <div className="hidden md:block w-[1px] h-full bg-white"></div>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex flex-col gap-[12px] h-[156px]">
                    <div className="flex flex-col gap-[12px]">
                      <h2 className="text-[#00A3EE] text-[12px] font-bold uppercase tracking-wider">
                        LATEST INSIGHTS
                      </h2>
                      <div className="h-[0.75px] w-[36px] bg-[#00A3EE]"></div>
                    </div>
                    <p className="transition-opacity duration-500 text-[14px] font-normal h-[62px] md:h-[52px]">
                      Trescor and Microsoft Partnership: Accelerating Digital
                      Transformation with Dynamics 365 Solutions
                    </p>
                    <a
                      className="flex gap-[16px] items-center group cursor-pointer h-[40px]"
                      href="/contact-trescor"
                    >
                      <p className="transition-colors duration-500 group-hover:text-[#00A3EE] text-[14px] font-normal">
                        Learn More
                      </p>
                      <button>
                        <div className="w-[28px] h-[28px] flex items-center bg-[#00A3EE] rounded-full justify-center transition-transform duration-500 group-hover:rotate-45">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </div>
                      </button>
                    </a>
                  </div>

                  {/* Progress Indicators */}
                  <div className="h-[5px] w-full relative gap-[12px] overflow-hidden flex">
                    <div className="h-[5px] transition-all duration-500 rounded-[4px] bg-white w-1/2"></div>
                    <div className="h-[5px] transition-all duration-500 rounded-[4px] bg-[#00A3EE] w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted Partnerships Section */}
            <div className="text-[#AEAEAE] mb-[4rem] flex flex-col gap-[8px]">
              <div className="h-[1px] w-full bg-[#AEAEAE]"></div>
              <div className="flex flex-col gap-[1rem] md:gap-0 items-start lg:flex-row justify-between w-full lg:items-center">
                <p className="font-medium">Trusted Partnerships</p>
                <div className="h-[36px] flex flex-wrap w-[290px] md:w-[358px] gap-[16px] items-center">
                  {/* Microsoft Logo */}
                  <div className="text-white flex flex-row items-center gap-3 opacity-70 hover:opacity-100 transition-all duration-200 cursor-pointer">
                    <FaMicrosoft className="w-6 h-6" />
                    <p className="text-lg font-medium">Microsoft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] px-4 py-4">
              <div className="w-full flex flex-col md:flex-row gap-8 justify-between items-start">
                <h2 className="text-xl lg:text-[28px] xl:text-[35px] md:w-[45%] text-[#0A3161] leading-[46px] font-bold">
                  We turn your hurdles into <br />
                  <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                    decisive solutions
                  </span>
                </h2>
                <div className="flex flex-col md:w-[50%] gap-8">
                  <p className="text-gray-500 text-[16px] leading-[160%]">
                    Founded with a bold vision to empower enterprises, Trescor
                    Solutions combines future-focused approach with a proactive
                    leadership mindset to revolutionize enterprises from top to
                    bottom. As a leader in Microsoft Solutions, we experiment
                    with unconventional methods to bring innovation and deliver
                    impactful results in the Enterprise Technology space.
                  </p>
                  <a
                    className="group bg-gradient-to-r from-[#0A3161] to-[#00A3EE] hover:from-[#00A3EE] hover:to-[#7EB900] px-6 py-3 rounded-full text-white items-center gap-3 transition-all duration-500 w-fit flex shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                   href="/contact-trescor"
                  >
                    <p className="text-[16px] font-medium">
                      Learn more about us
                    </p>
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[#0A3161]"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] px-4 py-4">
              <div className="px-6 py-6 flex flex-col gap-[56px] bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#0A3161]">
                    Transformative Outcomes with
                    <span className="bg-gradient-to-r from-[#F14F21] via-[#00A3EE] to-[#7EB900] bg-clip-text text-transparent">
                      {" "}
                      Microsoft Dynamics 365
                    </span>
                  </h3>
                  <div className="w-0 md:w-[201px] h-0 md:h-[28px] flex items-center">
                    <FaMicrosoft className="hidden md:block w-8 h-8 text-[#00A3EE]" />
                    <span className="hidden md:block ml-2 text-lg font-semibold text-[#0A3161]">
                      Microsoft
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-[40px]">
                  <div className="flex items-center justify-between md:block pb-[24px] md:pb-0 min-w-[220px] mobile-border">
                    <p className="font-[300] text-[14px] border-l-[3px] border-[#F14F21] pl-[10px] w-[70%]">
                      <span className="font-[500] pr-[4px]">Reduce</span>
                      Operational Costs by up to
                    </p>
                    <div className="text-[#F14F21]">
                      <AnimatedCounter endValue={70} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:block pb-[24px] md:pb-0 min-w-[220px] mobile-border">
                    <p className="font-[300] text-[14px] border-l-[3px] border-[#00A3EE] pl-[10px] w-[70%]">
                      <span className="font-[500] pr-[4px]">Eliminate</span>
                      Infrastructure Costs by
                    </p>
                    <div className="text-[#00A3EE]">
                      <AnimatedCounter endValue={60} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:block pb-[24px] md:pb-0 min-w-[220px] mobile-border">
                    <p className="font-[300] text-[14px] border-l-[3px] border-[#7EB900] pl-[10px] w-[70%]">
                      <span className="font-[500] pr-[4px]">Increase</span>Agent
                      Efficiency by
                    </p>
                    <div className="text-[#7EB900]">
                      <AnimatedCounter endValue={30} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:block pb-[24px] md:pb-0 min-w-[220px] mobile-border">
                    <p className="font-[300] text-[14px] border-l-[3px] border-[#FEB800] pl-[10px] w-[70%]">
                      <span className="font-[500] pr-[4px]">Reduce</span>Query
                      Resolution Time by
                    </p>
                    <div className="text-[#FEB800]">
                      <AnimatedCounter endValue={60} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:block pb-[24px] md:pb-0 min-w-[220px]">
                    <p className="font-[300] text-[14px] border-l-[3px] border-[#0A3161] pl-[10px] w-[70%]">
                      <span className="font-[500] pr-[4px]">Improve</span>
                      Operational Efficiency by
                    </p>
                    <div className="text-[#0A3161]">
                      <AnimatedCounter endValue={43} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap flex-col items-center pb-3">
                    <div className="text-center mt-4">
                      <h3 className="lg:text-3xl text-2xl font-bold text-[#0A3161]">
                        About Trescor Software Solutions
                      </h3>
                    </div>
                    <div className="md:w-40 w-20 h-1 border-b-[2px] border-[#B31942] mt-[1px]"></div>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Our certified consultants bring years of experience and
                      deep expertise in financial systems, guaranteeing a smooth
                      and efficient implementation process.
                    </p>
                  </div>
                </div>

                <div
                  id="world-map"
                  className="max-w-[1100px] my-0 mx-auto p-4 relative mt-6"
                >
                  <img
                    src={worldMap}
                    alt="map"
                    className="w-[100%] h-[100%] object-contain"
                  />
                  <div className="pin usa">
                    <span>🇺🇸 United States</span>
                    <div className="address-tooltip">
                      30 Technology Dr, Irvine, CA 92618, USA
                    </div>
                  </div>

                  <div className="pin china">
                    <span>🇮🇳 India</span>
                    <div className="address-tooltip">
                      1-53, P NO.27, SY NO.41/P, 42/P GUTTALA, BEGUMPET,
                      HYDERABAD, Telangana, India - 500016
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap flex-col items-center pb-3">
                    <div className="text-center mt-4">
                      <h3 className="lg:text-4xl text-3xl font-bold text-[#0A3161]">
                        An Unmatched Experience
                      </h3>
                    </div>
                    <div className="md:w-40 w-32 h-1 border-b-2 border-[#B31942] mt-1"></div>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Trescor Software Solutions is the leading Microsoft
                      solution partner, offering future-ready business solutions
                      to global organizations.
                    </p>
                  </div>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-10 px-4 lg:px-8">
                  {values1.map((value, index) => (
                    <div
                      key={index}
                      class="flex justify-center transition-transform duration-500 hover:-translate-y-2 group"
                    >
                      <div class="w-full bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 p-8 text-center">
                        <div class="flex justify-center items-center mb-5">
                          <div class="relative w-24 h-24 flex items-center justify-center rounded-full overflow-hidden">
                            <div
                              class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition duration-500
              ${
                index % 4 === 0
                  ? 'bg-gradient-to-r from-[#F14F21] to-[#FEB800]'
                  : index % 4 === 1
                  ? 'bg-gradient-to-r from-[#00A3EE] to-[#7EB900]'
                  : index % 4 === 2
                  ? 'bg-gradient-to-r from-[#7EB900] to-[#FEB800]'
                  : 'bg-gradient-to-r from-[#FEB800] to-[#F14F21]'
              }"
                            ></div>

                            <img
                              src={value.icon}
                              alt="icon"
                              class="relative w-20 h-20 object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-3"
                            />
                          </div>
                        </div>

                        <h1
                          class={`
            text-2xl font-bold mb-3 transition-colors duration-300
            ${
              index % 4 === 0
                ? "text-[#0A3161] group-hover:text-[#F14F21]"
                : index % 4 === 1
                ? "text-[#0A3161] group-hover:text-[#00A3EE]"
                : index % 4 === 2
                ? "text-[#0A3161] group-hover:text-[#7EB900]"
                : "text-[#0A3161] group-hover:text-[#FEB800]"
            }
          `}
                        >
                          {value.Title}
                        </h1>

                        <p class="text-gray-600 leading-relaxed mb-6 px-2">
                          {value.description}
                        </p>

                        <div
                          class={`
            h-[3px] w-1/2 mx-auto rounded-full 
            ${
              index % 4 === 0
                ? "bg-gradient-to-r from-[#F14F21] to-[#FEB800]"
                : index % 4 === 1
                ? "bg-gradient-to-r from-[#00A3EE] to-[#7EB900]"
                : index % 4 === 2
                ? "bg-gradient-to-r from-[#7EB900] to-[#FEB800]"
                : "bg-gradient-to-r from-[#FEB800] to-[#F14F21]"
            }
          `}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] px-4 py-4">
              <section class="bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-6 lg:px-16 rounded">
                <div class="max-w-full w-[100%] mx-auto">
                  <p class="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4 ml-12">
                    A word from founder
                  </p>

                  <div class="flex items-start gap-4">
                    <span class="text-[#E02401] lg:text-8xl text-6xl leading-none">
                      “
                    </span>

                    <p class="text-2xl md:text-3xl leading-snug font-bold text-[#0A3161]">
                      “At some point, you realize that once you’ve built the
                      right systems and team, you just have to trust the process
                      and keep moving forward.”
                    </p>
                  </div>

                  <div class="mt-6 ml-12">
                    <h3 class="font-semibold text-gray-900 text-lg">
                      Sumanth Dama
                    </h3>
                    <p class="text-gray-500 text-sm">
                      Building intelligent solutions that empower businesses to
                      run better every day.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
