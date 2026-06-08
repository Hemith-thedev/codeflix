import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

export default function LearnPage() {
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
  const toRoman = (num) => {
    const romans = ["i", "ii", "iii", "iv", "v", "vi", "vii"];
    return romans[num] || num + 1;
  };
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
          <span className="gradient-text">Front-end</span>
        </span>
      ),
      paragraph:
        "Frontend is what we see and interact in the application, i.e. the elements we look, the buttons we click and inputs we type is completely defined in the front-end.",
      points: {
        heading: "Basics of Frontend",
        subpoints: [
          {
            subject: "HTML",
            label: "Hyper Text Markup Language",
          },
          {
            subject: "CSS",
            label: "Cascading Style Sheets",
          },
          {
            subject: "JS",
            label: "JavaScript",
          },
          {
            subject: "TS",
            label: "TypeScript",
          },
        ],
      },
      example:
        "A Login form structured with HTML, styled with CSS and validated with JavaScript or Typescript.",
    },
    {
      title: (
        <span>
          <span className="gradient-text">Back-end</span>
        </span>
      ),
      paragraph:
        "Backend is what we cannot be able to see that the inner functions of application, API calls, Route managements, database connectivity and many more.",
      points: {
        heading: "Basics of Backend",
        subpoints: [
          {
            subject: "Server-side Languages",
            label: "Node.JS, Python, Java, PHP",
          },
          {
            subject: "Responsibilities",
            sub_subpoints: [
              "Handling requests and reponses.",
              "Authentication",
              "Processing logics",
              "Data validations",
              "API Calls",
              "Password Encryption / Hashing",
              "Database management",
              "CRUD Operations",
              "Listening to the server",
            ],
          },
        ],
      },
      example:
        "When a user submits a login form, the back-end verifies credentials against the database.",
    },
    {
      title: (
        <span>
          <span className="gradient-text">Database</span>
        </span>
      ),
      paragraph:
        "Database is the place where all the data is stored securely. As more data is pushed, more storage is utilized. It can be hosted on the cloud or stored locally on the device.",
      points: {
        heading: "Types and Basics of Database Management",
        subpoints: [
          {
            subject: "Relational Databases",
            sub_subpoints: [
              "These type of databases will be organised the data in rows and columns.",
              "Each cell or data is called as 'record'.",
              "These databases use 'SQL' - Structured Query Language, this language is used to communicate with database through Backend or directly in console.",
              "Like MySQL, PostgreSQL",
            ],
          },
          {
            subject: "Non-Relational Databases",
            sub_subpoints: [
              "These type of databases will be organised the data in Arrays and Objects.",
              "Each table is called 'collection' and each data is called as 'document'.",
              "These databases use pre-defined functions to communicate with database through Backend or directly in terminal.",
              "Like MongoDB, Cassandra",
            ],
          },
          {
            subject: "Core Responsibilities",
            sub_subpoints: [
              "Storing and organizing application data efficiently.",
              "Performing fast CRUD operations (Create, Read, Update, Delete).",
              "Ensuring data security, privacy, and integrity.",
              "Handling user access, indexing, and automated data backups.",
            ],
          },
        ],
      },
      example:
        "Storing user registration details like hashed passwords and email IDs in a secure MongoDB cluster or MySQL table.",
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
              Ready to <span className="gradient-text">Compile?</span>
            </h3>
            <p className="text-center">
              <span className="text-primary-500">Size</span> doesn't matter, but{" "}
              <span className="text-secondary-500">content</span> matters the
              most!
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="z-10">
        {/* <div className="wrapper bg-linear-to-br from-primary-950 to-secondary-950 p-6! rounded-3xl"> */}
        <div className="wrapper rounded-3xl">
          <h1 className="bg-linear-to-r from-secondary-500 to-white bg-clip-text text-transparent">
            Basics of FSD
          </h1>
          <ul>
            <li>
              <p className="text-center bg-linear-to-r from-gray-500 to-white bg-clip-text text-transparent">
                Full Stack Development is an art of building complete web
                applications — from the{" "}
                <span className="text-primary-500">user interface</span> to the{" "}
                <span className="text-secondary-500">server-side logic</span>{" "}
                and <span className="gradient-text">database management</span>.
                A full stack developer bridges the gap between design and
                functionality, ensuring seamless interaction between{" "}
                <span className="text-primary-500">front-end</span> and{" "}
                <span className="text-secondary-500">back-end</span> systems.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section className="bg-black">
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-white to-primary-500 bg-clip-text text-transparent">
            Fundamentals
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
                      <li>
                        <p>
                          <span className="uppercase">Example</span>:{" "}
                          <span className="text-gray-300">{data.example}</span>
                        </p>
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
          <h1 className="gradient-text">Ready to dive more?</h1>
          <button
            className="primary-button secondary-color"
            onClick={() => navigate("/learn/technologies")}
          >
            Go to Technologies_
          </button>
        </div>
      </section>
      <div className="min-h-10" />
    </main>
  );
}
