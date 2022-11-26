import "./Header.css";
import { Autorization } from "../Autorization/Autorization";
import { Basket } from "../Basket/Basket";
import { NavPage } from "../NavPage/NavPage";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-logo">
          <a href="" className="header-logo-link">
            EXOTIC FRUIT
          </a>
        </h1>
      </div>
      <div className="header-right">
        <div className="wrapper-header">
          <Autorization />
          <Basket />
        </div>
        <NavPage />
      </div>
    </div>
  );
};
