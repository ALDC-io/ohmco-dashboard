"use client";

import { useDashboardData } from "@/hooks/useDashboardData";
import { MetricCard } from "./MetricCard";
import { ChannelBreakdown } from "./ChannelBreakdown";
import { ClientTable } from "./ClientTable";
import { CampaignROI } from "./CampaignROI";
import { LoadingPage } from "./LoadingPage";
import { FilterBar } from "./FilterBar";

export function Dashboard() {
  const { data, loading } = useDashboardData();

  if (loading || !data) {
    return <LoadingPage />;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <FilterBar />

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.kpis.map((metric) => (
          <MetricCard key={metric.icon} metric={metric} />
        ))}
      </div>

      {/* Channel Breakdown + Campaign ROI */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <ChannelBreakdown data={data.channelData} />
        </div>
        <div className="lg:col-span-2">
          <CampaignROI campaigns={data.campaigns} />
        </div>
      </div>

      {/* Client Performance Table */}
      <ClientTable clients={data.clients} />
    </div>
  );
}
