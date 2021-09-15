import { h } from "preact";
import StaticGallery from "./StaticGallery";
import Gallery from "../components/Gallery/index";

const Header = ({ headerLogo, headerPhone }) => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top-logo">
          <img src={headerLogo} alt={headerLogo} />
        </div>
        <div className="header__top-name">{headerPhone}</div>
      </div>
    </div>
  );
};

export default Header;
