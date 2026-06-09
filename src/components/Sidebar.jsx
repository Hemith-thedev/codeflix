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
  <>
    <NavigationButton label="Home" linkTo="/" />
    <NavigationButton label="About" linkTo="/about" />
    <NavigationButton label="Contact" linkTo="/contact" />
  </>,
  <NavigationButton
    linkTo="/learn"
    type="dropdown"
    placeholder="Learn"
    options={[
      {
        label: "Technologies",
        linkTo: "/learn/technologies",
        options: [
          { label: "Frontend", linkTo: "/learn/technologies" },
          { label: "Backend", linkTo: "/learn/technologies/backend" },
          { label: "Database", linkTo: "/learn/technologies/database" },
        ],
      },
      {
        label: "Tools",
        linkTo: "/learn/tools",
      },
      {
        label: "Dev-ops",
        linkTo: "/learn/dev-ops",
      }
    ]}
  />,
];

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <div className="wrapper">
        <h3 className="logo">
          {"<"}
          <span className="gradient-text" onClick={() => navigate("/")}>
            Codeflix
          </span>{" "}
          {"/>"}
        </h3>
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
