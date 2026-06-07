import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LearnPage() {
  const page = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ".glow",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "back.out(1.7)",
        duration: 2,
        stagger: 0.5,
        delay: 0.5,
      },
    );
  });
  const Divider = () => (
    <section className="py-20!">
      <hr className="text-gray-500 h-0.5 w-full" />
    </section>
  );
  return (
    <main ref={page}>
      <section className="hero-section relative">
        <div className="glow absolute top-0 left-55 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-0 left-55 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-0 left-55 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="wrapper relative">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h3 className="text-center">
              Ready to <span className="gradient-text">Compile?</span>
            </h3>
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
                The ultimate interactive ecosystem curated exclusively for
                future Full-Stack Developers. Forget endless streaming video
                loops that drain your productivity and create false syntax
                confidence. Here, learning is direct, reactive, and completely
                localized. Dive straight into full source code containers,
                manipulate components dynamically, and track your core
                programming mastery without handling any standard cloud database
                setup or complex registration constraints.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section className="bg-black">
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-white to-primary-500 bg-clip-text text-transparent">
            3 Layers for Full Stack App
          </h1>
          {[
            {
              title: (
                <span>
                  <span className="gradient-text">Foundation</span> Module
                </span>
              ),
              paragraph:
                "Master structural layouts and document object nodes before introducing scripts. This segment drops juniors straight into the skeletal build of modern web apps. Instead of watching someone write templates, users interact directly with semantic structures, attribute declarations, accessibility standard modules, and core browser parsing workflows.",
              caption: "HTML5 & Web Architecture",
            },
            {
              title: (
                <span>
                  <span className="gradient-text">Logic Layer</span> Module
                </span>
              ),
              paragraph:
                "Transition from static arrangements to dynamic, executable workflows. Dive deep into core variables, closure mechanisms, asynchronous event loops, promise architectures, functional manipulation arrays, data structuring, and DOM structural mutation patterns. Juniors learn logic by testing edge cases instantly in live container spaces.",
              caption: "Modern JavaScript (ES6+)",
            },
            {
              title: (
                <span>
                  <span className="gradient-text">Frontend Core</span> Module
                </span>
              ),
              paragraph:
                "Deconstruct the modern declarative paradigm. Understand reusable component design, state hook lifecycles, effect synchronizations, context state distributions, absolute prop flows, custom hooks optimization, and absolute component performance. This track builds true muscle memory for component architecture.",
              caption: "React.JS Framework",
            },
          ].map((milestone, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col justify-start items-start h-fit w-full">
                <h3>
                  {index + 1}. {milestone.title}
                </h3>
                <p className="text-gray-500">{milestone.paragraph}</p>
              </div>
              <hr className="text-blue-500" />
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
