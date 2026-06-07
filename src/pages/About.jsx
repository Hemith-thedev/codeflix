import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutPage() {
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
      <section className="hero-section relative overflow-hidden rounded-2xl">
        <div className="glow absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 scale-300 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 scale-100 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 scale-100 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="wrapper relative">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h3 className="text-center">
              The <span className="text-primary-500">Evolution</span> of
              Learning & Our Core{" "}
              <span className="text-purple-500">Architecture</span>
            </h3>
          </div>
        </div>
      </section>
      {/* <Divider /> */}
      <section className="mt-20!">
        {/* <div className="wrapper bg-linear-to-br from-primary-950 to-secondary-950 p-6! rounded-3xl"> */}
        <div className="wrapper text-justify text-transparent bg-linear-to-br from-white to-gray-500 bg-clip-text">
          <ul>
            <li>
              <p>
                Traditional video tutorials build a dangerous cognitive illusion
                known across the engineering industry as{" "}
                <spam className="text-primary-500">"Tutorial Hell"</spam>.
                Students spend hundreds of hours watching a cursor move smoothly
                across an instructor's high-resolution screen, mistaking simple
                visual observation for operational{" "}
                <span className="text-secondary-500">skill acquisition</span>.
                When the media stream concludes and the interface returns to an
                empty text document, the syntax logic vanishes completely.
              </p>
            </li>
            <li>
              <p>
                <span className="gradient-text">Codeflix</span> was established
                specifically to dismantle this passive learning paradigm. By
                creating a system centered entirely on interactive{" "}
                <spam className="text-primary-500">code containers</spam> rather
                than standard media stream runtimes, we push junior engineers
                directly into active reading and{" "}
                <span className="text-secondary-500">
                  immediate syntax manipulation
                </span>
                . You do not watch a component update on a timeline; but active
                layout properties immediately inside the browser workspace.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-white to-primary-500 bg-clip-text text-transparent">
            Features
          </h1>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 h-fit w-full">
            <div class="flex flex-col justify-between min-h-40 border-2 rounded-xl border-white/20 p-4! col-span-2">
              <p>Video-Free Code Containers</p>
              <p className="text-right text-gray-500 mb-0!">
                Skip endless video tutorials. Codeflix replaces video streams
                with interactive code components, forcing you to learn by active
                reading and immediate manipulation.
              </p>
            </div>
            <div class="flex flex-col justify-between min-h-40 rounded-xl bg-secondary-500 text-secondary-950 p-4!">
              <p>Zero Authentication Friction</p>
              <p className="mb-0! text-secondary-100 text-right">No Login, No Registration</p>
            </div>
            <div class="flex flex-col justify-between min-h-40 rounded-xl bg-primary-950 text-primary-500 p-4!">
              <p>Total Localized Privacy</p>
              <p className="mb-0! text-primary-100 text-right">LocalStorage Implementation</p>
            </div>
            <div class="flex flex-col justify-between min-h-40 border-2 rounded-xl border-white/20 p-4! col-span-2 row-span-2">
              <p>The Full-Stack Roadmap</p>
              <p className="text-right text-gray-500 mb-0!">
                A targeted, structured pathway engineered to bridge the gap from
                layout basics to complex React compound structures, building
                absolute muscle memory.
              </p>
            </div>
            <div class="flex flex-col justify-between min-h-40 rounded-xl bg-linear-to-br from-primary-700 to-secondary-700 p-4!">
              <p><span>Smooth Motion</span> <span className="font-extralight!">Architecture</span></p>
              <p className="mb-0! text-right">Animations & Transitions</p>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="bg-black">
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-secondary-500 to-white bg-clip-text text-transparent">
            Zero Authentication
          </h1>
          <ul className="text-transparent bg-linear-to-br from-white to-primary-500 bg-clip-text">
            <li>
              <h3 className="text-justify font-extralight! uppercase">
                We believe that server infrastructures, mandatory email signs,
                and login configurations often create immediate friction for
                absolute beginners who just want to write their first script.
              </h3>
            </li>
            <li>
              <h3 className="text-justify font-extralight! uppercase">
                By leveraging local browser storage layers, Codeflix provides a
                zero-barrier entry point while keeping progress tracking and
                state retention fully private and immediate. Your progress stays
                with you on your machine, exactly where your code lives.
              </h3>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
