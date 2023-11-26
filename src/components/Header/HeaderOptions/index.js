import "./style.css";
import { Link } from "react-router-dom";

const options = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

function HeaderOptions() {
  return (
    <ul className="options">
      {options.map((text) => (
        <li className="option">
          <Link to={`/${text.toLowerCase()}`}>
            <p>{text}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HeaderOptions;
