import { projects, type Project } from "@/lib/projects";

export type PortfolioProject = Project;

// Two projects documented on the CV. The work is real; the repositories are not public,
// so every figure here is one the CV states and nothing is inferred beyond it.
const cvProjects: PortfolioProject[] = [
  {
    slug: "globalcart-customer-intelligence",
    title: "GlobalCart Enterprise Customer Intelligence & RFM Analytics",
    category: "Customer Analytics · Segmentation · Business Intelligence",
    short: "100,000 customers scored on recency, frequency and spend, because a customer count cannot tell you who is leaving.",
    status: "CV project · Repository not published",
    cover: "/project-covers/globalcart.svg",
    github: "",
    scale: "100,000 customers · 500,000 orders · 1.5M order items",
    tools: ["Power BI", "SQL", "RFM Analysis", "Customer Segmentation"],
    context:
      "GlobalCart knew how many customers it had. That number stayed reassuring while the composition underneath it changed, because a customer who has not bought in nine months is still a customer in a headcount.",
    problem:
      "Retention work was being applied evenly across 100,000 customers, which spends the same effort on someone who buys monthly and someone who has already gone.",
    objective:
      "Score every customer on recency, purchase frequency and spend, then split the base into groups that justify different actions.",
    questions: [
      "Which customers carry the most value?",
      "Which are still buying at the same rate?",
      "Which have slowed down, and by how much?",
      "Which have stopped, and when did that start?",
    ],
    data: ["100,000 customers", "500,000 orders", "1.5 million order items"],
    work: [
      "Joined customer, order and order-item data to one purchase history per customer.",
      "Measured recency, frequency, monetary value and repeat-purchase behaviour.",
      "Applied RFM scoring and cut the base into segments.",
      "Measured revenue concentration across the segments.",
      "Built a two-page Power BI dashboard around the segments rather than around the totals.",
    ],
    workflow: ["Customer data", "Order history", "RFM scoring", "Segments", "Power BI"],
    findings: [
      "The base separates into high-value, loyal, declining and inactive groups, and the four need different treatment.",
      "Recency, frequency and spend disagree with each other on the same customer often enough that any single value measure hides a change in behaviour.",
      "Segmentation gives retention work a starting point that is not the whole 100,000.",
      "The CV does not publish segment sizes or revenue shares, so none are stated here.",
    ],
    meaning:
      "The dashboard's job is to stop the business treating 100,000 people as one audience. That is the entire value, and it does not require a predictive model to deliver it.",
    recommendations: [
      "Work the declining group first, because they are still reachable and the drop is measurable.",
      "Track purchase frequency month on month as the early signal, ahead of revenue.",
      "Separate loyal high-spenders from loyal low-spenders, since the retention action differs.",
      "Treat the segments as an entry point for targeted analysis, not as the finished answer.",
    ],
    output: "A two-page Power BI customer intelligence dashboard built on RFM segmentation across 100,000 customers.",
    limitations: [
      "The detailed evidence is documented on the CV. A public repository is not linked.",
      "RFM describes what a customer did. It does not explain why they stopped.",
      "Segment sizes are not published, so this page quotes none.",
    ],
    judgement:
      "I scored on recency, frequency and spend rather than lifetime revenue. Lifetime revenue keeps a customer looking valuable for years after they stop buying, which is the failure mode the whole exercise exists to avoid.",
  },
  {
    slug: "b2b-saas-customer-revenue-analytics",
    title: "B2B SaaS Customer & Revenue Analytics Platform",
    category: "SaaS Analytics · Revenue · Retention",
    short: "2.58 million records, 105 SQL queries and 50 statistical tests aimed at one question: is the revenue growth real?",
    status: "CV project · Repository not published",
    cover: "/project-covers/b2b-saas.svg",
    github: "",
    scale: "2.58M records · 10 tables · 105 SQL queries · 50 statistical analyses",
    tools: ["SQL", "Statistical Analysis", "Cohort Analysis", "Revenue Analytics"],
    context:
      "A B2B SaaS business with 10 tables of history and a revenue line that was going up. The question was whether the customer behaviour underneath it supported the line or was quietly working against it.",
    problem:
      "Revenue growth is a lagging measure. It can keep rising through a period of worsening retention, because the customers leaving were acquired before the ones arriving.",
    objective:
      "Measure revenue, retention, churn and cohort behaviour on the same foundation, and test the assumptions the business was making rather than reporting around them.",
    questions: [
      "How is revenue changing, and which part of it is new against expansion?",
      "What is happening to retention and churn underneath that?",
      "Do cohorts acquired at different times behave differently?",
      "Which behaviour changes arrive before the revenue changes?",
    ],
    data: ["2.58 million records", "10 tables", "Customer, subscription and revenue history"],
    work: [
      "Built 105 SQL queries as a repeatable measurement layer rather than as one-off extracts.",
      "Ran 50 statistical analyses to test business assumptions instead of describing them.",
      "Measured revenue movement over time.",
      "Compared cohorts by acquisition period.",
      "Tracked retention, churn and changes in customer behaviour against the revenue line.",
    ],
    workflow: ["10 tables", "SQL measurement layer", "Revenue movement", "Cohort comparison", "Statistical tests"],
    findings: [
      "Revenue, retention and churn have to be read together, because a rising revenue line can run for several periods on top of weakening behaviour.",
      "Cohort comparison exposes behaviour differences that a blended average removes entirely.",
      "Testing assumptions statistically changed conclusions that description alone had supported.",
      "The CV does not publish churn rates or cohort percentages, so none are stated here.",
    ],
    meaning:
      "The point of 105 queries and 50 tests was not volume. It was that every claim about the revenue had to survive being checked from a second direction before it went into a report.",
    recommendations: [
      "Report retention and churn on the same page as revenue growth, permanently.",
      "Compare cohorts before assuming customers acquired in different periods behave alike.",
      "Test the assumptions the business states out loud. Some of them do not survive it.",
      "Use behaviour change as the early warning, since it moves before revenue does.",
    ],
    output:
      "A SQL and statistical analysis layer over 2.58 million records covering revenue movement, retention, churn and cohort behaviour.",
    limitations: [
      "The detailed evidence is documented on the CV. A public repository is not linked.",
      "Individual churn rates and cohort percentages are not published, and none are invented here.",
    ],
    judgement:
      "I split the work between SQL for measures that had to be repeatable and statistical testing for claims that had to be challenged. Reporting a difference and establishing that the difference is real are two different jobs.",
  },
];

export const allProjects: PortfolioProject[] = [...projects, ...cvProjects];
