"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import type { KPIMetric } from "@/types/dashboard";
import { Globe, Users, Heart, Search, X } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  users: Users,
  heart: Heart,
  search: Search,
};

interface MetricCardProps {
  metric: KPIMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[metric.icon] || Globe;
  const isPositive = metric.change > 0;
  const sparklinePoints = metric.sparklineData.map((value, index) => ({
    value,
    index,
    day: `Day ${index + 1}`,
  }));

  return (
    <>
      <Card
        className="p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
        onClick={() => setExpanded(true)}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {metric.label}
            </span>
          </div>
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              isPositive
                ? "bg-emerald-50 text-emerald-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {isPositive ? "+" : ""}
            {metric.change.toFixed(1)}%
          </span>
        </div>

        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold tracking-tight">{metric.formattedValue}</p>
          <div className="w-24 h-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparklinePoints}>
                <defs>
                  <linearGradient id={`gradient-${metric.icon}`} x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={isPositive ? "#10b981" : "#ef4444"}
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor={isPositive ? "#10b981" : "#ef4444"}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={isPositive ? "#10b981" : "#ef4444"}
                  strokeWidth={1.5}
                  fill={`url(#gradient-${metric.icon})`}
                  dot={false}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-2">Last 30 days &middot; Click to expand</p>
      </Card>

      {/* Expanded detail overlay */}
      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setExpanded(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{metric.label}</h3>
                  <p className="text-2xl font-bold">{metric.formattedValue}</p>
                </div>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparklinePoints}>
                  <defs>
                    <linearGradient id={`gradient-expanded-${metric.icon}`} x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor={isPositive ? "#10b981" : "#ef4444"}
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor={isPositive ? "#10b981" : "#ef4444"}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    tickLine={false}
                    axisLine={false}
                    interval={4}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    tickLine={false}
                    axisLine={false}
                    width={40}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={isPositive ? "#10b981" : "#ef4444"}
                    strokeWidth={2}
                    fill={`url(#gradient-expanded-${metric.icon})`}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">30-day trend</span>
              <span className={`font-semibold ${isPositive ? "text-emerald-600" : "text-red-600"}`}>
                {isPositive ? "+" : ""}{metric.change.toFixed(1)}% vs. previous period
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
