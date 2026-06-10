import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const container = document.querySelector("main");

export default function useRevealAnimation() {
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
    { scope: container },
  );
}
