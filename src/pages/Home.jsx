import Carousel from "../components/Carousel";
import Final from "../components/Final";
import Footer from "./../components/Footer";
import FAQ from "../components/FAQ";
import ScrollToTop from "../components/ScrollToTop";
import MainLayout from './../components/MainLayout';

const Home = () => {
  return (
    <div>
      <MainLayout />
      <ScrollToTop />
      <Carousel />
      {/* <Reviews /> */}
      {/* <FAQ /> */}
      <Final />
      <Footer />
    </div>
  )
}

export default Home