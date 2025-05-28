import Accordion from "../components/Accordion";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const FAQ = () => {
  return (
    <div className="lg:pt-12 pt-8 pb-12">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px]">
            <div className="p-4">
              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="space-y-3"
              >
                <div className="flex items-center text-center justify-center ">

                  <p className="uppercase font-bold text-[#B31942]">
                    Got any doubts?
                  </p>
                </div>

                <div className="text-center mt-4">
                  <h3 className="lg:text-4xl text-2xl font-bold text-[#0A3161]">
                    Frequently asked questions
                  </h3>
                </div>

              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="w-full flex justify-center items-center pt-8"
              >
                <div className="md:w-5/6 w-full">
                  <Accordion
                    title="What is meant by Microsoft Dynamics 365 Finance & Operations?"
                    answer="If we were to give Dynamics 365 overview, it is basically a suite of enterprise-level intelligent cloud-based applications. It breaks down silos between customer relationship management and enterprise resource planning and offers purpose-built applications that seamlessly manage core business processes. The Dynamics 365 suite of applications can be implemented individually or in various combinations"
                  />
                    <Accordion
                  title="What are the benefits of Microsoft Dynamics 365 to organizations?"
                  answer="Microsoft Dynamics 365 enables businesses to achieve speed and agility across their organization. With its CRM and ERP capabilities combined, Microsoft Dynamics 365 Products can help a company serve its customers better, make decisions based on AI-driven analytics, automate business processes, optimize profits, and experience growth."
                />
                <Accordion
                  title="What are the features of Dynamics 365 and how can they optimize operations?"
                  answer="Dynamics 365 is an integrated suite of business applications that combines CRM and ERP capabilities. Its key features vary across modules. For example, Dynamics 365 Sales helps streamline sales processes, manage customer relationships, and track opportunities. Dynamics 365 Finance enables efficient financial management with features like budgeting, accounting, and reporting."
                />
                <Accordion
                  title="How does Dynamics 365 Finance & Operations streamline business processes?"
                  answer="It helps streamline business processes by centralizing data, automating tasks, and providing real-time insights. With Business Central, you can manage finance, sales, purchasing, inventory, and more from a single platform. It simplifies workflows, improves collaboration across teams, and enables data-driven decision-making."
                />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
