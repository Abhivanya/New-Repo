"use client";
import React from "react";
import { motion } from "framer-motion";
import { container } from "@/lib/motion";
import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  return (
    <section className="py-32 px-10 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-20">
        Everything you Need To learn
      </h2>

      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
        variants={container}
      >
        {" "}
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </motion.div>
    </section>
  );
}
