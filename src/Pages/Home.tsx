import Footer from "../Components/footer/Footer";
import AboutUs from "../Components/Home/AboutUs";
import DreamTeam from "../Components/Home/DreamTeam";
import Faq from "../Components/Home/Faq";
import Hero from "../Components/Home/Hero";
import Leadership from "../Components/Home/Leadership";
import OneStopLaunch from "../Components/Home/OneStopLaunch";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <OneStopLaunch />
        <AboutUs />
        <Leadership />
        <DreamTeam />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
