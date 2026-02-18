"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { ClientPerformance } from "@/types/dashboard";
import { ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react";

interface ClientTableProps {
  clients: ClientPerformance[];
}

type SortKey = keyof ClientPerformance;
type SortDir = "asc" | "desc";

export function ClientTable({ clients }: ClientTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("websiteVisits");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const sorted = [...clients].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortDir === "asc" ? aVal - bVal : bVal - aVal;
    }
    return sortDir === "asc"
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  const columns: { key: SortKey; label: string; align?: string }[] = [
    { key: "name", label: "Client" },
    { key: "websiteVisits", label: "Visits", align: "right" },
    { key: "bounceRate", label: "Bounce Rate", align: "right" },
    { key: "membershipSignups", label: "Signups", align: "right" },
    { key: "socialFollowers", label: "Followers", align: "right" },
    { key: "googleRanking", label: "Google Rank", align: "right" },
    { key: "momChange", label: "MoM Change", align: "right" },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Client Performance</CardTitle>
        <p className="text-sm text-muted-foreground">
          Click column headers to sort
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`py-3 px-3 font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors ${
                      col.align === "right" ? "text-right" : "text-left"
                    }`}
                    onClick={() => handleSort(col.key)}
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.label}
                      <ArrowUpDown className="h-3 w-3 opacity-40" />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((client) => (
                <tr
                  key={client.id}
                  className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                >
                  <td className="py-3 px-3">
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {client.location}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-right font-mono">
                    {client.websiteVisits.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-right font-mono">
                    <span
                      className={
                        client.bounceRate > 45
                          ? "text-red-600"
                          : client.bounceRate < 35
                          ? "text-emerald-600"
                          : ""
                      }
                    >
                      {client.bounceRate.toFixed(1)}%
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-mono">
                    {client.membershipSignups.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-right font-mono">
                    {client.socialFollowers.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-6 rounded text-xs font-bold ${
                        client.googleRanking <= 5
                          ? "bg-emerald-50 text-emerald-700"
                          : client.googleRanking <= 10
                          ? "bg-amber-50 text-amber-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      #{client.googleRanking}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold ${
                        client.momChange > 0
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {client.momChange > 0 ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {client.momChange > 0 ? "+" : ""}
                      {client.momChange.toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
