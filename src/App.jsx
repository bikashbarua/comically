import Navbar from "./Navbar";
import Hero from "./Hero";
import AnalyticsSection from "./Analytics";
import ComicsGrid from "./comics";
import Footer from "./footer";
import CTASection from "./cta";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnalyticsSection />
      <ComicsGrid />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
