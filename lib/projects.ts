export type Project = {
  slug: string;
  title: string;
  category: string;
  short: string;
  status: string;
  cover: string;
  github: string;
  scale: string;
  tools: string[];
  context: string;
  problem: string;
  objective: string;
  questions: string[];
  data: string[];
  work: string[];
  workflow: string[];
  findings: string[];
  meaning: string;
  recommendations: string[];
  judgement: string;
};

export const projects: Project[] = [
  {
    slug: "ab-testing-experimentation",
    title: "A/B Testing & Product Experimentation",
    category: "Experimentation & Product Analytics",
    short: "Two product tests taken to a release-or-hold decision. The winner came with a catch worth more than the win.",
    status: "Controlled product experiment",
    cover: "/project-covers/a_b_analysis.png",
    github: "https://github.com/oreoluwadaniel/ab-testing-case-studies",
    scale: "8,200 website visitors over 42 days · 7,500 new app users",
    tools: ["Python", "pandas", "SciPy", "statsmodels", "Power BI"],
    context: "Two teams wanted to release a change. One had redesigned a landing page. The other had built a guided setup assistant into a mobile app. Both tests showed the new version ahead.",
    problem: "A version can be ahead by luck, or ahead by an amount too small to be worth building. Measuring only the people who chose to use a new feature can also make the result look better than the real product effect.",
    objective: "Take both tests to a yes or a no. Check that the tests were set up fairly, measure the size of the improvement, test whether the result holds across users, and give a release recommendation.",
    questions: ["Were people split fairly between the two versions?", "How much better is the new version, and what is the realistic range?", "Does the result hold across devices?", "Are we measuring everyone shown the change, or only the people who chose to use it?", "Is the improvement large enough to justify release?"],
    data: ["Landing page: 8,435 visits from 8,200 people, 4,120 on the old page and 4,080 on the new one", "Landing page test ran 42 days, 18 May to 28 June 2026", "App: 7,500 new users, 3,714 on the old setup and 3,786 on the new one", "Five app versions and two phone types covered", "Controlled experiment data prepared for the case study"],
    work: ["Counted each person once rather than treating repeat visits as new observations.", "Measured the difference between versions and the likelihood that the observed gap was random variation.", "Reported the uncertainty around each result rather than using the headline percentage alone.", "Checked the result across devices and traffic sources before making the recommendation.", "Measured everyone who was shown the change separately from people who chose to open the setup assistant.", "Checked the tests had enough observations to detect a difference worth acting on."],
    workflow: ["Frame the decision", "Check the test", "Measure the result", "Check the groups", "Assess the trade-off", "Recommend"],
    findings: ["The new landing page converted 4.44% of visitors against 3.08% for the old one, a 1.35 percentage-point improvement.", "The new page also reduced immediate exits from 65.5% to 58.8% and increased average time on page from 30.5 to 37.3 seconds.", "Counting visits instead of people changes the conversion result, showing why the unit of analysis must be fixed before a test begins.", "In the app, seven-day activity rose from 36.54% to 40.65% among new users assigned to the new setup.", "Only 37.8% of users shown the setup assistant opened it. Users who opened it had stronger seven-day activity than users who ignored it, but that comparison includes self-selection.", "The product issue is therefore not simply whether the assistant works. The larger opportunity is getting more assigned users to open it."],
    meaning: "Both changes support release. The app result also changes the next product question: adoption of the assistant is the constraint, not just the feature itself.",
    recommendations: ["Release the new landing page for the tested traffic and keep monitoring conversion after launch.", "Release the setup assistant, then focus the next test on increasing the share of users who open it.", "Do not treat the users who opened the assistant as a clean comparison group because opening it was a choice.", "Set the minimum improvement worth shipping before the test starts.", "Define whether the unit is people or visits before collecting the first observation."],
    judgement: "The strongest result is not simply that the new version won. It is that the analysis separated the effect of being offered the assistant from the behaviour of people who chose to use it.",
  },
  {
    slug: "weatherintel",
    title: "WeatherIntel: Weather Data & Forecast Testing",
    category: "Forecasting & Data Pipelines",
    short: "Weather records checked for quality, then four forecasting methods compared on unseen days. The complex model won by a narrow margin.",
    status: "Public source data · Real weather records",
    cover: "/project-covers/weather_analytics.jpg",
    github: "https://github.com/oreoluwadaniel/weatherintel-global-weather-analytics",
    scale: "8 weather stations · 4 continents · 371,482 days of readings · records back to 1763",
    tools: ["Python", "PostgreSQL", "SQL", "XGBoost", "Power BI"],
    context: "Organisations plan against historical weather, but weather archives contain missing days, doubtful readings and stations that stop and restart without warning.",
    problem: "Unverified readings can distort an analysis, and a forecasting method that has never been compared with a simple baseline can look better than it really is.",
    objective: "Keep raw readings separate from checked readings, document what was removed, then compare four forecasting approaches on days none of them had seen.",
    questions: ["Which readings can be trusted?", "What do the patterns look like after quality checks?", "Does a more complex forecast beat repeating the previous day's temperature?", "Is the improvement large enough to justify the extra maintenance?"],
    data: ["Public weather station records from the US National Oceanic and Atmospheric Administration", "8 stations across 4 continents", "371,482 days of readings that passed the quality checks", "History from 1763 to March 2018, depending on the station", "Public records used for analysis"],
    work: ["Read the raw station files and converted them into a consistent structure.", "Retained the quality warnings recorded by the source systems.", "Removed readings that failed the checks and kept a record of every exclusion.", "Stored the checked readings in a queryable database.", "Examined temperature and rainfall patterns station by station.", "Compared four forecasting methods on the same unseen days: a machine learning model, a straight-line method, repeating yesterday's reading and the long-run average for that date."],
    workflow: ["Read the source", "Check quality", "Record exclusions", "Store the clean data", "Compare methods", "Recommend"],
    findings: ["The machine learning model missed by 2.22°C on average, compared with 2.33°C for repeating yesterday's temperature and 2.25°C for the straight-line method.", "The model therefore improved on yesterday's reading by 0.11°C, a real improvement but a narrow one.", "The straight-line method was within 0.03°C of the machine learning model while being much simpler to run and explain.", "Using the long-run average for the same calendar date was much less accurate, with an average error of 4.81°C.", "371,482 days of readings passed the quality checks across the eight stations, with excluded readings retained for review.", "The stations have different historical coverage, so record length needs to be considered when comparing them."],
    meaning: "The important decision is not that the machine learning model ranked first. It is whether its small accuracy gain is worth the extra operating cost. On these results, the simpler method is preferable for most planning uses.",
    recommendations: ["Keep raw and checked readings separate.", "Record why each reading was excluded.", "Compare every forecast with a simple baseline before adopting it.", "Use the straight-line method unless the small accuracy difference has material value for the decision.", "Publish forecast error alongside the forecast itself."],
    judgement: "A forecasting method should earn its complexity. Here, the more complex model won, but not by enough to justify making it the default for ordinary planning.",
  },
  {
    slug: "data-analytics-etl",
    title: "Data Quality & Business Reporting",
    category: "Data Quality & Reporting",
    short: "Four reporting workflows where data-quality failures were measured, reviewed and kept visible instead of being silently removed.",
    status: "Reporting and data-quality workflow",
    cover: "/project-covers/data_cleaning.jpg",
    github: "https://github.com/oreoluwadaniel/data-analytics-etl-portfolio",
    scale: "5,130 customer records · 1,001 employees · 3,400 products · 75,000 sales",
    tools: ["Excel", "Power Query", "Power Pivot", "SQL", "VBA"],
    context: "Duplicated customers can inflate a sales pipeline. Missing managers can distort headcount. Invalid stock records can hide shortages. Misdated sales can move performance between periods. Reporting systems often accept all of them without complaint.",
    problem: "A clean dashboard can hide the most useful finding if invalid records are simply deleted. The better question is not only which records pass, but what failed and what that failure says about the business process.",
    objective: "Build reporting workflows where failed records go to a review list, remain counted and can be traced back to the source.",
    questions: ["Which records are safe to use in management reporting?", "Which records need review?", "Which missing fields point to an operating problem rather than a data problem?", "Can the report explain what it excluded?"],
    data: ["Customer records: 5,130", "Employees: 1,001 across payroll, attendance, leave and performance files", "Products: 3,400", "Sales: 75,000 transactions from 13 branches", "Business-style source files containing common reporting faults"],
    work: ["Reviewed the source files and measured completeness before changing the data.", "Defined the checks a record had to pass and routed failures to a review list.", "Combined payroll, attendance, leave and performance into one employee view while retaining visible gaps.", "Ran fifteen checks on the stock file before building the reordering view.", "Standardised thirteen branch sales files and applied checks before reporting.", "Traced final reporting figures back to the source and documented the differences."],
    workflow: ["Examine the source", "Measure completeness", "Apply the checks", "Review failures", "Build the report", "Trace back to source"],
    findings: ["1,555 of 5,130 customer records, 30.3%, failed the checks and were routed to review rather than deleted.", "301 employees had no performance review on file and 464 had no manager recorded. The second issue is a management ownership problem, not just a missing field.", "The stock analysis identified ₦6.49 billion of reordering exposure across 3,400 products.", "74,598 of 75,000 sales transactions were accepted into reporting; 402 rejected transactions were separately accounted for.", "The payroll file contained 1,016 rows for 1,001 people, exposing fifteen duplicated rows that could inflate headcount reporting."],
    meaning: "Failed records are evidence. Making them disappear produces a cleaner dashboard but a weaker understanding of the business.",
    recommendations: ["Route failed records to a review list and report the count.", "Treat missing managers as an ownership issue with a named owner and due date.", "Run quality checks before reports are built.", "Keep a trace from every reported total back to the source data.", "Review recurring failures with the process owner so the source improves over time."],
    judgement: "The quality process matters because it makes errors visible instead of pretending they never existed. A reporting system should show its exclusions, not conceal them.",
  },
  {
    slug: "kavora-crm-migration-governance",
    title: "Kavora CRM Migration & Data Governance",
    category: "CRM & Data Governance",
    short: "A CRM migration focused on keeping customer records usable, consistent and accountable before they reached the new system.",
    status: "CRM migration and governance project",
    cover: "/project-covers/kavora.svg",
    github: "https://github.com/oreoluwadaniel/kavora-crm-migration-data-governance",
    scale: "CRM records · Field mapping · Validation rules · Ownership controls",
    tools: ["SQL", "Python", "PostgreSQL", "CRM", "Data Governance"],
    context: "CRM migrations fail when records are moved successfully but the business meaning of those records is not preserved. Duplicate contacts, inconsistent field definitions and missing ownership create problems immediately after the migration appears complete.",
    problem: "The task is not simply to move rows from one system to another. It is to establish which fields matter, how they should be interpreted, which records are safe to migrate and who is accountable for exceptions.",
    objective: "Create a controlled migration process with field mapping, validation rules, exception handling and clear ownership for unresolved records.",
    questions: ["Which CRM fields are authoritative?", "Where do the old and new field definitions differ?", "Which records should be blocked from migration?", "Who owns the records that need manual review?"],
    data: ["Customer and contact records from CRM exports", "Field definitions and mapping rules", "Validation and exception rules", "Ownership and review requirements"],
    work: ["Mapped source fields to destination fields and documented differences in meaning.", "Standardised values before migration where the source definitions allowed it.", "Identified duplicate and incomplete records and routed them for review.", "Defined validation rules for required fields and relationships.", "Created an exception trail so rejected records could be reconciled after migration.", "Assigned ownership for unresolved data-quality issues rather than leaving them unowned."],
    workflow: ["Map the fields", "Standardise values", "Validate records", "Review exceptions", "Migrate approved data", "Reconcile"],
    findings: ["Field definitions that looked similar were not always equivalent, making direct field-to-field copying unsafe.", "Records with missing ownership needed business review before migration rather than being assigned an arbitrary owner.", "Duplicate and incomplete records were best handled as explicit exceptions so they could be reconciled without corrupting the destination CRM.", "Validation rules reduced the risk of moving structurally valid records that were operationally unusable."],
    meaning: "A CRM migration is only successful when the new system preserves usable business information and makes exceptions visible. Moving every row is not the same as moving the business data correctly.",
    recommendations: ["Keep field definitions and mapping rules under version control.", "Block records that fail required-field and relationship checks until an owner resolves them.", "Maintain an exception log through the migration and reconciliation stages.", "Assign ownership for recurring data-quality failures to the process owner, not only the data team."],
    judgement: "The strongest part of the migration is the control around exceptions. The destination CRM is only as reliable as the rules used to decide what is allowed into it.",
  },
];

export const allProjects = projects;
