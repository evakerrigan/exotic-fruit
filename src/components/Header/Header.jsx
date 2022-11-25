import "./Header.css";
import { Autorization } from "../Autorization/Autorization";
import { Basket } from "../Basket/Basket";
import { NavPage } from "../NavPage/NavPage";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-logo">EXOTIC FRUIT</h1>
      </div>
      <div className="header-right">
        <Autorization />
        <Basket />
        <NavPage />
      </div>
    </div>
  );
};
