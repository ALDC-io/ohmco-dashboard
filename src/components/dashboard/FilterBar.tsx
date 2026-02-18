"use client";

import { Calendar, ChevronDown } from "lucide-react";

export function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-border/50">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Marketing Dashboard</h2>
        <p className="text-sm text-muted-foreground">Performance across all clients and channels</p>
      </div>
      <div className="flex items-center gap-3">
        {/* Date range selector */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white hover:bg-gray-50 transition-colors text-sm">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>Last 30 Days</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </button>
        {/* Client filter */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white hover:bg-gray-50 transition-colors text-sm">
          <span>All Clients</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
