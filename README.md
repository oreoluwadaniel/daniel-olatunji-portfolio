# Daniel Olatunji — Portfolio

**Data Analyst | Business Intelligence Analyst — Lagos, Nigeria**

Live: **https://daniel-olatunji-portfolio.vercel.app**

Four years of finding out why the numbers moved and what to do about it: revenue, customers, risk, logistics,
forecasting and the data-quality problems sitting underneath them.

This repository is the presentation layer for the portfolio. The case studies explain the business question,
data, method, findings, judgement and limits. Public repositories are linked where they are published.

## Case studies

| Project | Field | Data basis | Repository |
| --- | --- | --- | --- |
| WeatherIntel: Forecast Evaluation | Forecasting, data engineering | Real NOAA GHCN-Daily, 371,482 station-days | [repo](https://github.com/oreoluwadaniel/weatherintel-global-weather-analytics) |
| Data Analytics & ETL Portfolio | Data quality, ETL | Four project datasets | [repo](https://github.com/oreoluwadaniel/data-analytics-etl-portfolio) |
| Bloomcrest Revenue Intelligence | Revenue analytics | Engineered, 18,000 customers | [repo](https://github.com/oreoluwadaniel/bloomcrest-revenue-intelligence) |
| Everdale Retail Analytics | Retail BI | Engineered, 194,480 order lines | [repo](https://github.com/oreoluwadaniel/everdale-retail-analytics) |
| Kavora CRM Migration | Migration, data quality | Project dataset, 4,755 rows | [repo](https://github.com/oreoluwadaniel/kavora-crm-migration-data-governance) |
| Portfolio Risk & Forecast Monitoring | Financial analytics | Real market data, 21,380 records | Not publicly linked |
| Stratavax Logistics Analytics | Operations analytics | Engineered, 6 related tables | Not publicly linked |
| Brightwatt Operations | Process design | Modelled company | [repo](https://github.com/oreoluwadaniel/Brightwatt-Operations-Automation) |
| GlobalCart Customer Intelligence & RFM Analytics | Customer analytics | 100,000 customers, 500,000 orders, 1.5M order items | Not publicly linked |
| B2B SaaS Customer & Revenue Analytics | SaaS analytics | 2.58M records, 10 tables | Not publicly linked |

Two projects use real public data. Two additional projects are documented from the CV because their public
repositories are not currently linked. The remaining projects use datasets engineered to carry specific faults
worth solving, such as grain mismatches, inconsistent legacy exports and missing master data.

## Stack

Next.js 16 (App Router, static export) · React 19 · TypeScript · CSS custom properties · `next/font` (Inter)

No CSS framework and no component library. Project covers are analytical visuals rather than generic stock images.

## Running locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npx tsc --noEmit
```

## Deployment

Deployed on Vercel from `main`. GitHub Actions type-checks and builds on pushes and pull requests.

## Contact

[danolatunji25@gmail.com](mailto:danolatunji25@gmail.com) ·
[LinkedIn](https://www.linkedin.com/in/daniel-olatunji/) ·
[GitHub](https://github.com/oreoluwadaniel)
