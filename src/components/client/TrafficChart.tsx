"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { DailyTraffic } from "@/types/dashboard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface TrafficChartProps {
  data: DailyTraffic[];
}

function formatDateLabel(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function TrafficChart({ data }: TrafficChartProps) {
  // Show every 7th label
  const chartData = data.map((d, i) => ({
    ...d,
    label: i % 7 === 0 ? formatDateLabel(d.date) : "",
    displayDate: formatDateLabel(d.date),
  }));

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Website Traffic — 90 Days</CardTitle>
        <p className="text-sm text-muted-foreground">
          Daily visits by channel with trend overlay
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="grad-organic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1B4DFF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#1B4DFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="grad-paid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00D4FF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="grad-social" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis
                dataKey="label"
                tick={{ fontSize: 11, fill: "#6b7280" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#6b7280" }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                labelFormatter={(_, payload) => {
                  if (payload && payload.length > 0) {
                    return payload[0]?.payload?.displayDate || "";
                  }
                  return "";
                }}
                formatter={(value: number, name: string) => [
                  value.toLocaleString(),
                  name.charAt(0).toUpperCase() + name.slice(1),
                ]}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
                formatter={(value: string) =>
                  value.charAt(0).toUpperCase() + value.slice(1)
                }
              />
              <Area type="monotone" dataKey="organic" stroke="#1B4DFF" strokeWidth={2} fill="url(#grad-organic)" />
              <Area type="monotone" dataKey="paid" stroke="#00D4FF" strokeWidth={1.5} fill="url(#grad-paid)" />
              <Area type="monotone" dataKey="social" stroke="#7C3AED" strokeWidth={1.5} fill="url(#grad-social)" />
              <Area type="monotone" dataKey="direct" stroke="#16A34A" strokeWidth={1} fill="transparent" />
              <Area type="monotone" dataKey="email" stroke="#EAB308" strokeWidth={1} fill="transparent" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
