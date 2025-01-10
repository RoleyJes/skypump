import { Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="sky pump logo" />
    </Link>
  );
}
