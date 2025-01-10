import SubHeader from "../SubHeader";

export default function Leadership() {
  return (
    <section className="p-4 lg:py-20 md:px-12 xl:px-24">
      <div className="max-w-[75.3rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20">
        <div className="bg-gradient-to-r from-gradient_pink from-[4.73%] via-gradient_purple via-[57.54%] to-gradient_blue to-[97.42%]"></div>

        <div className="">
          <SubHeader
            largeGradientSubHeader="Visionary"
            largeWhiteSubHeader="Leadership"
            bottomSmallSubHeader="Sky Wee: Sky Pump visionary leader"
            largeSubHeaderStyles="tracking-[0.44rem]"
            largeWhiteSubHeaderStyles="block mt-[-0.5rem]"
          />

          <div className="font-dmSans text-base text-project_grey mt-5">
            <p>
              At the helm of Sky Pump is Sky Wee, a luminary in the blockchain
              arena and a recognized Official Binance KOL with a vast following
              exceeding 4 million across various social platforms. Sky's
              profound influence in the crypto community is complemented by his
              exceptional leadership in spearheading innovative projects that
              have collectively raised over $50 million. His strategic acumen
              and deep industry connections are instrumental in shaping the
              vision and direction of Sky Pump.
            </p>
            <p className="my-5">
              Sky’s journey in the blockchain space is marked by his pioneering
              approach to integrating technology with user-centric solutions,
              making blockchain accessible and beneficial for a broader
              audience. His insights into market dynamics and his foresight in
              anticipating industry trends have positioned Sky Pump at the
              forefront of the meme token revolution. Under his leadership, Sky
              Pump is designed to be more than a platform; it's a comprehensive
              ecosystem that supports creators from conception to realization
              and beyond, ensuring their projects are not only launched but
              thrive in the competitive market.
            </p>
            <p>
              Sky’s commitment to excellence and innovation is mirrored in his
              involvement in strategic planning, partnership formation, and
              overall ecosystem growth. His vision extends beyond current market
              needs, aiming to continuously evolve Sky Pump to meet future
              challenges and opportunities in the blockchain space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
