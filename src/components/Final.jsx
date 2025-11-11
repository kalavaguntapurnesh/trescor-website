import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { FaWrench } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import FinalOne from "../assets/FinalOne.png";
import FinalTwo from "../assets/FinalTwo.png";
import FinalThree from "../assets/FinalThree.png";

const Final = () => {
  return (
    // <div className="bg-white">
    //   <div className="relative lg:pt-16 pt-8 pb-12">
    //     <div className="w-full">
    //       <div className="w-full px-4 mx-auto max-w-[1400px]">
    //         <div

    //           className="mx-auto max-w-[1400px] bg-[#f0f0f0] lg:h-[420px] xl:h-[380px] h-auto rounded-2xl"
    //         >
    //           <div className="space-y-4">

    //             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:pt-12 pt-8 lg:px-12 px-4">
    //               <div className="space-y-3">
    //                 <div className="flex lg:justify-start justify-center">
    //                   <img src={FinalOne} alt="final" className="w-12 h-12" />
    //                 </div>
    //                 <div className="font-bold lg:text-2xl text-xl flex lg:justify-start justify-center">
    //                   <h1 className="text-[#0a3161]">Customized Execution Strategy</h1>
    //                 </div>
    //                 <div className=" flex lg:justify-start justify-center">
    //                   <p className="text-[#555] lg:text-start text-center">Our customized execution strategy is tailored to align with your unique objectives, ensuring precision and flexibility at every stage. We adapt swiftly to evolving conditions.</p>
    //                 </div>
    //               </div>

    //               <div className="space-y-3">
    //                 <div className="flex lg:justify-start justify-center">
    //                   <img src={FinalTwo} alt="final" className="w-12 h-12" />
    //                 </div>
    //                 <div className="font-bold lg:text-2xl text-xl flex lg:justify-start justify-center">
    //                   <h1 className="text-[#0a3161]">Complete Project Management</h1>
    //                 </div>
    //                 <div className=" flex lg:justify-start justify-center">
    //                   <p className="text-[#555] lg:text-start text-center">We offer end-to-end project management solutions that cover every phase from planning to execution. With clear communication, structured timelines, and expert oversight.</p>
    //                 </div>
    //               </div>

    //               <div className="space-y-3">
    //                 <div className="flex lg:justify-start justify-center">
    //                   <img src={FinalThree} alt="final" className="w-12 h-12" />
    //                 </div>
    //                 <div className="font-bold lg:text-2xl text-xl flex lg:justify-start justify-center">
    //                   <h1 className="text-[#0a3161]">Supply Chain Optimization</h1>
    //                 </div>
    //                 <div className="flex lg:justify-start justify-center">
    //                   <p className="text-[#555] lg:text-start text-center">We streamline your supply chain operations to enhance efficiency, reduce costs, and improve overall performance. By identifying key bottlenecks and implementing smart solutions.</p>
    //                 </div>
    //               </div>

    //             </div>

    //             <div className="flex justify-center items-center pt-4 pb-12">
    //               <a
    //                 href="/contact-trescor"
    //                 className="relative flex h-[50px] md:w-60 w-8/12 items-center justify-center overflow-hidden border border-[#0a3161] text-white bg-[#0a3161]  transition-all before:absolute before:h-0 before:w-0  before:bg-[#0a3161] hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded bg-colorFour"
    //               >
    //                 <span className="relative z-10">
    //                   {" "}
    //                   Contact our team now
    //                 </span>
    //               </a>
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="lg:pt-2">
      <div className="relative">
        <div className="w-full">
          <div className="w-full lg:mx-auto max-w-[1400px] pb-12 mx-auto">
            <div className="p-4">
              <div className="md:flex md:h-[363px] mt-12">
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
                    <button className="w-fit px-[28px] py-[12px] rounded-full text-[14px] font-[500] bg-white text-black cursor-pointer">
                      Book a Meeting
                    </button>
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
