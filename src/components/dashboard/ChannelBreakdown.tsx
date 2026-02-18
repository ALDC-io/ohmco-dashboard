"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { ChannelData } from "@/types/dashboard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ChannelBreakdownProps {
  data: ChannelData[];
}

const CHANNEL_COLORS = {
  organic: "#1B4DFF",
  paid: "#00D4FF",
  social: "#7C3AED",
  direct: "#16A34A",
  email: "#EAB308",
};

function formatDateLabel(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function ChannelBreakdown({ data }: ChannelBreakdownProps) {
  // Show every 3rd label to avoid crowding
  const chartData = data.map((d, i) => ({
    ...d,
    label: i % 3 === 0 ? formatDateLabel(d.date) : "",
    displayDate: formatDateLabel(d.date),
  }));

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Channel Performance</CardTitle>
        <p className="text-sm text-muted-foreground">
          Website traffic by source — last 30 days
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barCategoryGap="20%">
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
                tickFormatter={(v) => `${(v / 1000).toFixed(1)}K`}
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
              <Bar dataKey="organic" stackId="a" fill={CHANNEL_COLORS.organic} radius={[0, 0, 0, 0]} />
              <Bar dataKey="paid" stackId="a" fill={CHANNEL_COLORS.paid} />
              <Bar dataKey="social" stackId="a" fill={CHANNEL_COLORS.social} />
              <Bar dataKey="direct" stackId="a" fill={CHANNEL_COLORS.direct} />
              <Bar dataKey="email" stackId="a" fill={CHANNEL_COLORS.email} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
