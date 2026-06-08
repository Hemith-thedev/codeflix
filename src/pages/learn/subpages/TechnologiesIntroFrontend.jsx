import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

export default function TechnologiesIntroFrontendPage() {
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
  const Divider = () => (
    <section className="py-20!">
      <hr className="text-gray-300 h-0.5 w-full" />
    </section>
  );
  const Point = ({ serialNo, subject, label }) => {
    // 1. Single values coding formatting (e.g., HTML, CSS, Server-side Languages -> a.)
    if (!Array.isArray(label)) {
      return (
        <p>
          {String.fromCharCode(97 + serialNo)}.{" "}
          <span className="font-semibold">{subject}</span>:{" "}
          <span className="text-gray-300">{label}</span>
        </p>
      );
    }

    // 2. Deep Nested Lists (e.g., Responsibilities with sub-arrays -> b. sequence pattern)
    return (
      <div className="w-full space-y-2">
        {/* Dynamic Serial marker mapping directly matches 'b.' exactly like your sketch */}
        <p>
          {String.fromCharCode(97 + serialNo)}.{" "}
          <span className="font-semibold">{subject}:</span>
        </p>

        {/* Inner points switch structure smoothly to standard bullet listings */}
        <ul className="ml-6! list-disc space-y-2 text-gray-300">
          {label.map((subItem, subIndex) => (
            <li key={subIndex}>
              <p>{subItem}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const sectionData = [
    {
      title: (
        <span>
          <span className="gradient-text">React.JS</span>
        </span>
      ),
      paragraph:
        "React is an open-source Javascript library used for building User Interfaces (UIs) specifically for Single Page Applications (SPAs).",
      points: {
        heading: "Key points",
        subpoints: [
          {
            subject: "History",
            sub_subpoints: [
              "Developed by Facebook, in 2011.",
              "Deployed later on Instagram in 2012.",
              "publically as open-source library in May 23, 2019",
            ],
          },
          {
            subject: "Features",
            sub_subpoints: [
              "Virtual DOM",
              "Component Based Architecture / Programming",
              "Declarative Ui",
              "Component's State updates",
              "JSX (JavScript XML) - HTML structures directly into your JavaScript files (.jsx)",
              "One-Way Data Binding",
              "React Hooks",
            ],
          },
        ],
      },
    },
    {
      title: (
        <span>
          <span className="gradient-text">AngularJS</span>
        </span>
      ),
      paragraph:
        "AngularJS is an open-source, structural JavaScript framework used for building dynamic single-page web applications by extending standard HTML vocabulary.",
      points: {
        heading: "Key points",
        subpoints: [
          {
            subject: "History",
            sub_subpoints: [
              "Developed by 'Miško Hevery' at Brat Tech LLC in 2009.",
              "Maintained and officially released by Google in 2010.",
              "Succeeded by the completely rewritten 'Angular' (v2+) platform in 2016.",
            ],
          },
          {
            subject: "Features",
            sub_subpoints: [
              "Two-Way Data Binding",
              "Model-View-Controller (MVC) Architecture",
              "HTML Templates & Directives (e.g., ng-model, ng-repeat)",
              "Dependency Injection (DI)",
              "Built-in Form Validation",
              "Plain Old JavaScript Objects (POJO) Data Models",
            ],
          },
        ],
      },
    },
    {
      title: (
        <span>
          <span className="gradient-text">Vue.JS</span>
        </span>
      ),
      paragraph:
        "Vue.js is an open-source, progressive JavaScript framework designed to be incrementally adoptable for building modern and interactive user interfaces.",
      points: {
        heading: "Key points",
        subpoints: [
          {
            subject: "History",
            sub_subpoints: [
              "Created by 'Evan You' while working as a developer at Google.",
              "Officially released to the public in February 2014.",
              "Funded entirely by community crowdfunding and sponsorships.",
            ],
          },
          {
            subject: "Features",
            sub_subpoints: [
              "Virtual DOM (similar to React's performance model)",
              "Component-Based Architecture",
              "Reactive Data Binding (Automated system track updates)",
              "Single-File Components (.vue files combining HTML/JS/CSS)",
              "Directives & HTML-based Template Syntax",
              "Composition API & Options API Styles",
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
        <div className="glow absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="wrapper relative">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h3 className="text-center">
              <span className="gradient-text">Technologies?</span>
            </h3>
            <p className="text-center">
              Let's understand the concept bit-by-bit!
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
      <section className="bg-black">
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-white to-primary-500 bg-clip-text text-transparent">
            Frontend
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
          <h1 className="gradient-text">Wanna go deeper?</h1>
          <button
            className="primary-button primary-color"
            onClick={() => navigate("/learn/technologies/backend")}
          >
            Go to Technologies of Backend_
          </button>
        </div>
      </section>
      <div className="min-h-10" />
    </main>
  );
}
