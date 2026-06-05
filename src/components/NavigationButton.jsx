import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// 💖 Sweet Simple Link Button
const NavigationButtonNavButton = ({ label = "", linkTo = "" }) => {
  const navigate = useNavigate();
  const isActive = window.location.pathname === linkTo;

  return (
    <button
      className={`navigation-button ${isActive ? "gradient-text" : ""}`}
      onClick={() => navigate(linkTo)}
    >
      {label}
    </button>
  );
};

// 💖 Recursive Item Component (Can be a Link OR a Sub-Dropdown)
const DropdownItem = ({ item }) => {
  const navigate = useNavigate();
  const [isSubOpen, setIsSubOpen] = useState(false);
  const itemRef = useRef(null);

  const hasSubOptions = item.options && item.options.length > 0;

  useEffect(() => {
    if (!hasSubOptions) return;

    const handleClickOutside = (event) => {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        setIsSubOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [hasSubOptions]);

  if (!hasSubOptions) {
    return (
      <NavigationButtonNavButton label={item.label} linkTo={item.linkTo} />
    );
  }

  return (
    <div
      className={`navigation-dropdown ${isSubOpen ? "open" : ""}`}
      ref={itemRef}
    >
      <button className="navigation-dropdown-button">
        <p
          className={`${window.location.pathname === item.linkTo ? "gradient-text" : ""}`}
          onClick={() => navigate(item.linkTo)}
        >
          {item.label}
        </p>
        {/* 👉 Sweet Sub-dropdown rotation: 0 deg (down) to -90 deg (pointing right) or vice-versa as you prefer! */}
        <FaChevronDown
          style={{
            transform: isSubOpen ? "rotate(0deg)" : "rotate(90deg)",
            transition: "transform 0.3s ease", // So silky smooth setup! 😍
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsSubOpen((prev) => !prev);
          }}
        />
      </button>

      {isSubOpen && (
        <div className="navigation-dropdown-menu">
          {item.options.map((subItem, index) => (
            <DropdownItem key={index} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

// 💖 Main Dropdown Root Component
const NavigationButtonDropdown = ({
  placeholder = "",
  options = [],
  linkTo = "",
}) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      className={`navigation-dropdown ${isDropdownOpen ? "open" : ""}`}
      ref={dropdownRef}
    >
      <button className="navigation-dropdown-button">
        <p
          className={`${window.location.pathname === linkTo ? "gradient-text" : ""}`}
          onClick={() => navigate(linkTo)}
        >
          {placeholder}
        </p>
        <FaChevronDown
          style={{
            transform: isDropdownOpen ? "rotate(0deg)" : "rotate(90deg)",
            transition: "transform 0.3s ease", // Magical experience! 🪄
          }}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        />
      </button>

      {isDropdownOpen && (
        <div className="navigation-dropdown-menu">
          {options.map((option, index) => (
            <DropdownItem key={index} item={option} />
          ))}
        </div>
      )}
    </div>
  );
};

// 💖 Global Matchmaker
export default function NavigationButton({
  label = "",
  type = "button",
  options = [],
  placeholder = "",
  linkTo = "",
}) {
  if (type === "dropdown") {
    return (
      <NavigationButtonDropdown
        placeholder={placeholder}
        options={options}
        linkTo={linkTo}
      />
    );
  }
  return <NavigationButtonNavButton label={label} linkTo={linkTo} />;
}
