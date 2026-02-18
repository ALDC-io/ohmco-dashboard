"use client";

import { greenCleanDetail } from "@/lib/mock-data";
import { TrafficChart } from "./TrafficChart";
import { KeywordTable } from "./KeywordTable";
import { CampaignROI } from "@/components/dashboard/CampaignROI";
import { Card } from "@/components/ui/card";
import {
  Globe, Users, ArrowDownUp, Clock, Share2, Search,
  MapPin, Award,
} from "lucide-react";

const kpiItems = [
  { icon: Globe, label: "Website Visits", value: "38.4K", change: "+15.2%" },
  { icon: Users, label: "Signups", value: "412", change: "+22.1%" },
  { icon: ArrowDownUp, label: "Bounce Rate", value: "34.2%", change: "-3.1%" },
  { icon: Clock, label: "Avg. Session", value: "3:24", change: "+0:18" },
  { icon: Share2, label: "Social Reach", value: "45.2K", change: "+8.4%" },
  { icon: Search, label: "Google Rank", value: "#3", change: "+2" },
];

export function ClientDeepDive() {
  const client = greenCleanDetail;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Client header */}
      <div className="flex items-start gap-4 pb-4 border-b border-border/50">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-xl">GC</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-xl font-bold text-foreground">{client.name}</h2>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1B4DFF]/10 text-[#1B4DFF] text-xs font-medium">
              <Award className="h-3 w-3" />
              {client.membershipTier}
            </span>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
            <MapPin className="h-3.5 w-3.5" />
            {client.location}
          </p>
        </div>
      </div>

      {/* 6-metric KPI row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {kpiItems.map((kpi) => {
          const isPositive = kpi.change.startsWith("+") || kpi.change.startsWith("-3");
          return (
            <Card key={kpi.label} className="p-4 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-md bg-primary/10">
                  <kpi.icon className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">{kpi.label}</span>
              </div>
              <p className="text-xl font-bold">{kpi.value}</p>
              <p className={`text-xs font-medium mt-1 ${
                kpi.label === "Bounce Rate"
                  ? "text-emerald-600"
                  : isPositive
                  ? "text-emerald-600"
                  : "text-red-600"
              }`}>
                {kpi.change}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Traffic chart */}
      <TrafficChart data={client.trafficData} />

      {/* Campaign ROI + Keywords side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CampaignROI campaigns={client.campaigns} />
        <KeywordTable keywords={client.keywords} />
      </div>
    </div>
  );
}
