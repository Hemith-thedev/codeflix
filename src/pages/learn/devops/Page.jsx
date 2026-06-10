import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Point from "../../../components/Point";
import Divider from "../../../components/Divider";

gsap.registerPlugin(ScrollTrigger);

export default function DevOpsPage() {
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
          stagger: 0.1,
        },
      );
    },
    { scope: mainRef },
  );
  const sectionData = [
    {
      title: (
        <span>
          <span className="gradient-text">Cloud Platform</span>
        </span>
      ),
      paragraph:
        "Cloud platforms provide on-demand computing services, database storage, and networking over the internet, eliminating the need for physical infrastructure setup.",
      points: {
        heading: "Platforms on Cloud",
        subpoints: [
          {
            subject: "AWS - Amazon Web Services",
            sub_subpoints: [
              "The most widely adopted comprehensive cloud network globally.",
              "Offers powerful scaling infrastructure with core services like EC2, S3, and IAM security controls.",
              "Highly flexible pricing model based on exact resource consumption.",
            ],
          },
          {
            subject: "Microsoft Azure",
            sub_subpoints: [
              "Deeply integrated with enterprise frameworks and Microsoft architecture ecosystems.",
              "Excellent hybrid cloud solutions for seamless on-premise data connections.",
              "Provides robust active directory authentication modules.",
            ],
          },
          {
            subject: "Google Cloud",
            sub_subpoints: [
              "Renowned for high-performance data analytics, machine learning tools, and big data queries.",
              "Offers premium container execution natively designed by Google engineers.",
              "Cost-efficient environment with specialized live VM migration capabilities.",
            ],
          },
        ],
      },
    },
    {
      title: (
        <span>
          <span className="gradient-text">CI/CD Pipelines</span>
        </span>
      ),
      paragraph:
        "CI/CD pipelines automate the continuous integration of newly written code changes and manage their smooth delivery or deployment into production networks.",
      points: {
        heading: "Two Parts",
        subpoints: [
          {
            subject: "CI - Continuous Integration",
            sub_subpoints: [
              "Automates building code projects instantly whenever developers commit changes.",
              "Runs automated script tests synchronously to catch errors early.",
              "Ensures multiple team repositories merge securely without build broken warnings.",
            ],
          },
          {
            subject: "CD - Continuous Delivery / Deployment",
            sub_subpoints: [
              "Automatically prepares stable artifact builds ready for system releases.",
              "Deploys verified passing modules automatically into live client-facing servers.",
              "Reduces manual infrastructure workload and speeds up upgrade deployment timing.",
            ],
          },
        ],
      },
    },
    {
      title: (
        <span>
          <span className="gradient-text">Containerization</span>
        </span>
      ),
      paragraph:
        "Containerization packages source application code together with all its necessary libraries, configuration setup, and engine dependencies to run identically anywhere.",
      points: {
        heading: "Two Tools of Containerization",
        subpoints: [
          {
            subject: "Docker",
            sub_subpoints: [
              "Creates lightweight blueprint images of code environments to run cleanly anywhere.",
              "Isolates configurations so there are zero conflicts between software versions.",
              "Starts processes in sub-seconds compared to traditional heavy virtual machines.",
            ],
          },
          {
            subject: "Kubernetes",
            sub_subpoints: [
              "An enterprise open-source system designed for orchestrating massive Docker containers.",
              "Automates cluster scaling up or down depending on real user traffic variations.",
              "Features automated self-healing updates that automatically restart failed software nodes.",
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
        <div className="glow absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-1/2 right-0 translate-x-1/2 translate-y-1/2 scale-200 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
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
      <section className="z-10">
        {/* <div className="wrapper bg-linear-to-br from-primary-950 to-secondary-950 p-6! rounded-3xl"> */}
        <div className="wrapper rounded-3xl">
          <h1 className="bg-linear-to-r from-secondary-500 to-white bg-clip-text text-transparent">
            Definition
          </h1>
          <ul>
            <li>
              <p className="text-center bg-linear-to-r from-gray-500 to-white bg-clip-text text-transparent">
                DevOps is a modern software engineering culture that bridges the
                gap between development and operations teams to automate the
                entire software lifecycle. It focuses on continuous integration,
                automated testing, and rapid deployment to deliver high-quality
                software updates frequently and reliably. By using cloud
                infrastructure and specialized tools, DevOps minimizes manual
                errors and ensures maximum system uptime.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-white to-primary-500 bg-clip-text text-transparent">
            Managed using
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
          <h1 className="gradient-text">Let's conclude FSD!</h1>
          <button
            className="primary-button primary-color"
            onClick={() => navigate("/learn/conclusion")}
          >
            Conclude FSD_
          </button>
        </div>
      </section>
      <div className="min-h-10" />
    </main>
  );
}
