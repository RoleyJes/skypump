// import { Link, useLocation } from "react-router-dom";
// import { RouteNavs } from "../../constants/route-nav-enum";

// // const links = [
// //   {
// //     id: 1,
// //     href: RouteNavs.Home,
// //     label: "Home",
// //   },
// //   {
// //     id: 2,
// //     href: RouteNavs.About,
// //     label: "About",
// //   },
// //   {
// //     id: 3,
// //     href: RouteNavs.Features,
// //     label: "Features",
// //   },
// //   {
// //     id: 4,
// //     href: RouteNavs.Benefits,
// //     label: "Benefits",
// //   },
// //   {
// //     id: 5,
// //     href: RouteNavs.Roadmap,
// //     label: "Roadmap",
// //   },
// // ];

// export default function Navlinks() {
//   const nav = useLocation().pathname;

//   return (
//     <>
//       {links.map((link) => (
//         <li
//           className={`text-base ${
//             nav === link.href ? "text-white" : "text-white/50"
//           }`}
//           key={link.id}>
//           <Link to={link.href}>{link.label}</Link>
//         </li>
//       ))}
//     </>
//   );
// }
