interface AboutListTypes {
  id?: number;
  title?: string;
  detail?: string;
  img?: string;
}

export default function AboutList({ id, title, detail, img }: AboutListTypes) {
  return (
    <div
      key={id}
      className={`bg-project_NavyBlue px-6 pt-12 lg:pt-9 pb-11 rounded-2xl text-white/85 relative`}>
      <div className="absolute top-[-3rem] right-0 rounded-2xl size-[6rem] bg-black flex items-center justify-center pb-4 ps-1">
        <img src={img} alt="" />
      </div>

      {/* Top curve */}
      <div
        className={`absolute top-[0rem] right-[6rem] rounded-tr-2xl size-4 bg-project_NavyBlue shadow-[3px_-3px_0px_3px_rgba(0,0,0,1)]`}></div>

      {/* right curve */}
      <div
        className={`absolute top-[48px]  right-[0rem] rounded-tr-2xl size-4 bg-project_NavyBlue shadow-[8px_-7px_0px_6px_rgba(0,0,0,1)] rotate-[-1deg]`}></div>

      <p className="font-semibold text-xl">{title}</p>
      <p className="mt-6 text-base">{detail}</p>
    </div>
  );
}
