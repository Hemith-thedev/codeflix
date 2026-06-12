import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import Point from "../../../components/Point";
import Divider from "../../../components/Divider";

export default function TechnologiesBackendPage() {
  const navigate = useNavigate();
  const page = useRef(null);
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
    { scope: page },
  );
  const sectionData = [
    {
      title: (
        <span>
          <span className="gradient-text">Node.js</span>
        </span>
      ),
      paragraph:
        "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser, primarily for server-side logic.",
      points: {
        heading: "Key points",
        subpoints: [
          {
            subject: "History",
            sub_subpoints: [
              "Created and developed by 'Ryan Dahl' in 2009.",
              "Built on top of Google Chrome's V8 JavaScript JavaScript execution engine.",
              "Governed and maintained globally by the OpenJS Foundation.",
            ],
          },
          {
            subject: "Features",
            sub_subpoints: [
              "Asynchronous and Event-Driven architecture",
              "Single-Threaded event loop model with background worker pools",
              "Non-blocking I/O operations for high concurrent traffic",
              "NPM (Node Package Manager) ecosystem for library sharing",
              "Native cross-platform execution (Windows, Linux, macOS)",
            ],
          },
        ],
      },
    },
    {
      title: (
        <span>
          <span className="gradient-text">Django</span>
        </span>
      ),
      paragraph:
        "Django is a high-level, open-source Python web framework that encourages rapid development and clean, pragmatic architectural design.",
      points: {
        heading: "Key points",
        subpoints: [
          {
            subject: "History",
            sub_subpoints: [
              "Created in 2003 by Adrian Holovaty and Simon Willison at a newspaper company.",
              "Officially released publicly under a BSD license in July 2005.",
              "Named after the legendary jazz guitarist Django Reinhardt.",
            ],
          },
          {
            subject: "Features",
            sub_subpoints: [
              "Batteries-Included philosophy providing auth, admin, and ORM tools out-of-the-box",
              "MVT (Model-View-Template) architectural pattern variant",
              "Built-in Object-Relational Mapper (ORM) for easy database interaction",
              "Robust built-in security protections against SQL Injection, XSS, and CSRF",
              "Automatic, production-ready Admin Graphic Interface generation",
            ],
          },
        ],
      },
    },
  ];
  return (
    <main ref={page}>
      <section className="hero-section relative">
        <div className="glow absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="wrapper relative">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h3 className="text-center">
              <span className="gradient-text">Technologies of Backend</span>
            </h3>
            <p className="text-center text-gray-500">Nodes.JS | Django</p>
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
                In Full Stack Development, the term '
                <span className="gradient-text">Technology</span>' refers to the
                specific Programming language, frameworks, libraries and
                database used to to complete the FSD Application.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-white to-primary-500 bg-clip-text text-transparent">
            Backend
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
                        <ul className="pl-4!">
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
          <h1 className="gradient-text">Let's move to Databases!</h1>
          <button
            className="primary-button secondary-color"
            onClick={() => navigate("/learn/technologies/database")}
          >
            Go to Technologies of Database_
          </button>
        </div>
      </section>
      <div className="min-h-10" />
    </main>
  );
}
