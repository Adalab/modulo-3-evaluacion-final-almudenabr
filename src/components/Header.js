import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
          alt=""
          className="header__title"
        />
      </Link>
    </header>
  );
};

export default Header;
