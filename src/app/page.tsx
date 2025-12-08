import Insights from "../Components/Insights";
import Footer from "../Components/Footer";
import ClientP from "../Components/ClientP";
import ExpertiseP from "../Components/ExpertiseP";
import CoreBusinessP from "../Components/CoreBusinessP";
import CounterP from "../Components/CounterP";
import AboutP from "../Components/AboutP";
import BannerP from "../Components/BannerP";
import Navbar from "../Components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <BannerP />
      <CounterP />
      <CoreBusinessP />
      <ExpertiseP />
      <ClientP />
      <Insights />
      <Footer />
    </>
  );
}
