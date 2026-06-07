import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);
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
  const Spacer = () => (
    <div className="flex min-h-10 w-full" />
  )
  return (
    <main ref={page}>
      <section className="relative py-20!">
        <div className="glow absolute top-1/2 left-0 -translate-y-1/2 scale-300 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-1/2 right-0 -translate-y-1/2 scale-300 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-1/2 left-0 -translate-y-1/2 scale-300 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-1/2 right-0 -translate-y-1/2 scale-300 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-1/2 left-0 -translate-y-1/2 scale-300 flex size-1/4 bg-blue-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="glow absolute top-1/2 right-0 -translate-y-1/2 scale-300 flex size-1/4 bg-secondary-500 mix-blend-plus-lighter blur-3xl"></div>
        <div className="wrapper relative">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h2 className="text-center">Connect with Our Console</h2>
          </div>
        </div>
      </section>
      {/* <Divider /> */}
      <section className="">
        {/* <div className="wrapper bg-linear-to-br from-primary-950 to-secondary-950 p-6! rounded-3xl"> */}
        <div className="wrapper text-justify text-transparent bg-linear-to-br from-white to-gray-500 bg-clip-text">
          <ul>
            <li>
              <p className="text-center">
                Have structural feature suggestions? Found an edge-case syntax
                error inside our logic containers? Or simply want to partner up
                to deliver custom onboarding tracks for your specific student
                batches or college juniors? Our processing channels are fully
                operational. Drop your tracking payload details, and let's
                optimize the Codeflix ecosystem together.
              </p>
            </li>
            <li>
              <p className="text-center">
                Codeflix Localization Engine V1.0 | support.codeflix@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section className="bg-black">
        <div className="wrapper">
          <h1 className="bg-linear-to-r from-secondary-500 to-white bg-clip-text text-transparent">
            Submit a System Query
          </h1>
          <form className="codeflix-form">
            <div className="form-field">
              <p>Username</p>
              <input type="text" />
            </div>
            <div className="form-field">
              <p>Email ID</p>
              <input type="text" />
            </div>
            <div className="form-field">
              <p>Message / Feedback</p>
              <textarea name="" id=""></textarea>
            </div>
            <button type="submit" className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <p className="mb-0!">Submit</p>
              <div className={`absolute top-1/2 left-0 -translate-y-1/2 scale-100 flex size-1/2 bg-blue-500 mix-blend-plus-lighter blur-3xl ${isHovered ? "opacity-100" : "opacity-0"}`}></div>
              <div className={`absolute top-1/2 right-0 -translate-y-1/2 scale-100 flex size-1/2 bg-secondary-500 mix-blend-plus-lighter blur-3xl ${isHovered ? "opacity-100" : "opacity-0"}`}></div>
              <div className={`absolute top-1/2 left-0 -translate-y-1/2 scale-100 flex size-1/2 bg-blue-500 mix-blend-plus-lighter blur-3xl ${isHovered ? "opacity-100" : "opacity-0"}`}></div>
              <div className={`absolute top-1/2 right-0 -translate-y-1/2 scale-100 flex size-1/2 bg-secondary-500 mix-blend-plus-lighter blur-3xl ${isHovered ? "opacity-100" : "opacity-0"}`}></div>
            </button>
          </form>
        </div>
      </section>
      <Spacer />
    </main>
  );
}
