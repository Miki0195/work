"use client";

import { CardSkeleton } from "@/components/ui/skeleton";

export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-padding mx-auto">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-dark-800 rounded w-48" />
          <div className="space-y-4">
            <div className="h-16 bg-dark-800 rounded w-3/4" />
            <div className="h-6 bg-dark-800 rounded w-1/2" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-32 bg-dark-800 rounded" />
            ))}
          </div>
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
}
