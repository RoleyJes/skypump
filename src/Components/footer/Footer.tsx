import { Link } from "react-router-dom";
// import facebook from "../../assets/Footer/facebook.png";
import twitter from "../../assets/Footer/twitter.png";
import linkedIn from "../../assets/Footer/linkedIn.png";
// import instagram from "../../assets/Footer/instagram.png";
import footerLogo from "../../assets/Footer/footerLogo.png";
import FooterLinksList from "./FooterLinksList";
import { companyList, helpList, resourcesList } from "../../constants/data";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="p-4 md:p-8 lg:py-8 footerBg">
      <div className="max-w-[71.25rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-20 xl:gap-[15rem] px-3">
          <div className="col-span-2">
            <img src={footerLogo} alt="Sky pump" />
            <p className="mt-4 text-sm text-project_grey">
              Euismod libero faucibus egestas elementum scelerisque porta
              commodo purus nam. Ante ac egestas duis. Euismod libero faucibus
              egestas elementum scelerisque porta commodo purus nam. Ante ac
              egestas duis.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-col gap-5 items-center justify-between md:flex-row md:items-start md:gap-0">
              <FooterLinksList header="Company" listArr={companyList} />
              <FooterLinksList header="Resources" listArr={resourcesList} />
              <FooterLinksList header="Help" listArr={helpList} />
            </div>
          </div>
        </div>

        {/* Gradient line */}
        <div className="h-[0.06rem] my-[1.88rem] bg-gradient-to-r from-[rgba(47,70,106,0.10)] from-[-2.94%] via-[#2F466A] via-[49.17%] to-[rgba(47,70,106,0.10)] to-[102.37%]"></div>

        <div className="flex flex-col gap-3 md:flex-row items-center justify-center sm:justify-between">
          <p className="">
            Built with ❤ by Jessica | <span>{year}</span>
          </p>

          {/* Socials */}
          <div className="flex gap-3">
            <Link
              to="https://x.com/jessey_ca?t=W-DTTNu8-A6EfHRr6rkbSg&s=08"
              target="_blank">
              <img src={twitter} alt="twitter" />
            </Link>
            <Link
              to="https://ng.linkedin.com/in/jessica-imoesemi-11710b179"
              target="_blank">
              <img src={linkedIn} alt="linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
