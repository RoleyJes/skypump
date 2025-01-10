import SubHeader from "../SubHeader";
import TeamMember from "./TeamMember";
import tempTeam from "../../assets/Home/tempTeam.png";
import twitterIcon from "../../assets/Home/twitter.png";
import tiktokIcon from "../../assets/Home/tiktok.png";
import linkedInIcon from "../../assets/Home/linkedIn.png";
import emailIcon from "../../assets/Home/email.png";
import { members } from "../../constants/data";

const teamMembers = [
  {
    id: 1,
    img: tempTeam,
    name: "Pratik Gauri",
    role: "Founder, 5ire",
    twitter: "/",
    tiktok: "/",
    linkedIn: "/",
    email: "/",
    twitterIcon: twitterIcon,
    tiktokIcon: tiktokIcon,
    linkedInIcon: linkedInIcon,
    emailIcon: emailIcon,
  },
  {
    id: 2,
    img: tempTeam,
    name: "Pratik Gauri",
    role: "Founder, 5ire",
    twitter: "/",
    tiktok: "/",
    linkedIn: "/",
    email: "/",
    twitterIcon,
    tiktokIcon,
    linkedInIcon,
    emailIcon,
  },
];

export default function DreamTeam() {
  return (
    <section className="p-4 lg:py-36 md:px-8 lg:px-10 font-dmSans">
      <div className="max-w-[76rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2.38rem] items-center">
          <div>
            <SubHeader
              largeGradientSubHeader="Dream Team"
              largeWhiteSubHeader="Meet Our"
              largeSubHeaderStyles="flex flex-col tracking-[0.44rem]"
              largeGradientSubHeaderStyles="order-2"
              bottomSmallSubHeader="Meet the Visionaries Behind Sky Pump"
            />

            <p className="mt-5 text-base text-project_grey">
              Sky Pump is championed by an elite team of blockchain pioneers,
              business strategists, and industry leaders whose combined
              expertise propels the platform to the forefront of the meme token
              revolution. Each member's unique strengths contribute to a
              comprehensive, robust, and dynamic ecosystem.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-11">
              {teamMembers.map((member) => (
                <TeamMember {...member} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-11 mt-11">
          {members.map((member) => (
            <TeamMember {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
