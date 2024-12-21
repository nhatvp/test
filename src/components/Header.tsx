import React from "react";
import logo from "../assets/logo.svg";
import { ReactComponent as MEMO } from "../assets/svgs/icon_memo.svg";
import { ReactComponent as CHALLENGE } from "../assets/svgs/icon_challenge.svg";
import { ReactComponent as INFO } from "../assets/svgs/icon_info.svg";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {

  const navigate = useNavigate()

  const handlePushHealthyPage = () =>{
    navigate('/Healthy')
  }
  return (
    <header className="header">
      <div className="header-left" onClick={handlePushHealthyPage}>
        <img src={logo} alt="Healthy Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <nav className="header-nav" style={{marginRight:24}}>
          <ul>
            <li>
              <a href="/record" className="nav-item">
                <span className="icon">
                  <MEMO />
                </span>
                自分の記録
              </a>
            </li>
            <li>
              <a href="/column" className="nav-item">
                <span className="icon">
                  <CHALLENGE />
                </span>
                チャレンジ
              </a>
            </li>
            <li>
              <a href="#notification" className="nav-item">
                <span className="icon">
                  <INFO />
                </span>
                お知らせ
                <span className="notification-badge">1</span>
              </a>
            </li>
          </ul>
        </nav>
        <button className="menu-button">☰</button>
      </div>
    </header>
  );
};

export default Header;
