import { Link } from "react-router-dom";

interface items {
  id?: number;
  link?: string;
  title?: string;
}

interface FooterLinksListTypes {
  header?: string;
  listArr?: items[];
}

export default function FooterLinksList({
  header,
  listArr,
}: FooterLinksListTypes) {
  return (
    <ul className="flex flex-col text-center lg:text-start gap-2 lg:gap-5 text-sm">
      <p className="text-base">{header}</p>
      {listArr?.map((list) => (
        <li className="text-project_grey" key={list.id}>
          <Link to={list.link ?? "/"}>{list.title}</Link>
        </li>
      ))}
    </ul>
  );
}
