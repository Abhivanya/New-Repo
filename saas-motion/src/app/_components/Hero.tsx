"use client";
import React from "react";
import { motion } from "framer-motion";
import Scene from "./3d/Scene";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center md:text-left"
          >
            <p className="text-indigo-400 font-semibold tracking-wider">
              🚀 Boost Your Career
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome To Skill
              <span className="text-indigo-500">College</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0">
              India&apos;s No.1 Network of
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-semibold">
                Explore Courses
              </Button>
              <Button className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl">
                Enroll Now
              </Button>
            </div>
          </motion.div>

          <div className="flex  justify-center">
            <div className="h-125">
              <Scene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
