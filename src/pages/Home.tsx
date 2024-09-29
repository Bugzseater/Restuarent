import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import Explore from "./Explore";

function Home() {
  return (
    <div>

      <div>
      <Header />
      </div>

      <div className="pt-20">
      <Banner/>

      </div>

      <Explore/>

      <Testimonial/>

      <Contact/>

      <Footer/>

    </div>
  );
}

export default Home;
