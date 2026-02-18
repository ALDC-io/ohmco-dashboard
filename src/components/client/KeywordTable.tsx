"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { KeywordRanking } from "@/types/dashboard";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface KeywordTableProps {
  keywords: KeywordRanking[];
}

export function KeywordTable({ keywords }: KeywordTableProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">SEO Keyword Rankings</CardTitle>
        <p className="text-sm text-muted-foreground">
          Tracked keywords with position changes
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 px-3 text-left font-medium text-muted-foreground">Keyword</th>
                <th className="py-3 px-3 text-right font-medium text-muted-foreground">Position</th>
                <th className="py-3 px-3 text-right font-medium text-muted-foreground">Change</th>
                <th className="py-3 px-3 text-right font-medium text-muted-foreground">Search Vol.</th>
              </tr>
            </thead>
            <tbody>
              {keywords.map((kw) => (
                <tr key={kw.keyword} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-3">
                    <p className="font-medium">{kw.keyword}</p>
                    <p className="text-xs text-muted-foreground">{kw.url}</p>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className={`inline-flex items-center justify-center w-8 h-6 rounded text-xs font-bold ${
                      kw.position <= 3
                        ? "bg-emerald-50 text-emerald-700"
                        : kw.position <= 5
                        ? "bg-blue-50 text-blue-700"
                        : kw.position <= 10
                        ? "bg-amber-50 text-amber-700"
                        : "bg-red-50 text-red-700"
                    }`}>
                      #{kw.position}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    {kw.change > 0 ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                        <TrendingUp className="h-3 w-3" />
                        +{kw.change}
                      </span>
                    ) : kw.change < 0 ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600">
                        <TrendingDown className="h-3 w-3" />
                        {kw.change}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Minus className="h-3 w-3" />
                        0
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-muted-foreground">
                    {kw.searchVolume.toLocaleString()}
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
