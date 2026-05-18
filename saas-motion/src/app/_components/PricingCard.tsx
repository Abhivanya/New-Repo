"use client";
import { Card, CardContent } from "@/components/ui/card";
import { PlanType } from "@/data/pricing";
import { Button } from "@base-ui/react";
import { motion } from "framer-motion";

export default function PricingCard({ plan }: { plan: PlanType }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative"
    >
      {plan.popular && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500
            "
        >
          Most Popular{" "}
        </div>
      )}

      <Card
        className={`p-8 h-full ${
          plan.popular
            ? "border-indigo-500 bg-zinc-900 scale-105"
            : "bg-zinc-900 border-zinc-800"
        }`}
      >
        <CardContent className="space-y-6">
          <h3 className="text-2xl font-bold">{plan.name}</h3>
          <p className="text-5xl font-bold">₹{plan.price}</p>

          <ul className="space-y-2 text-zinc-400">
            {plan.features.map((f, i) => (
              <li key={i}>✓ {f}</li>
            ))}
          </ul>

          <Button className="w-full mt-6">Get Started</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
