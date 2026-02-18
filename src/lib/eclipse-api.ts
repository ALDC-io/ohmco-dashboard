// Eclipse API types — placeholder for future live data connection
// Currently the dashboard uses mock data only

export interface EclipseRequestParams {
  metrics: string[];
  dimensions: string[];
  filters?: Record<string, string>;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface EclipseResponse {
  data: Record<string, unknown>[];
  metadata: {
    totalRows: number;
    query: string;
  };
}

export const ECLIPSE_BASE_URL = process.env.ECLIPSE_API_URL || "https://eclipse.analyticlabs.io";
