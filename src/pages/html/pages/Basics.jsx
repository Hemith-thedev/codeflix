import React from "react";
import Divider from "../../../components/Divider";
import Point from "../../../components/Point";
import CodeContainer from "../../../components/CodeContainer";
import CodeOutput from "../../../components/CodeOutput";

export default function HTMLBasicsPage() {
  const data = {
    heading: "",
    descriptions: ["", ""],
  };
  return (
    <main>
      <div className="py-10!" />
      <section>
        <div className="wrapper items-start!">
          <h1 className="gradient-text">Basics of HTML</h1>
          <p className="text-gray-300">
            HTML (HyperText Markup Language) is the standard markup language
            used to create the structure of web pages. It acts as the backbone
            of any website, defining elements like headings, paragraphs, images,
            and links.
          </p>
          <CodeContainer
            Code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSAP Interactive Draggable Boxes</title>
    <link rel="stylesheet" href="./src/styles/style.css">
</head>
<body>

    <h1>GSAP Draggable Interactive Sandbox 🎛️</h1>

    <!-- Boundary element -->
    <div class="sandbox-container">
        <div class="box box-1">Box A</div>
        <div class="box box-2">Box B</div>
        <div class="box box-3">Box C</div>
    </div>

    <!-- 1. GSAP Core Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <!-- 2. GSAP Draggable Plugin -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Draggable.min.js"></script>

    <script>
        // Register the Draggable plugin with core GSAP
        gsap.registerPlugin(Draggable);

        // Apply drag functionality with options
        Draggable.create(".box", {
            bounds: ".sandbox-container", // Prevents boxes from leaving the container box boundary
            inertia: false,               // Set true if you load GSAP InertiaPlugin
            edgeResistance: 0.65,         // Adds structural resistance when hits boundaries
            onDragStart: function() {
                // Subtle scale up animation when grabbed
                gsap.to(this.target, { scale: 1.05, duration: 0.2 });
            },
            onDragEnd: function() {
                // Return to normal size when released
                gsap.to(this.target, { scale: 1, duration: 0.2 });
            }
        });
    </script>
</body>
</html>`}
            type="html"
            label="HTML - GSAP Draggable Plugin (Sample)"
            header
            canCopy={false}
            isCodeGenerating
            showCopy={false}
            showCollapse={false}
          />
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper items-start!">
          <h2 className="bg-linear-to-r from-white to-secondary-500 bg-clip-text text-transparent">
            The Boilerplate
          </h2>
          <p className="text-gray-300">
            In computer programming and web development, a Boilerplate (or
            boilerplate code) refers to sections of code that must be included
            in many places with little or no alteration.
          </p>
          <p className="text-gray-300">
            It serves as a standardized, reusable foundation template that
            provides the minimum necessary configuration required for a program,
            framework, or web page to compile and execute accurately within its
            environment.
          </p>
          <h3>The four main elements are...</h3>
          <ul>
            <li>
              <p className="text-gray-300 point-bullet-text">
                <span>
                  <span className="code">&lt;!DOCTYPE html&gt;</span> - Declares
                  the <span className="underline">document type</span> and
                  ensures the browser renders the page correctly using the{" "}
                  <span className="underline">HTML5 standard</span>.
                </span>
              </p>
            </li>
            <li>
              <p className="text-gray-300 point-bullet-text">
                <span>
                  <span className="code">&lt;html&gt;</span> - The{" "}
                  <span className="underline">root element</span> that encloses
                  all the content on the page.
                </span>
              </p>
            </li>
            <li>
              <p className="text-gray-300 point-bullet-text">
                <span>
                  <span className="code">&lt;head&gt;</span> - Contains{" "}
                  <span className="underline">meta-information</span> about the
                  document, such as the page title, character encoding, and
                  links to external stylesheets. This data is{" "}
                  <span className="underline">not visible</span> on the actual
                  web page.
                </span>
              </p>
            </li>
            <li>
              <p className="text-gray-300 point-bullet-text">
                <span>
                  <span className="code">&lt;body&gt;</span> - Contains the{" "}
                  <span className="underline">visible content</span> of the web
                  page, including text, images, and hyperlinks.
                </span>
              </p>
            </li>
          </ul>
          <CodeContainer
            Code={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>Hello Buddies!</h1>
  </body>
</html>`}
            type="html"
            label="HTML Boilerplate"
            header
            showCollapse={false}
          />
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <h2 className="bg-linear-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Essential HTML Elements
          </h2>
          <h3>1. Tags</h3>
          <p className="text-gray-300">HTML uses tags in three parts:</p>
          <ul>
            <li>
              <p className="text-gray-300 point-bullet-text">
                <span>
                  <span className="code">{"<"}</span> - open square braces to{" "}
                  <span className="underline">open</span> the tag
                </span>
              </p>
            </li>
            <li>
              <p className="text-gray-300 point-bullet-text">
                <span>
                  <span className="code">{"tagname"}</span> - 'tagname' to{" "}
                  <span className="underline">specify name</span> of the tag
                </span>
              </p>
            </li>
            <li>
              <p className="text-gray-300 point-bullet-text">
                <span>
                  <span className="code">
                    {">"} or {"/>"}
                  </span>{" "}
                  - closed square braces to{" "}
                  <span className="underline">close</span> the tag
                </span>
              </p>
            </li>
          </ul>
          <CodeContainer
            Code={`<tagname></tagname>
or
<tagname />`}
type="html"
          />
        </div>
      </section>
    </main>
  );
}
