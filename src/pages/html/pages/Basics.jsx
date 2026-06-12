import React from "react";
import Divider from "../../../components/Divider";
import Point from "../../../components/Point";
import CodeContainer from "../../../components/CodeContainer";

export default function HTMLBasicsPage() {
  const DATA = {
    hero: {
      title: "Basics of HTML",
      description:
        "Every complex web application and stunning user interface begins with a fundamental understanding of core layout patterns. Master the primary syntax rules, functional attributes, and document skeletons that power the modern browser interface. By establishing a robust command over these essential layout mechanics, developers can seamlessly architect highly scalable, accessible, and high-performance digital environments configured for the modern web ecosystem.",
    },
    tags: {
      heading: "Understanding HTML Tags",
      description: [
        "In web development, HTML Tags are the fundamental structural components used to interact with and instruct web browsers on how to arrange, format, and render content.",
        "They act as semantic commands that encapsulate raw data nodes.",
      ],
      points: {
        heading:
          "A standard tag consists of three primary parameters configuration:",
        subpoints: [
          {
            subject: (
              <span>
                Open Tag <span className="code">{"<"}</span>
              </span>
            ),
            label:
              "Signals the browser viewport where an element's structural properties begin.",
          },
          {
            subject: (
              <span>
                Tagname <span className="code">{"html"}</span>
                {" / "}
                <span className="code">{"head"}</span>
                {" / "}
                <span className="code">{"body"}</span>
              </span>
            ),
            label:
              "The internal text, asset reference, or child node being processed, in simple language a 'tagname'.",
          },
          {
            subject: (
              <span>
                Close Tag <span className="code">{">"}</span>
                {" or "}
                <span className="code">{"/>"}</span>
              </span>
            ),
            label:
              "Employs a forward slash identifier to terminate the execution boundary of that specific structural element.",
          },
        ],
      },
    },
    boilerplate: {
      heading: "The Boilerplate",
      descriptions: [
        "In computer programming and web development, a Boilerplate (or boilerplate code) refers to sections of code that must be included in many places with little or no alteration.",
        "It serves as a standardized, reusable foundation template that provides the minimum necessary configuration required for a program, framework, or web page to compile and execute accurately within its environment.",
      ],
    },
    basic_components: {
      heading: "Basic Components of HTML",
    },
  };
  return (
    <main>
      <div className="py-10!" />
      <section>
        <div className="wrapper items-start!">
          <ul>
            <li>
              <h1 className="gradient-text w-fit">{DATA.hero.title}</h1>
            </li>
            <li>
              <p className="text-gray-300 mb-0! text-justify">
                {DATA.hero.description}
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <ul>
            <li>
              <h2 className="gradient-text w-fit">{DATA.tags.heading}</h2>
            </li>
            <li>
              <ul>
                {DATA.tags.description.map((d, i) => (
                  <li key={i}>
                    <p className="text-gray-300 point-bullet-text">{d}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <p>{DATA.tags.points.heading}</p>
                </li>
                <li>
                  <ul className="ml-4!">
                    {DATA.tags.points.subpoints.map((sp, i) => (
                      <li key={i}>
                        <Point
                          key={i}
                          serialNo={i}
                          subject={sp.subject}
                          label={sp.label}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <CodeContainer
                Code={`1.<html></html>
2.<head></head>
3.<body></body>`}
                header
                type={"html"}
                label={"HTML Tags Examples"}
                defaultlyOpen
                showCollapse
                isCodeGenerating
              />
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <ul>
            <li>
              <h2 className="bg-linear-to-r from-white to-secondary-500 bg-clip-text text-transparent w-fit">
                {DATA.boilerplate.heading}
              </h2>
            </li>
            <li>
              <ul>
                {DATA.boilerplate.descriptions.map((d, index) => (
                  <li key={index}>
                    <p className="text-gray-300 point-bullet-text text-justify">
                      {d}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <CodeContainer
                Code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Codeflix | Stop Watching, Start compiling!</title>
    <style>
      .body {
        display: flex;
      }
      #root {
        overflow: hidden;
      }
      @keyframes {
        from {
          opacity: 0%;
        }
        to {
          opacity: 100%;
        }
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`}
                header
                type={"html"}
                label={"HTML Tags Examples"}
                defaultlyOpen
                showCollapse
                showCopy
                isCodeGenerating
                speed={50}
              />
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper"></div>
      </section>
    </main>
  );
}
