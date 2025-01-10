import center from "../../assets/Home/Center.png";

export default function OneStopLaunch() {
  return (
    <section className="p-4 md:px- lg:py-36">
      <div className="max-w-[1337px] mx-auto bg-gradient-to-r from-gradient_pink from-[4.73%] via-gradient_purple via-[57.54%] to-gradient_blue to-[97.42%] rounded-tl-[20px] rounded-tr-[20px] py-6 relative">
        <img
          src={center}
          className="hidden md:block absolute md:left-[-8rem] lg:left-0 -bottom-20"
          alt=""
        />
        <h2 className="font-monaSans text-4xl leading-[3.25rem] tracking-[-0.045rem] uppercase max-w-[643px] mx-auto text-center">
          One stop launch for memes everything you need{" "}
        </h2>
      </div>
    </section>
  );
}
