"use client";

import { useState } from "react";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { HeroSection } from "@/components/overview/HeroSection";
import { DataSources } from "@/components/overview/DataSources";
import { StatsCounter } from "@/components/overview/StatsCounter";
import { ClientDeepDive } from "@/components/client/ClientDeepDive";
import { InsightsPlaceholder } from "@/components/insights/InsightsPlaceholder";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Droplets, BarChart3, Sparkles, LayoutDashboard, UserCircle,
} from "lucide-react";

const tabs = [
  { value: "overview", label: "Overview", icon: LayoutDashboard },
  { value: "dashboard", label: "Dashboard", icon: BarChart3 },
  { value: "client", label: "Client Deep Dive", icon: UserCircle },
  { value: "insights", label: "AI Insights", icon: Sparkles },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Premium header */}
      <header className="bg-white border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* OhmCo + ALDC co-branding */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1B4DFF] shadow-md shadow-blue-500/20">
                <Droplets className="h-4 w-4 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-[#0F172A]">
                  OhmCo
                </h1>
                <p className="text-[10px] text-muted-foreground -mt-0.5 leading-none">
                  Marketing Intelligence
                </p>
              </div>
              <div className="hidden sm:flex items-center ml-2">
                <span className="text-xs text-muted-foreground/50 mx-2">|</span>
                <span className="text-xs text-muted-foreground">
                  Powered by <span className="font-semibold text-foreground">ALDC</span>
                </span>
              </div>
            </div>

            {/* Tab navigation */}
            <Tabs>
              <TabsList className="grid grid-cols-4 max-w-lg bg-gray-100/80">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    isActive={activeTab === tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className="text-xs sm:text-sm"
                  >
                    <tab.icon className="h-3.5 w-3.5 mr-1 sm:mr-1.5 shrink-0" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </header>

      {/* Tab content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          {/* Overview */}
          <TabsContent value="overview" isActive={activeTab === "overview"}>
            <div className="space-y-8 tab-content-enter">
              <HeroSection />
              <StatsCounter />
              <DataSources />
            </div>
          </TabsContent>

          {/* Dashboard */}
          <TabsContent value="dashboard" isActive={activeTab === "dashboard"}>
            <div className="tab-content-enter">
              <Dashboard />
            </div>
          </TabsContent>

          {/* Client Deep Dive */}
          <TabsContent value="client" isActive={activeTab === "client"}>
            <div className="tab-content-enter">
              <ClientDeepDive />
            </div>
          </TabsContent>

          {/* AI Insights */}
          <TabsContent value="insights" isActive={activeTab === "insights"}>
            <div className="tab-content-enter">
              <InsightsPlaceholder />
            </div>
          </TabsContent>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-3 bg-white">
        <p className="text-xs text-muted-foreground text-center">
          <span className="font-medium text-foreground">ALDC</span>
          {" "}&middot; Analytic Labs Data Company &middot; Unified Marketing Intelligence Platform
        </p>
      </footer>
    </main>
  );
}
