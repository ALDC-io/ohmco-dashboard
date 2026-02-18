import type { KPIMetric, ChannelData, ClientPerformance, Campaign, DashboardData, ClientDetail, DailyTraffic, KeywordRanking, DataSource } from "@/types/dashboard";

// Generate sparkline data (30 days of values with realistic trend)
function generateSparkline(base: number, variance: number, trend: number): number[] {
  const data: number[] = [];
  let current = base - (trend * 15); // start lower if uptrend
  for (let i = 0; i < 30; i++) {
    current += trend + (Math.random() - 0.5) * variance;
    data.push(Math.max(0, Math.round(current)));
  }
  return data;
}

const kpis: KPIMetric[] = [
  {
    label: "Total Website Visits",
    value: 147_832,
    formattedValue: "147.8K",
    change: 12.4,
    sparklineData: generateSparkline(4800, 600, 20),
    icon: "globe",
  },
  {
    label: "Membership Signups",
    value: 1_284,
    formattedValue: "1,284",
    change: 8.7,
    sparklineData: generateSparkline(38, 8, 1),
    icon: "users",
  },
  {
    label: "Social Engagement Rate",
    value: 4.8,
    formattedValue: "4.8%",
    change: -0.3,
    sparklineData: generateSparkline(45, 8, 0).map(v => v / 10),
    icon: "heart",
  },
  {
    label: "Avg. SEO Position",
    value: 6.2,
    formattedValue: "#6.2",
    change: 1.8, // positive = ranking improved (lower number)
    sparklineData: generateSparkline(80, 5, -1).map(v => v / 10),
    icon: "search",
  },
];

// 30 days of channel breakdown data
function generateChannelData(): ChannelData[] {
  const data: ChannelData[] = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayOfWeek = date.getDay();
    const weekendFactor = (dayOfWeek === 0 || dayOfWeek === 6) ? 0.7 : 1.0;

    data.push({
      date: date.toISOString().split('T')[0],
      organic: Math.round((1800 + Math.random() * 400) * weekendFactor),
      paid: Math.round((1200 + Math.random() * 300) * weekendFactor),
      social: Math.round((800 + Math.random() * 200) * weekendFactor),
      direct: Math.round((600 + Math.random() * 150) * weekendFactor),
      email: Math.round((400 + Math.random() * 100) * weekendFactor),
    });
  }
  return data;
}

const channelData = generateChannelData();

const clients: ClientPerformance[] = [
  {
    id: "gc-001",
    name: "Green Clean Auto Spa",
    location: "Milwaukee, WI",
    websiteVisits: 38_420,
    bounceRate: 34.2,
    membershipSignups: 412,
    socialFollowers: 8_940,
    googleRanking: 3,
    momChange: 15.2,
  },
  {
    id: "wc-002",
    name: "Waves Carwash",
    location: "Madison, WI",
    websiteVisits: 29_150,
    bounceRate: 41.8,
    membershipSignups: 287,
    socialFollowers: 5_620,
    googleRanking: 5,
    momChange: 8.4,
  },
  {
    id: "jc-003",
    name: "Johnson's Express Wash",
    location: "Green Bay, WI",
    websiteVisits: 22_810,
    bounceRate: 38.5,
    membershipSignups: 198,
    socialFollowers: 3_280,
    googleRanking: 7,
    momChange: 22.1,
  },
  {
    id: "se-004",
    name: "Sudzy Express",
    location: "Appleton, WI",
    websiteVisits: 18_960,
    bounceRate: 45.1,
    membershipSignups: 156,
    socialFollowers: 4_150,
    googleRanking: 9,
    momChange: -3.2,
  },
  {
    id: "sp-005",
    name: "Sparkle & Shine",
    location: "Kenosha, WI",
    websiteVisits: 24_330,
    bounceRate: 36.7,
    membershipSignups: 142,
    socialFollowers: 6_780,
    googleRanking: 4,
    momChange: 11.6,
  },
  {
    id: "rw-006",
    name: "Rinse Works",
    location: "Racine, WI",
    websiteVisits: 14_162,
    bounceRate: 52.3,
    membershipSignups: 89,
    socialFollowers: 2_110,
    googleRanking: 14,
    momChange: -7.8,
  },
];

const campaigns: Campaign[] = [
  {
    id: "camp-001",
    name: "Spring Membership Blitz",
    client: "Green Clean Auto Spa",
    channel: "Google Ads",
    spend: 4_500,
    revenue: 18_200,
    roi: 304,
    status: "active",
    startDate: "2026-01-15",
    endDate: "2026-03-15",
  },
  {
    id: "camp-002",
    name: "Local SEO Domination",
    client: "Waves Carwash",
    channel: "SEO",
    spend: 2_800,
    revenue: 9_400,
    roi: 236,
    status: "active",
    startDate: "2026-01-01",
    endDate: "2026-06-30",
  },
  {
    id: "camp-003",
    name: "Social Media Growth",
    client: "Sparkle & Shine",
    channel: "Meta Ads",
    spend: 3_200,
    revenue: 7_800,
    roi: 144,
    status: "active",
    startDate: "2026-02-01",
    endDate: "2026-04-30",
  },
  {
    id: "camp-004",
    name: "Grand Opening Push",
    client: "Johnson's Express Wash",
    channel: "Multi-Channel",
    spend: 8_500,
    revenue: 32_100,
    roi: 278,
    status: "active",
    startDate: "2026-01-20",
    endDate: "2026-02-28",
  },
  {
    id: "camp-005",
    name: "Winter Wash Promo",
    client: "Sudzy Express",
    channel: "Email",
    spend: 1_200,
    revenue: 3_100,
    roi: 158,
    status: "completed",
    startDate: "2025-12-01",
    endDate: "2026-01-31",
  },
  {
    id: "camp-006",
    name: "Unlimited Plan Upsell",
    client: "Rinse Works",
    channel: "Google Ads",
    spend: 2_100,
    revenue: 4_600,
    roi: 119,
    status: "paused",
    startDate: "2026-01-10",
    endDate: "2026-03-10",
  },
  {
    id: "camp-007",
    name: "Review Generation",
    client: "Green Clean Auto Spa",
    channel: "Email",
    spend: 800,
    revenue: 5_200,
    roi: 550,
    status: "active",
    startDate: "2026-02-01",
    endDate: "2026-04-01",
  },
  {
    id: "camp-008",
    name: "Fleet Account Targeting",
    client: "Waves Carwash",
    channel: "LinkedIn Ads",
    spend: 1_800,
    revenue: 6_900,
    roi: 283,
    status: "active",
    startDate: "2026-01-15",
    endDate: "2026-03-31",
  },
];

export const mockDashboardData: DashboardData = {
  kpis,
  channelData,
  clients,
  campaigns,
};

// 90-day traffic data for Green Clean Auto Spa
function generateTrafficData(): DailyTraffic[] {
  const data: DailyTraffic[] = [];
  const now = new Date();
  for (let i = 89; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayOfWeek = date.getDay();
    const weekendFactor = (dayOfWeek === 0 || dayOfWeek === 6) ? 0.65 : 1.0;
    // Gradual uptrend over 90 days
    const trendFactor = 1 + (90 - i) * 0.003;

    const organic = Math.round((480 + Math.random() * 120) * weekendFactor * trendFactor);
    const paid = Math.round((320 + Math.random() * 80) * weekendFactor * trendFactor);
    const social = Math.round((180 + Math.random() * 60) * weekendFactor * trendFactor);
    const direct = Math.round((140 + Math.random() * 40) * weekendFactor * trendFactor);
    const email = Math.round((80 + Math.random() * 30) * weekendFactor * trendFactor);

    data.push({
      date: date.toISOString().split('T')[0],
      organic,
      paid,
      social,
      direct,
      email,
      total: organic + paid + social + direct + email,
    });
  }
  return data;
}

const greenCleanKeywords: KeywordRanking[] = [
  { keyword: "car wash milwaukee", position: 2, previousPosition: 4, change: 2, searchVolume: 8_100, url: "/car-wash-milwaukee" },
  { keyword: "auto detailing near me", position: 3, previousPosition: 3, change: 0, searchVolume: 12_400, url: "/auto-detailing" },
  { keyword: "unlimited car wash plan", position: 1, previousPosition: 2, change: 1, searchVolume: 4_200, url: "/unlimited-plans" },
  { keyword: "best car wash wisconsin", position: 5, previousPosition: 8, change: 3, searchVolume: 3_600, url: "/" },
  { keyword: "express car wash", position: 4, previousPosition: 5, change: 1, searchVolume: 6_800, url: "/express-wash" },
  { keyword: "ceramic coating car wash", position: 7, previousPosition: 12, change: 5, searchVolume: 2_900, url: "/ceramic-coating" },
  { keyword: "car wash membership", position: 3, previousPosition: 3, change: 0, searchVolume: 5_100, url: "/membership" },
  { keyword: "eco friendly car wash", position: 6, previousPosition: 9, change: 3, searchVolume: 1_800, url: "/eco-friendly" },
];

export const greenCleanDetail: ClientDetail = {
  id: "gc-001",
  name: "Green Clean Auto Spa",
  location: "Milwaukee, WI",
  membershipTier: "Premium Partner",
  websiteVisits: 38_420,
  membershipSignups: 412,
  bounceRate: 34.2,
  avgSessionDuration: "3:24",
  socialReach: 45_200,
  googleRanking: 3,
  trafficData: generateTrafficData(),
  keywords: greenCleanKeywords,
  campaigns: campaigns.filter(c => c.client === "Green Clean Auto Spa"),
};

export const dataSources: DataSource[] = [
  { id: "ga", name: "Google Analytics", icon: "bar-chart", category: "analytics", color: "#F59E0B" },
  { id: "gads", name: "Google Ads", icon: "megaphone", category: "advertising", color: "#4285F4" },
  { id: "meta", name: "Meta Ads", icon: "share-2", category: "advertising", color: "#1877F2" },
  { id: "mailchimp", name: "Mailchimp", icon: "mail", category: "email", color: "#FFE01B" },
  { id: "instagram", name: "Instagram", icon: "camera", category: "social", color: "#E4405F" },
  { id: "facebook", name: "Facebook", icon: "users", category: "social", color: "#1877F2" },
  { id: "pos", name: "POS / Membership", icon: "credit-card", category: "operations", color: "#10B981" },
  { id: "seo", name: "SEO Tools", icon: "search", category: "seo", color: "#8B5CF6" },
  { id: "reviews", name: "Review Platforms", icon: "star", category: "operations", color: "#F97316" },
  { id: "tiktok", name: "TikTok", icon: "play", category: "social", color: "#00F2EA" },
];
