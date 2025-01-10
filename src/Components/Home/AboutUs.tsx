import exchange from "../../assets/Home/swap-exchange 4.png";
import { aboutUsLists } from "../../constants/data";
import SubHeader from "../SubHeader";
import AboutList from "./AboutList";

export default function AboutUs() {
  return (
    <section className="p-4 md:px-8 lg:p-8 xl:py-20">
      <div className="max-w-[82.3rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left grid */}
          <div>
            <SubHeader
              smallSubHeader="About Us"
              largeGradientSubHeader="Shaping the Future"
              largeWhiteSubHeader="of Finance Together"
            />
            <p className="font-dmSans text-base text-[rgb(205,205,205)] mt-5 text-justify">
              Sky Pump is the world's first all-in-one, multi-chain platform
              dedicated to revolutionizing the meme token market. With our
              robust toolset, direct influencer access, and innovative trading
              features, we're setting new standards in the cryptocurrency world.
            </p>
          </div>

          {/* Right grid */}
          <div>
            <AboutList
              title="Direct Access to Influencers"
              detail="Provides grants, assistance with listings on centralized exchanges (CEXs), and liquidity provision, fostering a supportive environment for meme token creators."
              img={exchange}
            />
          </div>
        </div>
      </div>
      {/* List */}
      <div className="max-w-[75.625rem] mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-8 lg:gap-20">
          {aboutUsLists.map((item) => (
            <AboutList {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
