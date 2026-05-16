"use client";
import ProjectCards from "./ProjectCards";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SaaS Dashboard",
    description: "Full analytics dashboard with charts and auth.",
    tags: ["Next.js", "Tailwind", "Charts"],
  },
  {
    title: "E-commerce Store",
    description: "Modern shopping platform with cart & payments.",
    tags: ["React", "Stripe", "Zustand"],
  },
  {
    title: "GitHub Explorer",
    description: "Search GitHub users and repositories.",
    tags: ["React Query", "API"],
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCards key={project.title} {...project} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
