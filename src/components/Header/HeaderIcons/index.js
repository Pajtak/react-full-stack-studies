import profile from "../../../assets/perfil.svg";
import sack from "../../../assets/sacola.svg";
import "./style.css";

const icons = [profile, sack];

function HeaderIcons() {
  return (
    <ul className="icons">
      {icons.map((icon) => (
        <li className="icon">
          <img src={icon} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default HeaderIcons;
