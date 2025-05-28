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
import Benefits from "./pages/Benefits";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Industries from "./pages/Industries";
import MicrosoftDynamics365Finance from './pages/services/MicrosoftDynamics365Finance';
import MicrosoftDynamics365 from "./pages/services/MicrosoftDynamics365";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact-trescor" element={<Contact />}></Route>
      <Route path="/about-trescor" element={<About />}></Route>
      <Route path="/dynamics-365-support-services" element={<Support />} />
      <Route path="/collaborate-with-us" element={<Benefits />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/industries" element={<Industries />} />

      <Route
        path="/services-microsoft-dynamics-365-finance"
        element={<MicrosoftDynamics365Finance />}
      />

      <Route
        path="/services-microsoft-dynamics-365"
        element={<MicrosoftDynamics365 />}
      />


    </Routes>
  )
}

export default App
