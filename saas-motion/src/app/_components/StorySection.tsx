"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2500",
            scrub: true,
            pin: true,
          },
        })
        .to(".step1", { opacity: 1, y: 0 })
        .to(".step1", { opacity: 0, y: -50 })
        .to(".step2", { opacity: 1, y: 0 })
        .to(".step2", { opacity: 0, y: -50 })
        .to(".step3", { opacity: 1, y: 0 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="h-screen flex items-center justify-center"
      ref={sectionRef}
    >
      <div className="text-center space-y-6">
        <h2 className="step1 opacity-0 translate-y-20 text-5xl font-bold">
          Our Stories
        </h2>

        <h2 className="step2 opacity-0 translate-y-20 text-5xl font-bold">
          Learn Skills
        </h2>

        <h2 className="step3 opacity-0 translate-y-20 text-5xl font-bold text-indigo-500">
          Grow Your Career
        </h2>
      </div>
    </section>
  );
}
