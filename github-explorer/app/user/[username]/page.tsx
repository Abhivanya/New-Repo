"use client";
import React from "react";
import { useUserByUsername } from "./_hooks/useUserByUsername";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useUserRepos } from "./_hooks/useUserRepos";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/lib/animations";

export default function UserProfilePage() {
  const params = useParams<{ username: string }>();
  const username = params.username;
  const { data, isError, error, isPending } = useUserByUsername(username);
  const {
    data: reposData,
    isError: reposIsError,
    error: reposError,
    isPending: reposIsPending,
  } = useUserRepos(username);

  if (isError || reposIsError)
    return <div>{error?.message || reposError?.message}</div>;
  if (isPending || reposIsPending) return <div>Loading...</div>;
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      className="max-w-3xl mx-auto p-10"
    >
      <div className="flex gap-4 items-center">
        <Image
          alt="profile image"
          width={400}
          height={400}
          src={data.avatar_url}
          className="w-32 rounded-full mb-4 border-2 shadow-md border-gray-300"
        />
        <h2 className="text-3xl"> {data.login}</h2>
      </div>
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="text-muted-foreground">{data.bio}</p>
      <div className="flex gap-2">
        <p className="mt-4">Followers: {data.followers}</p>
        <p className="mt-4">Following: {data.following}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Repositories </h2>
        <p>Total : {reposData?.length}</p>

        <div className="grid gap-4">
          {reposData?.map((repo: any) => (
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              key={repo.id}
              className="border p-4 rounded"
            >
              <p className="font-bold">{repo.name}</p>
              <p className="text-sm text-muted-foreground">
                {repo.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
