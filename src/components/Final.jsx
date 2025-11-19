import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Final = () => {
  return (
    <div className="pt-4">
      <div className="relative">
        <div className="w-full">
          <div className="w-full lg:mx-auto max-w-[1400px] pb-12 mx-auto">
            <div className="p-4">
              <div className="md:flex md:h-[363px] mt-8">
                <div
                  className="px-[1rem] md:px-[3rem] lg:px-[4rem] py-[3rem] w-[100%] lg:w-[70%] h-full flex"
                  style={{
                    backgroundImage:
                      "url(https://ctwebsite2025.blob.core.windows.net/media/celebalwebsite2025/assets_webp/common/images/footer_left.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="flex flex-col justify-center text-[#FFFFFF] gap-[20px] w-full">
                    <div className="flex flex-col gap-[8px]">
                      <p className="text-[24px] md:text-[28px] lg:text-[32px] font-bold whitespace-break-spaces">
                        Empower Your Business with Expert MS Dynamics Support!
                      </p>
                      <h4 className="md:text-base text-sm w-auto md:max-w-[80%] whitespace-break-spaces">
                        Maximize productivity, streamline operations, and ensure
                        seamless performance with our dedicated Microsoft
                        Dynamics 365 support.
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-[20px] md:text-[16px] lg:text-[20px] font-medium font-jakarta"></h4>
                    </div>
                    <a
                      href="/contact-trescor"
                      className="w-fit px-[36px] py-[12px] rounded-full text-[14px] font-[500] bg-white text-black cursor-pointer"
                    >
                      Book a Meeting
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block w-[100%] md:w-0 lg:w-[30%] h-[100%]">
                  <img
                    src="https://images.unsplash.com/photo-1593775312309-4cd3c08e24a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670"
                    className="object-cover h-[100%] w-full rounded-r-xl"
                    alt="AI DataOps Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
