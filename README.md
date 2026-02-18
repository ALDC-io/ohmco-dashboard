# OhmCo Carwash Marketing Dashboard

**Project ID**: 2026-02-18-ohmco-dashboard
**Date**: 2026-02-18
**Status**: ACTIVE
**Owner**: aldc

---

## CCE Workflow

**Workflow**: Explore → Plan → Code → QA → Commit

| Principle | Practice |
|-----------|----------|
| **Context** | `/clear` between unrelated tasks. `/compact` at 75% context. |
| **Agents** | Spawn parallel agents for independent work. Use `Explore` subagent for research. |
| **Sessions** | Update PROGRESS.md after every significant session. Commit before ending. |
| **Quality** | QA every phase: syntax, edge cases, integration, cross-file consistency. |

---

## Executive Summary

Prospect prototype for **OhmCo**, a Wisconsin-based carwash marketing agency (founded by Mel & Mike Ohlinger). Demonstrates ALDC's analytics capabilities by showing a Marketing Performance Dashboard that tracks and proves ROI for their carwash clients' campaigns.

The dashboard shows multi-client marketing performance across channels — website traffic, SEO rankings, social media engagement, ad performance, and membership conversion — all in one view.

**Key Goals:**
- Demonstrate ALDC's data visualization and analytics expertise
- Show OhmCo how they could track multi-client marketing performance in one view
- Provide a working prototype that could be connected to live Eclipse data

**Expected Impact:**
- Win OhmCo as an analytics/data platform client
- Establish carwash marketing vertical as a repeatable prototype pattern

---

## Scope

### In Scope
- KPI cards with sparklines (visits, signups, engagement, SEO ranking)
- Channel performance stacked bar chart (organic, paid, social, direct, email)
- Client performance table (sortable, 6 mock carwash clients)
- Campaign ROI panel with spend vs. revenue visualization
- AI Insights tab (placeholder for future Eclipse chat integration)
- Responsive layout (mobile/tablet/desktop)

### Out of Scope
- Live data connection (Eclipse API proxy is stubbed)
- Authentication/user management
- Data export/reporting
- Email/notification features

### Dependencies
- freightcom-dashboard (UI primitives, pattern reference)
- prospect_prototypes repo (GHA deployment)

---

## Technical Architecture

### System Components
```
page.tsx → Dashboard.tsx → MetricCard (x4)
                         → ChannelBreakdown (Recharts stacked bar)
                         → CampaignROI (ROI bars)
                         → ClientTable (sortable table)
         → AI Insights (placeholder)
         → Eclipse API proxy (future)
```

### Technology Stack
- **Frontend**: Next.js 15.3.3, React 19, TypeScript
- **Styling**: Tailwind CSS with HSL color variables
- **Charts**: Recharts
- **Icons**: Lucide React
- **Infrastructure**: GHA → GitHub Pages (via prospect_prototypes repo)

### Key Decisions
1. **Mock data only**: No API keys needed for demo — all data is realistic but static
2. **freightcom pattern**: Copied UI primitives (button, card, tabs, tooltip) for consistency
3. **OhmCo brand colors**: Deep electric blue (#1B4DFF) + bright cyan (#00D4FF) accent

---

## Implementation Plan

### Phase 1: Scaffold & UI Primitives
**Agent Strategy**: Single agent

- [x] Create project structure based on freightcom-dashboard
- [x] Copy UI primitives (button, card, tabs, tooltip)
- [x] Configure Tailwind with OhmCo brand colors
- [x] Create TypeScript interfaces for dashboard data
- [x] QA: Verify build compiles

**Exit Criteria**: `npm run build` succeeds

### Phase 2: Dashboard Components
**Agent Strategy**: Single agent

- [x] MetricCard with sparklines (Recharts AreaChart)
- [x] ChannelBreakdown stacked bar chart
- [x] ClientTable with sort functionality
- [x] CampaignROI panel with ROI bars
- [x] Mock data with 6 carwash clients, 30 days data
- [x] QA: All components render, charts display correctly

**Exit Criteria**: Dashboard renders with all 4 sections populated

### Phase 3: Polish & Deploy
**Agent Strategy**: Single agent

- [x] Main page layout with OhmCo branding
- [x] AI Insights placeholder tab
- [x] ALDC footer branding
- [x] Responsive grid (4-col → 2-col → 1-col)
- [ ] QA: Verify responsive layout, verify build
- [ ] Commit and push

**Exit Criteria**: Clean build, committed to repo

---

## Security & Deployment

- [x] No secrets in repository (Eclipse API uses .env)
- [x] API proxy has proper error handling
- [x] No user input to validate (mock data only)
- [x] Standalone dashboard, no backend dependencies

---

## Deliverables

1. **Marketing Performance Dashboard** - Working Next.js app with 4 KPI cards, channel chart, client table, and campaign ROI panel
2. **Eclipse API Proxy** - Stubbed route ready for live data connection
3. **AI Insights Tab** - Placeholder for future Eclipse-powered chat

---

## References

- **Primary repo**: `/home/aldc/repos/prospect_prototypes/ohmco-dashboard/`
- **Pattern source**: `/home/aldc/repos/prospect_prototypes/freightcom-dashboard/`
- **Brand reference**: OhmCo website (ohmco.co)
- **Eclipse API**: `https://eclipse.analyticlabs.io` (future connection)

---

**Last Updated**: 2026-02-18
**Template Version**: 3.1.0 (CCE Swarms)
**Status**: ACTIVE
