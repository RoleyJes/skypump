import SubHeader from "../SubHeader";
import { general } from "../../constants/data";
import Accordion from "../Accordion";

export default function Faq() {
  return (
    <>
      <section className=" px-2 lg:px-[6.19rem] py-6 md:py-9 md:px-8 lg:pt-[6.94rem] lg:pb-[3.5rem]">
        <SubHeader
          largeWhiteSubHeader="Frequently Asked"
          largeGradientSubHeader="Questions"
          largeSubHeaderStyles="flex gap-x-4 justify-center text-center mx-auto tracking-[0.44rem] flex-wrap lg:flex-nowrap px-2"
          largeGradientSubHeaderStyles="order-2"
        />

        <div className="max-w-[50.5rem] mx-auto m-12 lg:mt-[6.5rem]">
          <div data-aos="fade-up">
            <div className="">
              <Accordion data={general} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
