import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import Point from "../../../components/Point";
import Divider from "../../../components/Divider";

export default function TechnologiesDatabasePage() {
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
          <span className="gradient-text">MongoDB</span>
        </span>
      ),
      paragraph:
        "MongoDB is a source-available, document-oriented database classified as a NoSQL database system, designed for scalability and flexible data storage.",
      points: {
        heading: "Key points",
        subpoints: [
          {
            subject: "History",
            sub_subpoints: [
              "Development started in 2007 by 10gen (now MongoDB Inc.).",
              "First released publicly as an open-source project in 2009.",
              "Derived its name from the word 'humongous' to represent data scale capabilities.",
            ],
          },
          {
            subject: "Features",
            sub_subpoints: [
              "Document-based storage using dynamic BSON (Binary JSON) formatting",
              "Schema-less architecture allowing fields to vary between documents",
              "High scalability via automated sharding and horizontal clustering",
              "Powerful aggregation pipelines for multi-stage data processing",
              "Native replication setup through Replica Sets for high availability",
            ],
          },
        ],
      },
    },
    {
      title: (
        <span>
          <span className="gradient-text">PostgreSQL</span>
        </span>
      ),
      paragraph:
        "PostgreSQL is a powerful, open-source object-relational database system (RDBMS) emphasizing extensibility and SQL standard compliance.",
      points: {
        heading: "Key points",
        subpoints: [
          {
            subject: "History",
            sub_subpoints: [
              "Originated as the POSTGRES project at UC Berkeley led by 'Michael Stonebraker' in 1986.",
              "Released publicly as open-source in 1996 with native SQL support added.",
              "Maintained continuously by the PostgreSQL Global Development Group.",
            ],
          },
          {
            subject: "Features",
            sub_subpoints: [
              "Strict ACID compliance guarantees for transactional safety",
              "Robust support for complex relational querying and joins",
              "Hybrid data handling via native JSON/JSONB document data types",
              "High extensibility supporting custom functions, data types, and index types",
              "Advanced concurrency control through Multi-Version Concurrency Control (MVCC)",
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
              <span className="gradient-text">Technologies of Database</span>
            </h3>
            <p className="text-center text-gray-500">MongoDB | PostgreSQL</p>
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
            Database
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
          <h1 className="gradient-text">Tools are also important!</h1>
          <button
            className="primary-button primary-color"
            onClick={() => navigate("/learn/tools")}
          >
            Go to Tools_
          </button>
        </div>
      </section>
      <div className="min-h-10" />
    </main>
  );
}
