# OhmCo Carwash Marketing Dashboard

## Overview
Prospect prototype for OhmCo, a carwash marketing agency (Wisconsin-based). Demonstrates ALDC's analytics capabilities applied to multi-client marketing performance tracking.

## Tech Stack
- **Next.js 15** (App Router, Turbopack)
- **React 19** + TypeScript
- **Tailwind CSS** with HSL color variables
- **Recharts** for data visualization
- **Lucide React** for icons

## Brand Colors
- Primary: `#1B4DFF` (deep electric blue)
- Accent: `#00D4FF` (bright cyan)
- Background: white with light gray accents
- Text: `#0F172A` (slate-900)

## Architecture
- All data is mock — no API keys needed
- Eclipse API proxy route exists for future live connection
- UI primitives shared with freightcom-dashboard pattern
- Dashboard sections: KPI cards, Channel breakdown, Client table, Campaign ROI

## Development
```bash
npm install && npm run dev
# Visit http://localhost:3000
```
