interface SubHeaderTypes {
  smallSubHeader?: string;
  largeGradientSubHeader?: string;
  largeWhiteSubHeader?: string;
  largeSubHeaderStyles?: string;
  bottomSmallSubHeader?: string;
  largeWhiteSubHeaderStyles?: string;
  largeGradientSubHeaderStyles?: string;
}

export default function SubHeader({
  smallSubHeader,
  largeGradientSubHeader,
  largeGradientSubHeaderStyles,
  largeWhiteSubHeader,
  largeWhiteSubHeaderStyles,
  largeSubHeaderStyles,
  bottomSmallSubHeader,
}: SubHeaderTypes) {
  return (
    <div className="text-center xl:text-start flex flex-col gap-4">
      {smallSubHeader && (
        <p className="font-semibold text-lg uppercase text-project_grey">
          {smallSubHeader}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl lg:leading-snug xl:text-[4rem] xl:leading-[4.52rem] font-monaSans ${largeSubHeaderStyles}`}>
        <span
          className={`bg-gradient-to-r from-gradient_pink from-[4.73%] via-gradient_purple via-[57.54%] to-gradient_blue to-[97.42%] bg-clip-text text-transparent ${largeGradientSubHeaderStyles}`}>
          {largeGradientSubHeader}
        </span>{" "}
        <span className={`${largeWhiteSubHeaderStyles}`}>
          {largeWhiteSubHeader}
        </span>
      </h2>
      {bottomSmallSubHeader && (
        <p className="font-dmSans text-2xl leading-[1.75rem] text-white">
          {bottomSmallSubHeader}
        </p>
      )}
    </div>
  );
}
