import { Link } from "react-router-dom";

interface TeamMemberStyles {
  id?: number;
  img?: string;
  name?: string;
  role?: string;
  twitter?: any;
  linkedIn?: any;
  tiktok?: any;
  email?: any;
  twitterIcon?: string;
  linkedInIcon?: string;
  tiktokIcon?: string;
  emailIcon?: string;
}

export default function TeamMember({
  id,
  img,
  name,
  role,
  twitter,
  twitterIcon,
  linkedIn,
  linkedInIcon,
  tiktok,
  tiktokIcon,
  email,
  emailIcon,
}: TeamMemberStyles) {
  return (
    <div
      className="bg-[#010005] p-6 rounded-[1.25rem] border-[0.5px] border-[rgba(255,255,255,0.2)] shadow-[0px_2px_10px_7px_rgba(81,3,117,0.20)] flex flex-col items-center gap-3"
      key={id}>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <p className="text-white text-2xl font-semibold">{name}</p>
      <p className="text[#b6b6b6] text-base -mt-3">{role}</p>
      <div className="flex gap-4 items-center">
        <Link to={twitter}>
          <img src={twitterIcon} alt="" />
        </Link>
        <Link to={tiktok}>
          <img src={tiktokIcon} alt="" />
        </Link>
        <Link to={linkedIn}>
          <img src={linkedInIcon} alt="" />
        </Link>
        <Link to={email}>
          <img src={emailIcon} alt="" />
        </Link>
      </div>
    </div>
  );
}
