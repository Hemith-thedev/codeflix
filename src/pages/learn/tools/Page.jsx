import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Point from "../../../components/Point";

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
  const Divider = () => (
    <section className="py-20!">
      <hr className="text-gray-300 h-0.5 w-full" />
    </section>
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
              "Commands are case sensetive.",
              "Registration to be don only with commands.",
              "repositories cannot bee seen, but stored in cloud.",
            ],
          },
          {
            subject: "Github",
            sub_subpoints: [
              "A GUI of 'Git' so that the person can store their files and folders in cloud bu using the interactive components.",
              "URL depends upon your username.",
              "Registration can be done by sign-up.",
              "Can manage repositories direcly on cloud.",
              "Increase productivity & performance by collaborators",
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
      paragraph: "<definition>",
      points: {
        heading: "Tools of Package Managers",
        subpoints: [
          {
            subject: "npm - node package manager",
            sub_subpoints: ["<point>"],
          },
          {
            subject: "pip - Python",
            sub_subpoints: ["<point>"],
          },
          {
            subject: "Jest / Mocha - Java",
            sub_subpoints: ["<point>"],
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
      paragraph: "<definition>",
      points: {
        heading: "Tools of Testing",
        subpoints: [
          {
            subject: "Unit testing - Jest / Mocha",
            sub_subpoints: ["<point>"],
          },
          {
            subject: "Integration testing - Selenium, Cypress",
            sub_subpoints: ["<point>"],
          },
          {
            subject: "Jest / Mocha - Java",
            sub_subpoints: ["<point>"],
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
              Version Control <span className="text-white">|</span> Package
              Managers <span className="text-white">|</span> Testing Tools
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
                <span className="gradient-text">Tools</span> also play a vital
                role in Full Stack Developemnt. They automate the work easily,
                store data in cloud or locally and helpful for testing an
                Application also.
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
