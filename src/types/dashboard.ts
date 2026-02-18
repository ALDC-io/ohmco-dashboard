export interface KPIMetric {
  label: string;
  value: number;
  formattedValue: string;
  change: number; // percentage change MoM
  sparklineData: number[];
  icon: string;
}

export interface ChannelData {
  date: string;
  organic: number;
  paid: number;
  social: number;
  direct: number;
  email: number;
}

export interface ClientPerformance {
  id: string;
  name: string;
  location: string;
  websiteVisits: number;
  bounceRate: number;
  membershipSignups: number;
  socialFollowers: number;
  googleRanking: number;
  momChange: number; // percentage
}

export interface Campaign {
  id: string;
  name: string;
  client: string;
  channel: string;
  spend: number;
  revenue: number;
  roi: number; // percentage
  status: 'active' | 'paused' | 'completed';
  startDate: string;
  endDate: string;
}

export interface DashboardData {
  kpis: KPIMetric[];
  channelData: ChannelData[];
  clients: ClientPerformance[];
  campaigns: Campaign[];
}

// Client Deep Dive types
export interface DailyTraffic {
  date: string;
  organic: number;
  paid: number;
  social: number;
  direct: number;
  email: number;
  total: number;
}

export interface KeywordRanking {
  keyword: string;
  position: number;
  previousPosition: number;
  change: number;
  searchVolume: number;
  url: string;
}

export interface ClientDetail {
  id: string;
  name: string;
  location: string;
  membershipTier: string;
  websiteVisits: number;
  membershipSignups: number;
  bounceRate: number;
  avgSessionDuration: string;
  socialReach: number;
  googleRanking: number;
  trafficData: DailyTraffic[];
  keywords: KeywordRanking[];
  campaigns: Campaign[];
}

// Data source for federation visualization
export interface DataSource {
  id: string;
  name: string;
  icon: string;
  category: 'advertising' | 'analytics' | 'social' | 'email' | 'operations' | 'seo';
  color: string;
}
