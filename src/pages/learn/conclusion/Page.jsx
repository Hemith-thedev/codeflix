import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Point from "../../../components/Point";
import Divider from "../../../components/Divider";
import useRevealAnimation from "../../../hooks/RevealAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function ConclusionPage() {
  const navigate = useNavigate();
  const mainRef = useRef(null);
  useRevealAnimation();
  const sectionData = [
    {
      title: (
        <span>
          <span className="gradient-text">Full Stack Development</span>
        </span>
      ),
      paragraph:
        "Full Stack Development is the end-to-end process of designing, building, testing, and deploying a complete software application, combining both user-facing interfaces and server-side data architectures.",
      points: {
        heading: "Core Pillars of Full Stack",
        subpoints: [
          {
            subject: "Frontend - The User Interface",
            sub_subpoints: [
              "Manages everything that users see, touch, and interact with directly inside the browser.",
              "Built using core layout technologies like HTML5, procedural styling with CSS3, and interactive frameworks like React.",
              "Focuses on responsive design patterns, smooth component animations, and optimal user experiences.",
            ],
          },
          {
            subject: "Backend - The Server Logic",
            sub_subpoints: [
              "Handles the behind-the-scenes operations, application logic, and data processing rules.",
              "Powered by robust environments like Node.js, Python ecosystems, or traditional Java architectures.",
              "Manages secure API endpoints, user authentication modules, and background server computations.",
            ],
          },
          {
            subject: "Database & Storage",
            sub_subpoints: [
              "Responsible for organizing, storing, and retrieving permanent application data securely.",
              "Includes Relational Databases (SQL) like PostgreSQL for structured tables and tabular formats.",
              "Includes Non-Relational Databases (NoSQL) like MongoDB for flexible, document-based JSON schemas.",
            ],
          },
        ],
      },
    },
  ];
  return (
    <main ref={mainRef}>
      <section className="hero-section relative rounded-2xl overflow-hidden">
        <div className="glow absolute bottom-0 left-0 translate-y-1/2 scale-300 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-0 translate-y-1/2 scale-300 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 left-0 translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-0 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 left-0 translate-y-1/2 scale-100 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-0 translate-y-1/2 scale-100 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="wrapper relative">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h3 className="text-center">
              <span className="gradient-text">Dev-Ops</span>
            </h3>
            <p className="text-center text-gray-500">
              Cloud Platform | CI/CD Pipelines | Containerization
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-white to-primary-500 bg-clip-text text-transparent">
            We can conclude that...
          </h1>
          {sectionData.map((data, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col justify-start items-start h-fit w-full">
                <h3>{data.title}</h3>
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
