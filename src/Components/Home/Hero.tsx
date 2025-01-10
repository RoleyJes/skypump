import frame1 from "../../assets/Home/Frame1.webp";
import frame3 from "../../assets/Home/frame3.webp";
import GlassFrame from "../../assets/Home/GlassFrame.webp";
import Notif from "../../assets/Home/Notif.webp";
import group from "../../assets/Home/Group134.png";
import vector from "../../assets/Home/Vector7.png";
import HeroHeader from "./HeroHeader";
import ButtonLink from "../ButtonLink";
import Navbar from "../navbar/Navbar";

export default function Hero() {
  return (
    <section className="bg-black/80 bg-landingPage_bg bg-no-repeat bg-center bg-cover bg-blend-overlay min-h-screen relative px-4 md:px-8 xl:px-[6.3125rem] pt-[6.875rem] overflow-hidden">
      <Navbar />
      <img src={vector} alt="" className="absolute left-0 top-0" />
      <img src={group} alt="" className="absolute right-0 top-0" />

      <div className="max-w-[83rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28 items-center">
          <div>
            <div className="xl:w-[501px]">
              <HeroHeader />
              <p className="font-medium text-xl mt-6 mb-9 text-white/60 font-dmSans">
                Empowering creators with advanced tools and unparalleled
                blockchain access
              </p>

              <div className="flex items-center gap-7">
                <ButtonLink to="/" text="Discover the Future"></ButtonLink>
                <ButtonLink
                  to="/"
                  text="Join Our Community"
                  style="opacity-70"></ButtonLink>
              </div>
            </div>
          </div>

          <div>
            <figure className="flex gap-4">
              <div className="flex flex-col gap-9 items-center">
                <img src={frame1} alt="" />
                <img src={frame3} alt="" />
              </div>
              <div className="mt-11 flex flex-col">
                <img src={GlassFrame} alt="" />
                <img src={Notif} className="-ms-8" alt="" />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
