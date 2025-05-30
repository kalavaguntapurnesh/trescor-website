import SecNavbar from "./../components/SecNavbar";
import Footer from "./../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ContactOne from "../components/ContactOne";
import CalendarBooking from './../components/CalendarBooking';

const Contact = () => {
  return (
    <div>
      <SecNavbar />
      <ScrollToTop />
      <ContactOne />

      {/* <CalendarBooking /> */}

      <Footer />
    </div>
  )
}

export default Contact