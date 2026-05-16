import React from "react";

export default function UserSkeleton() {
  return (
    <div className="border p-4 rounded animate-pulse">
      <div className="w-20 h-20 rounded-full bg-gray-300 mb-3"></div>
      <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-16 "></div>
    </div>
  );
}
