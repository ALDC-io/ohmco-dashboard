"use client";

import { dataSources } from "@/lib/mock-data";
import {
  BarChart3, Megaphone, Share2, Mail, Camera, Users,
  CreditCard, Search, Star, Play, Zap,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; color?: string }>> = {
  "bar-chart": BarChart3,
  "megaphone": Megaphone,
  "share-2": Share2,
  "mail": Mail,
  "camera": Camera,
  "users": Users,
  "credit-card": CreditCard,
  "search": Search,
  "star": Star,
  "play": Play,
};

export function DataSources() {
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Data Federation
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Connect every marketing data source into a single intelligence layer
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Source nodes — arranged in a circle around the center */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {dataSources.map((source, i) => {
            const Icon = iconMap[source.icon] || BarChart3;
            return (
              <div
                key={source.id}
                className="glass-card-light flex flex-col items-center gap-3 p-4 text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center animate-pulse-glow"
                  style={{ backgroundColor: `${source.color}20`, animationDelay: `${i * 0.3}s` }}
                >
                  <Icon className="h-5 w-5" color={source.color} />
                </div>
                <span className="text-xs font-medium text-foreground">{source.name}</span>
              </div>
            );
          })}
        </div>

        {/* Flow arrows into center */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#1B4DFF]"
                  style={{
                    animation: `loading-pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>

            {/* Eclipse center hub */}
            <div className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0a1628] to-[#1B4DFF] border border-[#1B4DFF]/30 shadow-lg shadow-[#1B4DFF]/20">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-[#00D4FF]" />
                <div>
                  <p className="text-white font-semibold text-sm">Eclipse Platform</p>
                  <p className="text-[#8892a0] text-xs">Unified Intelligence</p>
                </div>
              </div>
            </div>

            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#00D4FF]"
                  style={{
                    animation: `loading-pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
