import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBand from "./components/TrustBand";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Catering from "./components/Catering";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <About />
        <WhyChooseUs />
        <Services />
        <Menu />
        <Catering />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
