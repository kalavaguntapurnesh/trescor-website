import { FaInstagram } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import Logo from "../assets/Logo.png";
import { FaAngleRight } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCogs,
  FaIndustry,
  FaInfoCircle,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#f8f9fa] to-[#f2f2f2] select-none">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        {/* Top Section - Company Brand & Newsletter */}

        {/* Links Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Services */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[#F14F21] to-[#FEB800] rounded-lg flex items-center justify-center">
                <FaCogs className="text-white text-sm" />
              </div>
              <h4 className="text-lg font-bold text-[#0A3161]">Services</h4>
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
                { name: "Cloud Migration", href: "/services-cloud-migration" },
                {
                  name: "Custom Development",
                  href: "/services-custom-development",
                },
                {
                  name: "Support & Managed Services",
                  href: "/services-support-managed",
                },
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#F14F21] transition-all duration-200 group hover:pl-2"
                >
                  <FaAngleRight className="text-xs group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{service.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[#00A3EE] to-[#7EB900] rounded-lg flex items-center justify-center">
                <FaIndustry className="text-white text-sm" />
              </div>
              <h4 className="text-lg font-bold text-[#0A3161]">Industries</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "Financial Services", href: "/industries/financial" },
                { name: "Manufacturing", href: "/industries/manufacturing" },
                {
                  name: "Technology & Software",
                  href: "/industries/technology",
                },
                { name: "Public Sector", href: "/industries/public-sector" },
                { name: "Healthcare", href: "/industries/healthcare" },
              ].map((industry, index) => (
                <a
                  key={index}
                  href={industry.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#00A3EE] transition-all duration-200 group hover:pl-2"
                >
                  <FaAngleRight className="text-xs group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{industry.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[#7EB900] to-[#FEB800] rounded-lg flex items-center justify-center">
                <FaInfoCircle className="text-white text-sm" />
              </div>
              <h4 className="text-lg font-bold text-[#0A3161]">Company</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "About Trescor", href: "/about-trescor" },
                { name: "Our Leadership", href: "/leadership" },
                { name: "Careers", href: "/careers" },
                { name: "Partner with Us", href: "/collaborate-with-us" },
                { name: "Why Choose Trescor", href: "/why-trescor" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#7EB900] transition-all duration-200 group hover:pl-2"
                >
                  <FaAngleRight className="text-xs group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FEB800] to-[#F14F21] rounded-lg flex items-center justify-center">
                <FaUsers className="text-white text-sm" />
              </div>
              <h4 className="text-lg font-bold text-[#0A3161]">Support</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "Contact Support", href: "/contact-trescor" },
                { name: "Documentation", href: "/documentation" },
                { name: "Training Resources", href: "/training" },
                { name: "Community Forum", href: "/community" },
                { name: "Service Status", href: "/status" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#FEB800] transition-all duration-200 group hover:pl-2"
                >
                  <FaAngleRight className="text-xs group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-[#F14F21] to-[#00A3EE] rounded-lg flex items-center justify-center">
                <FaLightbulb className="text-white text-sm" />
              </div>
              <h4 className="text-lg font-bold text-[#0A3161]">Resources</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: "Case Studies", href: "/case-studies" },
                { name: "White Papers", href: "/white-papers" },
                { name: "Blog", href: "/blog" },
                { name: "Webinars", href: "/webinars" },
                { name: "Downloads", href: "/downloads" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#F14F21] transition-all duration-200 group hover:pl-2"
                >
                  <FaAngleRight className="text-xs group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media & Trust Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
            <div className="lg:w-1/2">
              <h4 className="text-xl font-bold text-[#0A3161] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#00A3EE] to-[#7EB900] rounded-lg flex items-center justify-center mr-3">
                  <FaUsers className="text-white text-sm" />
                </span>
                Connect & Follow
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/trescor-software-solutions-546012369/",
                    label: "LinkedIn",
                    color: "bg-[#00A3EE]",
                  },
                  {
                    icon: FaXTwitter,
                    href: "https://x.com/Trescor1226",
                    label: "Twitter",
                    color: "bg-[#F14F21]",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/trescorsoftware/",
                    label: "Instagram",
                    color: "bg-[#7EB900]",
                  },
                  {
                    icon: FaFacebook,
                    href: "https://www.facebook.com/profile.php?id=61576887840484",
                    label: "Facebook",
                    color: "bg-[#FEB800]",
                  },
                  {
                    icon: FaThreads,
                    href: "https://www.threads.com/@trescorsoftware",
                    label: "Threads",
                    color: "bg-[#0A3161]",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300 group`}
                    aria-label={social.label}
                  >
                    <social.icon
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust & Certifications */}
            <div className="lg:w-1/3">
              <h5 className="text-lg font-semibold text-[#0A3161] mb-4">
                Trust & Excellence
              </h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#7EB900]/10 to-[#00A3EE]/10 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#7EB900] to-[#00A3EE] rounded-lg flex items-center justify-center">
                    <FaShieldAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A3161]">
                      ISO Certified
                    </p>
                    <p className="text-xs text-gray-600">Quality Assurance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#FEB800]/10 to-[#F14F21]/10 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FEB800] to-[#F14F21] rounded-lg flex items-center justify-center">
                    <FaLightbulb className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A3161]">
                      Innovation Hub
                    </p>
                    <p className="text-xs text-gray-600">Microsoft Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#0A3161] via-[#1a4d7a] to-[#0A3161]">
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-8">
              <p className="text-white font-medium">
                © {new Date().getFullYear()} Trescor Software Solutions. All
                rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-[#00A3EE] transition-colors font-medium"
                >
                  Privacy Policy
                </a>
                <div className="h-4 w-px bg-gray-400" />
                <a
                  href="/terms-of-service"
                  className="text-gray-300 hover:text-[#7EB900] transition-colors font-medium"
                >
                  Terms of Service
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
