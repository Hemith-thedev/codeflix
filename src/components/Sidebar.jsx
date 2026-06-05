import React from "react";
import NavigationButton from "./NavigationButton";
import { useNavigate } from "react-router-dom";

const menuOptions = [
  {
    label: "Good",
    options: [
      { label: "Home", linkTo: "/" },
      { label: "Movies", linkTo: "/movies" },
      { label: "TV Shows", linkTo: "/tv-shows" },
      { label: "My List", linkTo: "/my-list" },
    ],
  },
];

const SideBarNavLinks = [
  <NavigationButton
    linkTo="/"
    label="Home"
    type="button"
  />,
  <NavigationButton
    linkTo="/learn"
    type="dropdown"
    placeholder="Learn"
    options={[{ label: "HTML", linkTo: "/learn/html" }]}
  />,
];

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <div className="wrapper">
        <h1 className="logo">
          {"<"}
          <span className="gradient-text" onClick={() => navigate("/")}>Codeflix</span> {"/>"}
        </h1>
        <div className="sidebar-nav-buttons">
          {SideBarNavLinks.map((button, index) => (
            <React.Fragment key={index}>
              {button}
              {index !== SideBarNavLinks.length - 1 && (
                <hr className="divider" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
}
