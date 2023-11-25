import logo from "../../../assets/logo.svg";
import "./style.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Brand Logo" className="logo-img"></img>
      <p>
        <strong>Alura Books</strong>
      </p>
    </div>
  );
}

export default Logo;
