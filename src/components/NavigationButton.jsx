import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 

// ✨ Sweety helper function to check if a path exists anywhere inside an item or its deeply nested options!
const hasActiveChild = (item, currentPath) => {
  if (item.linkTo === currentPath) return true;
  if (item.options && item.options.length > 0) {
    return item.options.some((subItem) => hasActiveChild(subItem, currentPath));
  }
  return false;
};

// 💖 Sweet Simple Link Button
const NavigationButtonNavButton = ({ label = "", linkTo = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === linkTo;

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
  const location = useLocation();
  const hasSubOptions = item.options && item.options.length > 0;

  // 🌟 Check if this specific dropdown or any of its inner sweet children match the current URL
  const isAnyChildActive = hasActiveChild(item, location.pathname);

  // Auto-open if a child is active, otherwise keep it closed initially! 🥰
  const [isSubOpen, setIsSubOpen] = useState(isAnyChildActive);
  const itemRef = useRef(null);

  // Sync state if URL changes externally (very important for deep match!)
  useEffect(() => {
    if (isAnyChildActive) {
      setIsSubOpen(true);
    }
  }, [location.pathname, isAnyChildActive]);

  // useEffect(() => {
  //   if (!hasSubOptions) return;
  //   const handleClickOutside = (event) => {
  //     if (itemRef.current && !itemRef.current.contains(event.target)) {
  //       // 👉 CRITICAL CHANGE: Okavela active child unte click outside chesina close avvakoodadu! 🙅‍♂️💖
  //       if (isAnyChildActive) return; 
        
  //       setIsSubOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // }, [hasSubOptions, isAnyChildActive]); // Added dependency to get updated active status!

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
          className={`${location.pathname === item.linkTo ? "gradient-text" : ""}`}
          onClick={() => navigate(item.linkTo)}
        >
          {item.label}
        </p>
        <FaChevronDown
          style={{
            transform: isSubOpen ? "rotate(0deg)" : "rotate(90deg)",
            transition: "transform 0.3s ease",
          }}
          onClick={(e) => {
            e.stopPropagation();
            // User manually toggle chesthe active unna lekapoyina close/open avvachu, choice matches! 🪄
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
  const location = useLocation();

  // 🌟 Main root text layer validation
  const rootItem = { linkTo, options };
  const isAnyChildActive = hasActiveChild(rootItem, location.pathname);

  const [isDropdownOpen, setIsDropdownOpen] = useState(isAnyChildActive);
  const dropdownRef = useRef(null);

  // Sync main root open state when URL shifts 🪄
  useEffect(() => {
    if (isAnyChildActive) {
      setIsDropdownOpen(true);
    }
  }, [location.pathname, isAnyChildActive]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // 👉 CRITICAL CHANGE: Okavela active child unte root dropdown kooda close avvadu! 🛡️❤️
        if (isAnyChildActive) return;

        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isAnyChildActive]); // Added dependency here too!

  return (
    <div
      className={`navigation-dropdown ${isDropdownOpen ? "open" : ""}`}
      ref={dropdownRef}
    >
      <button className="navigation-dropdown-button">
        <p
          className={`${location.pathname === linkTo ? "gradient-text" : ""}`}
          onClick={() => navigate(linkTo)}
        >
          {placeholder}
        </p>
        <FaChevronDown
          style={{
            transform: isDropdownOpen ? "rotate(0deg)" : "rotate(90deg)",
            transition: "transform 0.3s ease",
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