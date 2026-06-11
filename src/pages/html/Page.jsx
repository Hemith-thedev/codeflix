import React from "react";
import Divider from "../../components/Divider";
import { useNavigate } from "react-router-dom";

export default function HTMLPage() {
  const navigate = useNavigate();
  const DATA = {
    hero: {
      title: "HTML",
      description:
        "In the contemporary digital epoch, every immersive user experience, sophisticated web application, and interconnected network relies on a singular, foundational bedrock: HyperText Markup Language (HTML). Originally conceived as a utilitarian solution for academic documentation sharing, HTML has transcended its humble origins to become the universal syntax of the global internet, power-driven by continuous structural innovations.",
    },
    definition: {
      heading: "What is Hyper Text Markup Language?",
      descriptions: [
        "HyperText Markup Language (HTML) is the standard, globally recognized markup language utilized for the structural design and presentation of documents on the World Wide Web",
        "Rather than functioning as a traditional programming language with procedural logic, HTML operates as a structural syntax.",
        "It employs a predefined system of tags and attributes to annotate text, images, multimedia, and hyperlinks, instructing web browsers on how to structurally render and parse content for end-users.",
        "It serves as the skeleton of web architecture, upon which styling (CSS) and interactivity (JavaScript) are systematically layered.",
      ],
    },
    features: {
      heading: "Features",
      features: [
        "Operates seamlessly across platforms.",
        "Enhances search engine indexing.",
        "Interconnects global digital documents.",
        "Supports comprehensive screen readers.",
        "Embeds audio-visual media directly.",
      ],
    },
    proscons: {
      heading: "Pros & Cons",
      differences: [
        ["PROS - Advantages", "CONS - Limitations"],
        [
          "Natively supported by all modern browsers.",
          "Lacks dynamic logic or computing.",
        ],
        [
          "Semantic tags maximize organic visibility.",
          "Risky if code is poorly configured.",
        ],
        [
          "Ensures exceptionally fast parsing speeds.",
          "Minor rendering variations across engines.",
        ],
        [
          "Straightforward syntax accelerates rapid deployment.",
          "Relies entirely on external CSS.",
        ],
      ],
    },
    timeline: {
      heading: "Evolution of HTML",
      timelines: [
        {
          year: "1991",
          subject: `The Genesis (Tim Berners-Lee's "HTML Tags")`,
          what_happened: `Sir Tim Berners-Lee, a scientist at CERN, officially introduces the first public document titled "HTML Tags".`,
          impact:
            "It featured a basic set of 18 rudimentary tags designed primarily for sharing text-based scientific research papers across basic network terminals.",
        },
        {
          year: "1995",
          subject: `HTML 2.0 (The First Standard)`,
          what_happened: `The Internet Engineering Task Force (IETF) publishes the RFC 1866 specification, formalizing HTML 2.0.`,
          impact:
            "This marked the definitive emergence of the first official global web standard, introducing capabilities for interactive form structures and basic inline image rendering.",
        },
        {
          year: "1997",
          subject: `HTML 3.2 & HTML 4.0 (The Browser Wars Era)`,
          what_happened: `The newly formed World Wide Web Consortium (W3C) assumes control, standardizing HTML 3.2 (Wilbur) and rapidly progressing to HTML 4.0.`,
          impact:
            "These iterations introduced advanced support for complex tables, text alignment configurations, script insertions, and the initial integration of cascading style sheets (CSS) to decouple presentation from structure.",
        },
        {
          year: "2014",
          subject: `HTML5 (The Paradigm Shift)`,
          what_happened: `W3C and the Web Hypertext Application Technology Working Group (WHATWG) officially finalize the HTML5 specification.`,
          impact:
            "This revolutionary release completely deprecated proprietary plugins like Adobe Flash by incorporating native audio/video streaming elements, responsive semantic tags, local storage capabilities, and rich HTML5 Canvas graphics support.",
        },
        {
          year: "2026 & beyond",
          subject: `The HTML Living Standard`,
          what_happened: `Continuous evolution governed exclusively by the WHATWG as a continuous "Living Standard".`,
          impact:
            "HTML no longer receives monolithic version upgrades (like HTML6); instead, it functions as a dynamically updated, robust ecosystem evolving in real-time to support cutting-edge web platform capabilities, optimized UI animations, and immersive browser experiences.",
        },
      ],
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
              <h2 className="bg-linear-to-r from-white to-secondary-500 bg-clip-text text-transparent w-fit">
                {DATA.definition.heading}
              </h2>
            </li>
            <li>
              <ul>
                {DATA.definition.descriptions.map((d, index) => (
                  <li key={index}>
                    <p className="text-gray-300 point-bullet-text text-justify">
                      {d}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper items-start!">
          <ul>
            <li>
              <h2 className="bg-linear-to-r from-primary-500 to-white bg-clip-text text-transparent w-fit">
                {DATA.features.heading}
              </h2>
            </li>
            <li>
              <ul>
                {DATA.features.features.map((d, index) => (
                  <li key={index}>
                    <p className="text-gray-300 point-bullet-text text-justify">
                      {d}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <ul className="flex flex-col justify-start items-center h-fit w-full">
            <li>
              <h2 className="bg-linear-to-r from-primary-500 via-secondary-500 to-white bg-clip-text text-transparent">
                {DATA.proscons.heading}
              </h2>
            </li>
            <li className="flex justify-start items-start gap-20 h-fit w-full">
              <ul className="flex flex-col h-fit w-full">
                {DATA.proscons.differences.map((differeence, index) => (
                  <li
                    key={index}
                    className={`flex justify-start items-start gap-4 ${index === 0 ? "bg-white/5 rounded-2xl" : ""}`}
                  >
                    {differeence.map((d, i) => (
                      <p
                        key={i}
                        className={`max-w-1/2 h-full w-full mb-0! p-4! ${index === 0 ? "rounded-2xl" : "point-bullet-text"}`}
                      >
                        {d}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <ul>
            <li>
              <h2 className="bg-linear-to-r from-white via-primary-500 to-secondary-500 bg-clip-text text-transparent">
                {DATA.timeline.heading}
              </h2>
            </li>
            <li>
              <ul className="flex flex-col justify-start items-start gap-4 pl-8!">
                {DATA.timeline.timelines.map((t, i) => (
                  <li key={i}>
                    <div className={`p-8! bg-white/5 rounded-2xl timeline-card ${i === 0 ? "first" :""} border border-white/10 hover:border-white/50`}>
                      <p>
                        <span className="p-2! bg-linear-to-r from-primary-500 to-secondary-500 rounded-md">{t.year}</span>{" - "}
                        {t.subject}
                      </p>
                      <p>
                        What Happened:{" "}
                        <span className="text-gray-300">{t.what_happened}</span>
                      </p>
                      <p className="mb-0!">
                        Impact:{" "}
                        <span className="text-gray-300">{t.impact}</span>
                      </p>{" "}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-secondary-500 to-white bg-clip-text text-transparent">Continue with its Basics</h1>
          <button
            className="primary-button secondary-color"
            onClick={() => navigate("/html/basics")}
          >
            Go to HTML Basics_
          </button>
        </div>
      </section>
      <div className="min-h-10" />
    </main>
  );
}
