"use client";
import { plans } from "@/data/pricing";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import PricingCard from "./PricingCard";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const [billing, setBilling] = React.useState<"monthly" | "yearly">("monthly");
  return (
    <section className="py-32 text-center">
      <h2 className="text-5xl font-bold mb-10">Simple Pricing</h2>

      <div className="flex justify-center gap-4 mb-16">
        <Button
          variant={"outline"}
          onClick={() => setBilling("monthly")}
          className={
            billing === "monthly"
              ? "text-indigo-500 border-indigo-500"
              : "text-zinc-400"
          }
        >
          Monthly
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setBilling("yearly")}
          className={
            billing === "yearly"
              ? "text-indigo-500 border-indigo-500"
              : "text-zinc-400"
          }
        >
          Yearly
        </Button>
      </div>

      <motion.div
        layout
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-10"
      >
        <AnimatePresence mode="wait">
          {plans[billing].map((plan) => (
            <motion.div
              key={plan.name}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
