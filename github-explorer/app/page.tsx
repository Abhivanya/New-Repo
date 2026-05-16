"use client";

import { useState } from "react";
import { useSearchUsers } from "./_hooks/useSerachUsers";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDebounce } from "./lib/debounce";
import UserSkeleton from "./_components/UserSkeleton";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "./lib/animations";

export default function Home() {
  const [search, setSearch] = useState("");

  const debounceValue = useDebounce(search.trim(), 700);
  const { data, isLoading, isError } = useSearchUsers(debounceValue);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="w-4xl text-center mx-auto p-10"
    >
      <motion.h1 variants={fadeInUp} className="text-4xl font-bold mb-6">
        GitHub Explorer 🔎
      </motion.h1>

      <motion.input
        variants={fadeInUp}
        className="border p-3 w-full rounded mb-8"
        placeholder="Search GitHub users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-6">
        {isError && <p className="text-red-500">Failed to fetch users 😢</p>}

        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <UserSkeleton key={i} />)
          : data?.map((user: any) => (
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={user.id}
                className="border p-4 rounded text-left"
              >
                <Image
                  width={400}
                  height={400}
                  src={user.avatar_url}
                  alt={user.login}
                  className="rounded-full w-20 mb-2"
                />
                <p className="font-bold">{user.login}</p>
                <Link
                  href={`/user/${user.login}`}
                  className="text-blue-500 mt-2 inline-block border-white border p-1 rounded"
                >
                  View Profile
                </Link>
              </motion.div>
            ))}
      </div>
    </motion.div>
  );
}
