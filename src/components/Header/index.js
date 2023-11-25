import HeaderIcons from "./HeaderIcons";
import HeaderOptions from "./HeaderOptions";
import Logo from "./Logo";
import "./style.css";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </header>
  );
}

export default Header;
