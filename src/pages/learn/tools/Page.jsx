import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Point from "../../../components/Point";
import Divider from "../../../components/Divider";

gsap.registerPlugin(ScrollTrigger);

export default function ToolsPage() {
  const navigate = useNavigate();
  const mainRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".glow",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "back.out(1.7)",
          duration: 1,
          stagger: 0.25,
        },
      );
    },
    { scope: mainRef },
  );
  const sectionData = [
    {
      title: (
        <span>
          <span className="gradient-text">Version Control</span>
        </span>
      ),
      paragraph:
        "Version control is nothing but storing the files & folders in the cloud, so that the other individuals can use that data in their systems officially.",
      points: {
        heading: "Tools of Version Control",
        subpoints: [
          {
            subject: "Git",
            sub_subpoints: [
              "A Command Line Interface used to type commands and execute them for storing options.",
              "Commands are case sensitive.",
              "Registration to be done only with commands.",
              "Repositories cannot be seen locally, but stored securely in cloud.",
            ],
          },
          {
            subject: "Github",
            sub_subpoints: [
              "A GUI of 'Git' so that the person can store their files and folders in cloud by using the interactive components.",
              "URL depends upon your username.",
              "Registration can be done by sign-up.",
              "Can manage repositories directly on cloud.",
              "Increase productivity & performance by collaborators.",
            ],
          },
        ],
      },
    },
    {
      title: (
        <span>
          <span className="gradient-text">Package Managers</span>
        </span>
      ),
      paragraph:
        "Package Managers are tools that automatically manage project dependencies, libraries, and packages to ensure smooth development workflows.",
      points: {
        heading: "Tools of Package Managers",
        subpoints: [
          {
            subject: "npm - node package manager",
            sub_subpoints: [
              "Default package manager for Node.js environments.",
              "Uses package.json to track project configuration and versions.",
              "Easily installs, updates, and uninstalls open-source libraries via CLI.",
            ],
          },
          {
            subject: "pip - Python",
            sub_subpoints: [
              "The standard package management system used to install and manage software packages written in Python.",
              "Downloads packages directly from Python Package Index (PyPI).",
              "Supports requirements.txt for managing team dependencies efficiently.",
            ],
          },
          {
            subject: "Maven / Gradle - Java",
            sub_subpoints: [
              "Build automation and dependency management tools specifically designed for Java projects.",
              "Maven utilizes pom.xml, while Gradle utilizes build.gradle for project setups.",
              "Downloads and injects required .jar dependencies automatically from central repositories.",
            ],
          },
        ],
      },
    },
    {
      title: (
        <span>
          <span className="gradient-text">Testing</span>
        </span>
      ),
      paragraph:
        "Testing is the process of verifying and validating that a software application or code component works exactly as expected without bugs.",
      points: {
        heading: "Tools of Testing",
        subpoints: [
          {
            subject: "Unit testing - Jest / Mocha",
            sub_subpoints: [
              "Focuses on isolating and testing individual components or functions in code.",
              "Jest provides an integrated framework with great mock support for React.",
              "Ensures low-level functions run correctly before moving to integration stages.",
            ],
          },
          {
            subject: "Integration testing - Selenium, Cypress",
            sub_subpoints: [
              "Tests how different modules, components, or services interact with each other.",
              "Cypress offers real-time reloading and visual debugging directly inside browsers.",
              "Ensures data flows smoothly across frontend UI and backend endpoints.",
            ],
          },
          {
            subject: "System Testing / E2E",
            sub_subpoints: [
              "Validates the entire software product from end-to-end to ensure the system workflow behaves correctly.",
              "Simulates real user interactions across all connected pages and interfaces.",
              "Confirms that the complete system meets business operational standards.",
            ],
          },
        ],
      },
    },
  ];
  return (
    <main ref={mainRef}>
      <section className="hero-section relative">
        <div className="glow absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-1/2 right-0 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="wrapper relative">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h3 className="text-center">
              <span className="gradient-text">
                Tools used for Full Stack Apps
              </span>
            </h3>
            <p className="text-center text-gray-500">
              Version Control | Package Managers | Testing Tools
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="z-10">
        {/* <div className="wrapper bg-linear-to-br from-primary-950 to-secondary-950 p-6! rounded-3xl"> */}
        <div className="wrapper rounded-3xl">
          <h1 className="bg-linear-to-r from-secondary-500 to-white bg-clip-text text-transparent">
            Definition
          </h1>
          <ul>
            <li>
              <p className="text-center bg-linear-to-r from-gray-500 to-white bg-clip-text text-transparent">
                Tools of FSD refer to the complete ecosystem of software
                applications, frameworks, libraries, and utilities that
                developers use to build both the frontend and backend of a
                project. These tools streamline the development lifecycle by
                automating repetitive tasks, managing package dependencies, and
                tracking source code changes efficiently. Master tools like
                version control, code environments, and continuous deployment
                setups are essential to link user interfaces seamlessly with
                central server structures.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-white to-primary-500 bg-clip-text text-transparent">
            Tools used
          </h1>
          {sectionData.map((data, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col justify-start items-start h-fit w-full">
                <h3>
                  {index + 1}. {data.title}
                </h3>
                <ul>
                  <li>
                    <p className="text-gray-300">{data.paragraph}</p>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <p className="uppercase">{data.points.heading}</p>
                      </li>
                      <li>
                        <ul className="ml-4!">
                          {data.points.subpoints.map((subpoint, i) =>
                            Array.isArray(subpoint.sub_subpoints) ? (
                              <Point
                                key={i}
                                serialNo={i}
                                subject={subpoint.subject}
                                label={subpoint.sub_subpoints}
                              />
                            ) : (
                              <Point
                                key={i}
                                serialNo={i}
                                subject={subpoint.subject}
                                label={subpoint.label}
                              />
                            ),
                          )}
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr className="text-blue-500" />
            </React.Fragment>
          ))}
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <h1 className="gradient-text">Shall we move to Dev-ops?</h1>
          <button
            className="primary-button secondary-color"
            onClick={() => navigate("/learn/dev-ops")}
          >
            Go to Dev-ops_
          </button>
        </div>
      </section>
      <div className="min-h-10" />
    </main>
  );
}
