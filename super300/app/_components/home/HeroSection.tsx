"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // <section className="py-24 px-6">
    //   <div className="max-w-6xl mx-auto text-center">
    //     {/* Small badge */}
    //     <p className="text-sm text-muted-foreground mb-4">
    //       🚀Skill Degree
    //     </p>

    //     {/* Main headline */}
    //     <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
    //       Building Modern <br />
    //       <span className="text-primary">React Experiences</span>
    //     </h1>

    //     {/* Subtitle */}
    //     <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
    //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis necessitatibus distinctio dignissimos doloribus doloremque recusandae sequi velit dolorem natus blanditiis!
    //     </p>

    //     {/* CTA buttons */}
    //     <div className="flex gap-4 justify-center">
    //       <Button size="lg">View Projects</Button>
    //       <Button size="lg" variant="outline">Contact Me</Button>
    //     </div>
    //   </div>
    // </section>
    <section className="text-center gap-1 grid p-4">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm text-muted-foreground mb-4"
      >
        India&apos;s No.1 Network of
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl">
          Skill Colleges <br />
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          inventore enim sint asperiores id totam.
        </p>
      </motion.div>

      {/* cta button */}
      <div className="flex gap-4 justify-center">
        <Button
          size="lg"
          className="hover:border-b-white rounded-none cursor-pointer "
        >
          More Details
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="hover:shadow-lg cursor-pointer hover:scale-90 "
        >
          Enroll Now <ArrowRight />
        </Button>{" "}
      </div>
    </section>
  );
}
