"use client";

import { CardSkeleton } from "@/components/ui/skeleton";

export default function ServiceLoading() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-padding mx-auto">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-dark-800 rounded w-48" />
          <div className="space-y-4">
            <div className="h-16 bg-dark-800 rounded w-3/4" />
            <div className="h-6 bg-dark-800 rounded w-1/2" />
            <div className="h-4 bg-dark-800 rounded w-full" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
