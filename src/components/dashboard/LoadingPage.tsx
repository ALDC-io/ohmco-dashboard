"use client";

import { Droplets } from "lucide-react";

export function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-6">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-20 h-20 rounded-full border-2 border-[#1B4DFF]/20 animate-loading-spin">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1B4DFF]" />
        </div>
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-xl bg-[#1B4DFF]/10 flex items-center justify-center">
            <Droplets className="h-5 w-5 text-[#1B4DFF] animate-loading-pulse" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-foreground">Loading dashboard</p>
        <p className="text-xs text-muted-foreground mt-1">Connecting to data sources...</p>
      </div>
    </div>
  );
}
