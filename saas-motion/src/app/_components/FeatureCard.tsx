"use client";
import { Card, CardContent } from "@/components/ui/card";
import { item } from "@/lib/motion";
import { motion } from "framer-motion";

export default function FeatureCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div variants={item}>
      <Card className="bg-zinc-900 border-zinc-800 hover:border-indigo-500 transition-all duration-300 hover:scale-105">
        <CardContent className="p-8">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-zinc-400">{desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
