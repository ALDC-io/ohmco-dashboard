"use client";

import { Sparkles, MessageSquare, TrendingUp, Brain, Target } from "lucide-react";

const sampleQuestions = [
  {
    icon: TrendingUp,
    question: "Why did Green Clean's traffic drop last week?",
    category: "Anomaly Detection",
  },
  {
    icon: Target,
    question: "Which channel has the best ROI across all clients?",
    category: "Cross-Client Analysis",
  },
  {
    icon: Brain,
    question: "Predict next month's membership signups",
    category: "Predictive Analytics",
  },
  {
    icon: MessageSquare,
    question: "What should Sudzy Express focus on to improve?",
    category: "Recommendations",
  },
];

export function InsightsPlaceholder() {
  return (
    <div className="hero-gradient-subtle rounded-2xl min-h-[600px] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-[#1B4DFF]/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-[#00D4FF]/10 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Eclipse icon */}
        <div className="mb-8 inline-flex">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1B4DFF] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-[#1B4DFF]/30">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#00D4FF] animate-pulse-glow" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Ask Eclipse About Your Marketing Performance
        </h2>
        <p className="text-[#8892a0] mb-10 max-w-lg mx-auto">
          Natural language AI analysis across all your clients, channels, and campaigns. Just ask a question.
        </p>

        {/* Mock input */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10">
            <MessageSquare className="h-5 w-5 text-[#8892a0] shrink-0" />
            <span className="text-[#8892a0] text-sm">Ask Eclipse anything about your marketing data...</span>
          </div>
        </div>

        {/* Sample question cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto stagger-children">
          {sampleQuestions.map((q) => (
            <button
              key={q.question}
              className="glass-card p-4 text-left group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1B4DFF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1B4DFF]/30 transition-colors">
                  <q.icon className="h-4 w-4 text-[#00D4FF]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/90 mb-1">{q.question}</p>
                  <p className="text-xs text-[#8892a0]">{q.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Coming Soon badge */}
        <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4DFF]/20 border border-[#1B4DFF]/30">
          <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-sm text-[#00D4FF] font-medium">Coming Soon — Powered by Eclipse</span>
        </div>
      </div>
    </div>
  );
}
