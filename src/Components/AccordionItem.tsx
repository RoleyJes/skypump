import plus from "../assets/Home/plus.png";
import minus from "../assets/Home/minus.png";

interface AccordionType {
  title: string;
  description: string;
  id: number;
  curOpen: null;
  onOpen: Function;
}

export default function AccordionItem({
  title,
  description,
  id,
  curOpen,
  onOpen,
}: AccordionType) {
  const isOpen = id === curOpen;

  function handleIsOpen() {
    onOpen(isOpen ? null : id);
  }

  return (
    <div
      className={`ps-2 lg:ps-10 rounded-lg border-2 border-project_black text-neutral100 ${
        isOpen ? "pb-[1.12rem] lg:pb-[1.38rem]" : ""
      }`}>
      <button
        className="flex items-center justify-between w-full text-base lg:text-2xl font-medium"
        onClick={handleIsOpen}>
        <span>{id.toString().length <= 1 ? `0${id}` : id}</span>
        {/* <span className="text-[1.1875rem] leading-[2.196rem] lg:leading-[1.725rem] lg:text-[1.4375rem] lg:font-semibold ">
          {title}
        </span> */}
        <span className="">{title}</span>

        <span
          className={`py-7 rounded-r-lg  px-8 ${
            isOpen
              ? "bg-gradient-to-r from-gradient_pink from-[4.73%] via-gradient_purple via-[57.54%] to-gradient_blue to-[97.42%]"
              : "bg-project_black"
          }`}>
          {isOpen ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out px-3 lg:ps-[3.23rem] lg:pe-10 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-11"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}>
        <p className=" overflow-hidden text-base lg:text-xl lg:leading-9 font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
