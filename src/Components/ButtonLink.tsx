import { Link } from "react-router-dom";

interface ButtonLinkTypes {
  to: string;
  text?: string;
  style?: string;
}

export default function ButtonLink({ to, text, style }: ButtonLinkTypes) {
  return (
    <Link
      to={to}
      className={`py-5 px-4 rounded-[30px] text-sm font-normal tracking-[-0.41px] text-[#f2f2f7] ${style}`}>
      {text}
    </Link>
  );
}
