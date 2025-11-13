import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Support from "./pages/Support";
import CollaborateWithUs from "./pages/CollaborateWithUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Industries from "./pages/Industries";
import MicrosoftDynamics365Finance from "./pages/services/MicrosoftDynamics365Finance";
import BIAnalytics from "./pages/services/BIAnalytics";
import AntiSlaveryPolicy from "./pages/AntiSlaveryPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import UserConsent from "./pages/UserConsent";
import Manufacturing from './pages/industries/Manufacturing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact-trescor" element={<Contact />}></Route>
      <Route path="/about-trescor" element={<About />}></Route>
      <Route path="/dynamics-365-support-services" element={<Support />} />
      <Route path="/collaborate-with-us" element={<CollaborateWithUs />} />

      <Route path="/industries" element={<Industries />} />

      <Route
        path="/services-microsoft-dynamics-365-finance"
        element={<MicrosoftDynamics365Finance />}
      />

      <Route path="/bi-analytics-services" element={<BIAnalytics />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/anti-slavery-policy" element={<AntiSlaveryPolicy />} />

      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/user-consent" element={<UserConsent />} />


      <Route path="/industries/manufacturing" element={<Manufacturing />} />
    </Routes>
  );
}

export default App;
