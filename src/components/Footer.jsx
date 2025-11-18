import { FaInstagram } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import india from "../assets/india.svg";
import usa from "../assets/usa.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b shadow-[0_-4px_10px_rgba(0,0,0,0.1)] from-[#f8f9fa] to-[#f2f2f2]">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Top Section - Company Brand & Newsletter */}

        <div className="w-[100%]">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center min-h-[500px]">
            <div className="flex flex-col space-y-6 w-full justify-center h-full">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 px-2 md:px-0">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A3161]">
                  We're to Help
                </h1>
              </div>
              <div className="text-[#0A3161] lg:text-lg text-base lg:text-start text-center lg:ml-2 px-2 md:px-0">
                <p>
                  To learn more about how Trescor Solutions can help your
                  projects succeed, contact us today.
                </p>
              </div>
              <div className="lg:px-0 px-2 flex lg:justify-start justify-center">
                <button className="w-fit px-[36px] py-[12px] rounded-full text-[14px] font-[500] bg-[#0A3161] text-white shadow-lg hover:bg-[#00A3EE] transition-colors duration-300 cursor-pointer">
                  Connect with Us
                </button>
              </div>

              <div>
                <a
                  href="https://maps.app.goo.gl/bTxVirWoKNPPm1xb6"
                  className="flex flex-row items-center lg:justify-start justify-center gap-4 text-[#0A3161] hover:underline cursor-pointer"
                >
                  <div>
                    <img src={usa} alt="India" className="w-8 h-8" />
                  </div>
                  <div>
                    <p>
                      530 Technology Drive, Irvine, California, United
                      States-92614
                    </p>
                  </div>
                </a>
                <a
                  href="https://maps.app.goo.gl/bTxVirWoKNPPm1xb6"
                  className="flex flex-row items-center lg:justify-start justify-center gap-4 text-[#0A3161] hover:underline cursor-pointer"
                >
                  <div>
                    <img src={india} alt="India" className="w-8 h-8" />
                  </div>
                  <div>
                    <p>
                      1-53, P NO.27, SY NO.41/P, 42/P Guttala, Begumpet,
                      Hyderabad, India-500016
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-full min-h-[400px]">
              <div className="relative flex justify-center items-center w-full h-full">
                <img
                  src="https://global.hitachi-solutions.com/wp-content/uploads/2023/04/MicrosoftTeams-image-32.png"
                  alt="Dynamics 365 Finance Hero"
                  className="rounded-xl w-full max-w-[500px] h-auto object-contain z-10 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Services */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <h4 className="font-bold uppercase text-[#B31942]">Services</h4>
            </div>
            <div className="space-y-3">
              {[
                {
                  name: "Dynamics 365 F&O",
                  href: "/services-microsoft-dynamics-365-finance",
                },
                {
                  name: "Business Intelligence",
                  href: "/bi-analytics-services",
                },
                { name: "Cloud Migration", href: "/" },
                {
                  name: "Custom Development",
                  href: "/",
                },
                {
                  name: "Support & Managed Services",
                  href: "/",
                },
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="flex items-center space-x-2 text-[#0A3161] hover:text-[#F14F21] transition-all duration-200 group hover:pl-2"
                >
                  <FaAngleRight className="text-xs group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{service.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <h4 className="font-bold uppercase text-[#B31942]">Industries</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "Financial Services", href: "/industries/financial" },
                { name: "Manufacturing", href: "/industries/manufacturing" },
                {
                  name: "Technology & Software",
                  href: "/",
                },
                { name: "Public Sector", href: "/" },
                { name: "Healthcare", href: "/" },
              ].map((industry, index) => (
                <a
                  key={index}
                  href={industry.href}
                  className="flex items-center space-x-2 text-[#0A3161] hover:text-[#00A3EE] transition-all duration-200 group hover:pl-2"
                >
                  <FaAngleRight className="text-xs group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{industry.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <h4 className="font-bold uppercase text-[#B31942]">Company</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "About Trescor", href: "/about-trescor" },
                { name: "Contact Trescor", href: "/contact-trescor" },
                { name: "Careers", href: "/careers" },
                { name: "Partner with Us", href: "/collaborate-with-us" },
                { name: "Global Presence", href: "/contact-trescor" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-[#0A3161] hover:text-[#7EB900] transition-all duration-200 group hover:pl-2"
                >
                  <FaAngleRight className="text-xs group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <h4 className="font-bold uppercase text-[#B31942]">Solutions</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "Fabric AI", href: "/solutions/microsoft-fabric" },
                { name: "Banking & Finance", href: "/solutions/microsoft-dynamics-365-for-finance" },
                { name: "Asset Management", href: "/" },
                { name: "Professional Solutions", href: "/" },
                { name: "Industry Solutions", href: "/d365finance/pharma" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-[#0A3161] hover:text-[#FEB800] transition-all duration-200 group hover:pl-2"
                >
                  <FaAngleRight className="text-xs group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <h4 className="font-bold uppercase text-[#B31942]">Policy</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Anti Slavery Policy", href: "/anti-slavery-policy" },
                { name: "Cookie Statement", href: "/cookie-policy" },
                { name: "User Consent", href: "/user-consent" },
                { name: "CCPA", href: "/privacy-policy#ccpa-compliance" },
              ].map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="flex items-center space-x-2 text-[#0A3161] hover:text-[#F14F21] transition-all duration-200 group hover:pl-2"
                >
                  <FaAngleRight className="text-xs group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{policy.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#0A3161] via-[#1a4d7a] to-[#0A3161]">
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-8">
                <p className="text-white font-medium text-xs">
                  © {new Date().getFullYear()} Trescor Software Solutions. All
                  rights reserved.
                </p>
                <div className="flex items-center space-x-6 text-xs">
                  <a
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-[#00A3EE] transition-colors font-medium"
                  >
                    Privacy Policy
                  </a>
                  <div className="h-4 w-px bg-gray-400" />
                  <a
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-[#7EB900] transition-colors font-medium"
                  >
                    CCPA
                  </a>
                  <div className="h-4 w-px bg-gray-400" />
                  <a
                    href="/cookie-policy"
                    className="text-gray-300 hover:text-[#FEB800] transition-colors font-medium"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-6 w-[100%]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex justify-center items-center"
              >
                <FaInstagram className="text-white hover:text-[#F14F21] text-xl transition-colors duration-200" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex justify-center items-center"
              >
                <FaFacebook className="text-white hover:text-[#1877F3] text-xl transition-colors duration-200" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex justify-center items-center"
              >
                <FaWhatsapp className="text-white hover:text-[#25D366] text-xl transition-colors duration-200" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex justify-center items-center"
              >
                <FaXTwitter className="text-white hover:text-[#00A3EE] text-xl transition-colors duration-200" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex justify-center items-center"
              >
                <FaLinkedin className="text-white hover:text-[#0A66C2] text-xl transition-colors duration-200" />
              </a>
              <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="flex justify-center items-center"
              >
                <FaThreads className="text-white hover:text-[#000] text-xl transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
