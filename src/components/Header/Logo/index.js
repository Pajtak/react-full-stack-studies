import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import "./style.css";

function Logo() {
  return (
    <Link to={"/"}>
      <div className="logo">
        <img src={logo} alt="Brand Logo" className="logo-img"></img>
        <p>
          <strong>Alura Books</strong>
        </p>
      </div>
    </Link>
  );
}

export default Logo;
