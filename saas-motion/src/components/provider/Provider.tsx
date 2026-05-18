"use client";
import { initLenis } from "@/lib/lenis";
import React, { useEffect } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initLenis();
  }, []);
  return <div>{children}</div>;
}
