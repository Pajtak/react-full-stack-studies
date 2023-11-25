import "./style.css";

const options = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function HeaderOptions() {
  return (
    <ul className="options">
      {options.map((text) => (
        <li className="option">
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default HeaderOptions;
