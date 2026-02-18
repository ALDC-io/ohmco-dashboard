"use client";

import { Eye, DollarSign, Sparkles } from "lucide-react";

const valueProps = [
  {
    icon: Eye,
    title: "See Everything",
    description: "All clients, all channels, one unified view. No more switching between platforms.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: DollarSign,
    title: "Prove ROI",
    description: "Connect ad spend directly to revenue with multi-touch attribution across every channel.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Eclipse analyzes trends across all your clients and surfaces opportunities you'd miss.",
    gradient: "from-violet-500 to-purple-400",
  },
];

export function HeroSection() {
  return (
    <div className="hero-gradient rounded-2xl overflow-hidden">
      {/* Hero header */}
      <div className="px-8 pt-16 pb-12 text-center relative">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1B4DFF]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#00D4FF]/15 rounded-full blur-[80px]" />

        <div className="relative z-10">
          {/* Co-branding */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10">
              <div className="w-6 h-6 rounded-md bg-[#1B4DFF] flex items-center justify-center">
                <span className="text-white text-xs font-bold">O</span>
              </div>
              <span className="text-white/90 text-sm font-medium">OhmCo</span>
              <span className="text-white/40 mx-1">&times;</span>
              <span className="text-white/90 text-sm font-medium">ALDC</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Unified Marketing Intelligence
            <br />
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#1B4DFF] bg-clip-text text-transparent">
              for Carwash Operators
            </span>
          </h1>
          <p className="text-lg text-[#8892a0] max-w-2xl mx-auto">
            One platform to manage, measure, and optimize marketing performance
            across all your clients — powered by Eclipse AI.
          </p>
        </div>
      </div>

      {/* Value proposition cards */}
      <div className="px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children">
          {valueProps.map((prop) => (
            <div key={prop.title} className="glass-card p-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center mb-4`}>
                <prop.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{prop.title}</h3>
              <p className="text-sm text-[#8892a0] leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
