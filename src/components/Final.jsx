import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { FaWrench } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";

const Final = () => {
  return (
    <div className="bg-white">
      <div className="relative lg:pt-16 pt-8 pb-12">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <motion.div
              variants={fadeIn("down", 0.1)} // Fade in from top to bottom
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="mx-auto max-w-[1400px] bg-[#f0f0f0] h-80 rounded-2xl"
            >
              <div className="space-y-4">

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:pt-12 pt-8 lg:px-12">
                  <div className="space-y-3">
                    <div>
                      <FaWrench className="w-4 h-4 text-black" />
                    </div>
                    <div className="font-bold text-2xl">
                      <h1 className="text-[#555]">Speedy Detection</h1>
                    </div>
                    <div>
                      <p className="text-[#555]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repudiandae alias, dolor odit atque consequuntur ipsa iure natus doloribus totam.</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <VscGraph className="w-4 h-4 text-black" />
                    </div>
                    <div className="font-bold text-2xl">
                      <h1 className="text-[#555]">Speedy Detection</h1>
                    </div>
                    <div>
                      <p className="text-[#555]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repudiandae alias, dolor odit atque consequuntur ipsa iure natus doloribus totam.</p>
                    </div>
                  </div>



                  <div className="space-y-3">
                    <div>
                      <FaSearch className="w-4 h-4 text-black" />
                    </div>
                    <div className="font-bold text-2xl">
                      <h1 className="text-[#555]">Speedy Detection</h1>
                    </div>
                    <div>
                      <p className="text-[#555]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repudiandae alias, dolor odit atque consequuntur ipsa iure natus doloribus totam.</p>
                    </div>
                  </div>

                </div>


            

                <div className="flex justify-center items-center pt-4">
                  <a
                    href="/contact"
                    className="relative flex h-[50px] md:w-60 w-8/12 items-center justify-center overflow-hidden border border-[#f65314] text-white bg-[#f65314]  transition-all before:absolute before:h-0 before:w-0  before:bg-[#E4E4E4] hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded bg-colorFour"
                  >
                    <span className="relative z-10">
                      {" "}
                      Contact our team now
                    </span>
                  </a>
                </div>


              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
