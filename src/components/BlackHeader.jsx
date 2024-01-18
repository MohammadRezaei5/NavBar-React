import { useState } from "react";
import logoipsum from "../../public/logo-images/logoipsum-black.svg";
import "./BlackHeader.css";

const BlackHeader = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    if (!isMouseOverDropdown) {
      setIsDropdownVisible(false);
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsMouseOverDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsMouseOverDropdown(false);
  };
  return (
    <header>
      <div className="right-section">
        <div className="log">
          <img src={logoipsum} alt="black-logo" />
        </div>
        <div className="menu">
          <ul className="menu-items">
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="#">محصولات</a>
              <i
                className={`fa-solid fa-chevron  ${
                  isDropdownVisible ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </li>
            <li>
              <a href="#">تماس باما</a>
            </li>
            <li>
              <a href="#">مثلا چیزی</a>
            </li>
          </ul>
          {isDropdownVisible && (
            <div
              className="dropdown-menu"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <ul className="first-section">
                <li>
                  <a href="">زیرمنو 1</a>
                </li>
              </ul>
              <ul className="second-section">
                <li>
                  <a href="">زیرمنو 1</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="login-btn">
        <button className="highlight-btn">ورود</button>
        <button>ثبت نام</button>
      </div>
    </header>
  );
};

export default BlackHeader;
